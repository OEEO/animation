import Vue from 'vue'
import Router from 'vue-router'
import index from '../pages/index'
import imgBannerToggle from '../pages/img-banner-toggle'
import oeeoModal from '../pages/oeeo-modal'
import sliderListWrap from '../pages/slider-list-wrap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '',
          redirect: '/oeeoModal'
        },
        {
          path: '/oeeoModal',
          name: 'oeeoModal',
          component: oeeoModal
        },
        {
          path: '/imgBannerToggle',
          name: 'imgBannerToggle',
          component: imgBannerToggle
        },
        {
          path: '/sliderListWrap',
          name: 'sliderListWrap',
          component: sliderListWrap
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
