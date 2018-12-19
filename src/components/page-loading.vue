<template>
  <div class="page-loading" @click="clickLoadingPage">
    <div class="loading-wrap" v-if="status === -1">
      <ka-loading></ka-loading>
    </div>
    <div class="fail-wrap" v-if="status === 0">
      <div class="icon"></div>
      <div class="text">轻触屏幕重新加载</div>
    </div>
  </div>
</template>

<script>
import kaLoading from './ka-loading'
export default {
  name: 'page-loading',
  props: {
    requestStatus: {
      type: Number,
      default: -1,
      required: true
    }
  },
  components: { kaLoading },
  computed: {
    status () {
      return this.requestStatus
    }
  },
  methods: {
    clickLoadingPage () {
      if (this.status === 0) {
        window.location.reload()
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../lib/less/variable";
  .page-loading {
    width: 100%;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  .fail-wrap {
    .text {
      color: #999;
      .fs(18);
    }
  }
</style>
