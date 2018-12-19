<template>
  <div class="slot-test-page">
    <nav class="nav">
      <div class="nav-item"
           v-for="(item, index) in nav"
           :key="index"
           @click="curComponentIndex = index">
        {{ item.title }}
      </div>
    </nav>
    <div class="com-wrap">
      <keep-alive>
        <transition name="slide"
                    enter-active-class="fadeInLeft"
                    leave-active-class="fadeOutRight">
          <component :is="nav[curComponentIndex].name"></component>
        </transition>
      </keep-alive>
    </div>
    <h1>你好</h1>
    <h1>你好</h1>
    <h1>你好</h1>
    <h1>你好</h1>
    <img :src="imgUrl" alt="">
    <img src="../images/1.jpg" alt="">

    <div class="box1" ref="box1"></div>
    <div class="box2" ref="box2"></div>
    <div class="box3" ref="box3"></div>
    <oeeo-title ref="box5"></oeeo-title>

    <div style="position: fixed; top: 20px; left: 100px; background-color:#fff; z-index: 9999">
      <div>{{ text1 }}</div>
      <div>{{ text2 }}</div>
    </div>
  </div>
</template>

<script>
import oeeoTitle from '../components/oeeo-title'
import { add } from '../utils/add'
export default {
  name: 'slot-test',
  components: {
    'com-a': { template: `<div style="background: red; height: 200px;">com-a</div>` },
    'com-b': { template: `<div style="background: blue; height: 200px;">com-b</div>` },
    'com-c': { template: `<div style="background: yellow; height: 200px;">com-c</div>` },
    'com-d': { template: `<div style="background: #eee; height: 200px;">com-d</div>` },
    oeeoTitle
  },
  data () {
    return {
      nav: [
        {name: 'com-a', title: '组件1'},
        {name: 'com-b', title: '组件2'},
        {name: 'com-c', title: '组件3'},
        {name: 'com-d', title: '组件4'}
      ],
      curComponentIndex: 0,
      imgUrl: '',
      text1: '',
      text2: ''
    }
  },
  mounted () {
    this.text1 = JSON.parse(JSON.stringify(this.$refs.box1.offsetTop))

    setTimeout(() => {
      this.text2 = this.$refs.box1.offsetTop
    }, 3000)
  }
}
</script>

<style scoped lang="less">
.slot-test-page {
  .nav {
    display: flex;
    justify-content: space-between;
    text-align: center;
    .nav-item {
      flex: 1;
      margin-right: 30px;
      background-color: green;
      color: #fff;
      cursor: pointer;
    }
  }
  .com-wrap {
    width: 100%;
    height: 200px;
    position: relative;
    &>div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%
    }
  }

  @keyframes slideLeftIn {
    0% {
      transform: translate3d(-100%, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes slideLeftOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
  .slideLeft-enter-active {
    animation-name: slideLeftIn;
    animation-duration: 0.5s;
  }
  .slideLeft-leave-active {
    animation-name: slideLeftOut;
    animation-duration: 0.5s;
  }
}
</style>
