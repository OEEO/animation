import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import imgBannerToggle from '@/components/img-banner-toggle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'imgBannerToggle',
      component: imgBannerToggle
    }
  ]
})
