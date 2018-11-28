<template>
  <div class="wrap">
    <div class="img-banner-toggle">
      <canvas id="canvas-toggle" ></canvas>
      <img src="../images/1.jpg">
    </div>
  </div>
</template>

<script>
export default {
  name: 'img-banner-toggle',
  data () {
    return {
      imageHasBeenLoad: false
    }
  },
  methods: {
    handleScroll (e) {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      console.log('scrollTop', scrollTop)
      let fontSize = parseFloat(document.documentElement.style.fontSize)
      let W = fontSize * 10
      let r = scrollTop < (W / 2) ? scrollTop : (W / 2) * 1.15
      let options = {
        r: r
      }
      this.drawImage(options)
    },
    drawImage (options) {
      let fontSize = parseFloat(document.documentElement.style.fontSize)
      let W = fontSize * 10
      let H = W * 9 / 16
      let image = new Image()
      image.src = require('../images/2.jpg')
      let canvas = document.querySelector('#canvas-toggle')
      canvas.width = W
      canvas.height = H
      // 获取 canvas的 2d 环境对象
      let ctx = canvas.getContext('2d')
      console.log('W', W)
      console.log('H', H)
      if (this.imageHasBeenLoad) {
        ctx.drawImage(image, 0, 0, W, H)
        ctx.globalCompositeOperation = 'destination-in'
        ctx.fillStyle = 'rgb(63,169,245)'
        ctx.arc(W / 2, H / 2, options.r, 0, Math.PI * 2, true)
        ctx.fill()
        return
      }
      image.onload = () => {
        this.imageHasBeenLoad = true
        ctx.drawImage(image, 0, 0, W, H)
        ctx.globalCompositeOperation = 'destination-in'
        ctx.fillStyle = 'rgb(63,169,245)'
        ctx.arc(W / 2, H / 2, options.r, 0, Math.PI * 2, true)
        ctx.fill()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="less">
  @import "../less/variable";
  .wrap {
    width: 100%;
    height: 150vh;
  }
  .img-banner-toggle {
    width: 10rem;
    height: 5.625rem;
    position: relative;
    margin: 200px auto;
    img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }
  }
  #canvas-toggle {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: transparent;
  }
</style>
