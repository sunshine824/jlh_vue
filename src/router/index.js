import Vue from 'vue'
import Router from 'vue-router'
import AppDownload from '../components/app-download.vue'
import Menu from '../components/menu.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/app-download',
      name: 'App下载',
      component: AppDownload
    },
    {
      path:'/menu',
      name:'功能列表',
      component:Menu
    }
  ]
})
