<template>
  <div class="com-nav">
    <div class="nav-item" v-for="(item, index) in navArr" :key="index" @click="onNavItemClick(item)">{{ item.title }}</div>
  </div>
</template>

<script>
export default {
  name: 'com-nav',
  data () {
    return {
      navArr: [
        { title: '首页', pathName: 'oeeoModal' },
        { title: '中间', pathName: 'slider-list-wrap' },
        { title: '最后', pathName: 'oeeoModal' }
      ]
    }
  },
  methods: {
    onNavItemClick (item) {
      this.$emit('onNavItemClick', item)
    }
  }
}
</script>

<style scoped lang="less">
  .com-nav {
    display: flex;
    width: 100%;
    justify-content: space-around;
    .nav-item {
      width: 30%;
      background-color: green;
      color: #fff;
    }
  }
</style>
