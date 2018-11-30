<template>
  <div class="oeeo-modal-com">
    <div class="box" v-for="item in 100" :key="item">{{ item }}</div>

    <transition name="fade">
      <div v-if="showModal" class="modal-wrap" @click="closeTheModal" :style="{ top: scrollTop + 'px' }">
        <div class="modal-content-wrap">
          <div class="modal-content-item" v-for="item in 200" :key="item">{{ item }}</div>
        </div>
      </div>
    </transition>

    <div class="fixed-wrap">
      <div class="control-wrap">
        <button class="control-item" @click="showTheModal">显示模态框</button>
        <button class="control-item" @click="closeTheModal">关闭模态框</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'oeeo-modal-com',
  data () {
    return {
      showModal: false,
      scrollTop: 0
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
      wczModalControler.closeModal()
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .oeeo-modal-com {
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
      left: 0;
      min-width: 100px;
      display: flex;
      flex-direction: column;
    }
    .control-item {
      margin-top: 10px;
    }
  }
</style>
