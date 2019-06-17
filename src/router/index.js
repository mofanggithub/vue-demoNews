import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Music from '@/components/music'
import Haha from '@/components/haha'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/gaoxiao',
      name: 'Haha',
      component: Haha
    }
  ]
})
