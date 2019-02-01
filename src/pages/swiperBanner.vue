<script src="../../../../../copyGitHubToCZWang.js"></script>
<template>
  <div class="swiperBanner">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(imgs, index) in imgsArr" :key="index">
        <div class="img-wrap" v-for="(item, key) in imgs" :key="key">
          <img :src="item" alt="" >
        </div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
    </swiper>
  </div>
</template>

<script>
let img = require('../images/1.jpg')
let img2 = require('../images/2.jpg')
export default {
  name: 'swiperBanner',
  data () {
    return {
      imgsArr: [new Array(5).fill(img), new Array(5).fill(img2)],
      swiperOption: {
        freeMode: true, // 是否不按页切换
        autoplay: false,
        // autoplay: {
        //   delay: 3000,
        //   stopOnLastSlide: false,
        //   disableOnInteraction: true
        // },
        speed: 300,
        autoHeight: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets'
          // type: 'fraction',
          // type : 'progressbar',
          // type : 'custom',
        },
        on: {
          slideChangeTransitionStart () {
          }
        }
      }
    }
  },
  created () {
    console.log(this.imgs)
  }
}
</script>

<style lang="less">
.swiperBanner {
  .swiper-slide {
    font-size: 0;
    .img-wrap {
      display: inline-block;
      width: 20%;
      padding: 0 10px;
      box-sizing: border-box;
      img {
        width: 100%;
      }
    }
  }
}
</style>
