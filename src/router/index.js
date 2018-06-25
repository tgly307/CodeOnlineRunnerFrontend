import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Node from '@/views/node/node'
import Python from '@/views/python/python'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/node',
      name: 'node',
      component: Node
    },
    {
      path: '/python',
      name: 'python',
      component: Python
    }
  ]
})
