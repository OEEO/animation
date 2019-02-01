<template>
  <div class="slider-list-wrap" style="-webkit-overflow-scrolling:touch;">
    <ly-tab
      class="top-tab-menu"
      v-model="selectedId"
      @change="tabChange"
      :items="items"
      :options="options">
    </ly-tab>
    <div class="tab-content-wrap">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(item, index) in items"
                      :key="index"
                      :style="{ left: index * 100 + 'vw' }"
        >
          <div v-for="(data, j) in item.data" :key="j">
            <div v-for="(num, i) in 50" :key="i">  {{ data }} {{ num }}</div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <div class="swiper-scrollbar"   slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import utils from '../utils/index'
import tab from '../components/vux/tab/tab'
import tabItem from '../components/vux/tab/tab-item'

export default {
  components: { tab, tabItem },
  name: 'slider-list-wrap',
  data () {
    let self = this
    return {
      scrollTop: 0,
      loading: false,
      backUpScrollTop: 0,
      swiperDataList: [
        [
          { title: 1 }
        ]
      ],
      selected: 0,
      selectedId: 0,
      items: [
        {label: '首页', scrollTop: 0, data: ['你好']},
        {label: '推荐', scrollTop: 0, data: ['你好']},
        {label: 'Android', scrollTop: 0, data: ['你好']},
        {label: '前端', scrollTop: 0, data: ['你好']},
        {label: '后端', scrollTop: 0, data: ['你好']},
        {label: 'iOS', scrollTop: 0, data: ['你好']},
        {label: '产品', scrollTop: 0, data: ['你好']},
        {label: '人工智能', scrollTop: 0, data: ['你好']},
        {label: '设计', scrollTop: 0, data: ['你好']},
        {label: '其它', scrollTop: 0, data: ['你好']}
      ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段
      },
      swiperOption: {
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
        on: {
          slideChangeTransitionStart () {
            let activeIndex = this.activeIndex
            self.selectedId = activeIndex
          }
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  methods: {
    getScrollTop (sel) {
      if (!sel) {
        return document.documentElement.scrollTop || document.body.scrollTop
      } else {
        return document.querySelector(sel).scrollTop
      }
    },
    tabChange (item, index) {
      this.swiper.slideTo(index, 400, true)
    },
    handleScroll () {
      let curDataList = this.items[this.selectedId].data
      let len = curDataList.length
      curDataList.push(`下拉加载${len}`)
    }
  },
  mounted () {
    let sliders = document.querySelectorAll('.swiper-slide');
    [...sliders].forEach(slider => {
      slider.addEventListener('scroll', e => {
        if (utils.isReachBottom('.swiper-slide-active')) {
          this.handleScroll()
        }
      })
    })

  }
}
</script>

<style scoped lang="less">
  .slider-list-wrap {
    .top-tab-menu {
      position: fixed;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      z-index: 100;
      max-width: 750px;
      background-color: #fff;
    }

    .tab-content-wrap {
      padding-top: 60px;
      background-color: #eee;
      min-height: 100vh;
    }
  }
</style>

<style lang="less">
  .slider-list-wrap {
    .ly-tab-list {
      padding: 0;
      height: 50px;
    }
    .swiper-slide {
      position: fixed;
      height: 100vh;
      overflow-y: auto;
      top: 0;
    }
  }
</style>
