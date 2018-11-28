<template>
  <div class="index-page">
    <com-nav @onNavItemClick="onNavItemClick"></com-nav>

    <keep-alive>
      <component :is="curComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import oeeoModal from '../components/oeeo-modal'
import comNav from '../components/common/com-nav'
import sliderListWrap from '../components/slider-list-wrap'
export default {
  components: { sliderListWrap, oeeoModal, comNav },
  name: 'index',
  data () {
    return {
      showModal: false,
      scrollTop: 0,
      curComponent: 'oeeo-modal'
    }
  },
  methods: {
    scroll (e) {
      console.log(e)
    },
    showTheModal () {
      this.scrollTop = wczModalControler.openModal()
      this.showModal = true
    },
    closeTheModal () {
      this.showModal = false
      wczModalControler.cloneModal()
    },
    onNavItemClick (item) {
      let name = item.pathName
      this.curComponent = name
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .index-page {
    width: 100%;
    background-color: #fff;
    position: relative;
    .box {
      height: 100px;
      margin-top: 10px;
      background-color: red;
      color: #fff;
      font-size: 50px;
      text-align: center;
      line-height: 100px;
    }
    .modal-wrap {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      max-width: 750px;
      height: 100vh;
      background-color: rgba(0,0,0,0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 100;
    }

    .modal-content-wrap {
      width: 100%;
      height: 50vh;
      background-color: darkgray;
      overflow-y: scroll;
    }

    .modal-content-item {
      width: 100%;
      height: 20px;
      line-height: 20px;
      text-align: center;
      color: #fff;
      font-size: 20px;
      margin-top: 5px;
    }

    .fixed-wrap {
      position: fixed;
      width: 100%;
      max-width: 750px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      height: 0;
    }
    .control-wrap {
      position: absolute;
      left: 0%;
      min-width: 100px;
      display: flex;
      flex-direction: column;
    }
    .control-item {
      margin-top: 10px;
    }
  }
</style>
