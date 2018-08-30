<template>
  <div class="hello">
    <div style="position: fixed;">
      <button @click="showPopup = true">点击出现</button>
      <button @click="showPopup = false">点击消失</button>
    </div>
    <p v-for="item in 100">{{ item }}</p>
    <div class="popup-wrap" v-if="showPopup" @click="showPopupContent = false">
      <transition name="fadeRight" :duration="popupDuration">
          <div class="popup" @click.stop v-if="showPopupContent">你好</div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showPopup: false,
      showPopupContent: false,
      popupDuration: 500
    }
  },
  watch: {
    showPopup () {
      if (this.showPopup) {
        document.body.className += 'modalBgFixed'
        setTimeout(() => {
          this.showPopupContent = true
        }, 20)
      } else {
        document.body.className = document.body.className.replace('modalBgFixed', '')
      }
    },
    showPopupContent () {
      if (!this.showPopupContent) {
        setTimeout(() => {
          this.showPopup = false
        }, this.popupDuration)
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .modalBgFixed {
    height: 100vh;
    overflow: hidden;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .popup-wrap {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .popup {
    position: absolute;
    right: 0;
    width: 80vw;
    height: 100%;
    background-color: red;
  }
</style>
