<template>
  <div class="com-nav">
    <div class="nav-item"
         v-for="(item, index) in navArr"
         :key="index"
         :class="{ active: curRouteName === item.routerName }"
         @click="onNavItemClick(item, index)">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'com-nav',
  data () {
    return {
      navArr: [
        { title: '弹出框', routerName: 'oeeoModal' },
        { title: '图片蒙板切换', routerName: 'imgBannerToggle' },
        { title: '滑动切换', routerName: 'sliderListWrap' },
        { title: 'slotTest', routerName: 'slotTest' }
      ],
      curNavIndex: 0
    }
  },
  computed: {
    curRouteName () {
      return this.$route.name
    }
  },
  methods: {
    onNavItemClick (item, index) {
      this.curNavIndex = index
      this.$router.push({
        name: item.routerName
      })
    }
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  .com-nav {
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    width: 100px;
    background-color: #888;
    border-radius: 20px;
    padding: 20px 0;
    .nav-item {
      width: 100%;
      box-sizing: border-box;
      margin-top: 10px;
      padding: 0 10px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      font-size: 15px;
      color: #fff;
      overflow: hidden;
      white-space: nowrap;
      text-overflow:ellipsis;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover,
      &.active {
        background-color: #444;
        transition: all 0.3s ease-in-out;
      }
    }
  }
</style>
