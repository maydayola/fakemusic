import Vue from 'vue'
import Router from 'vue-router'


import play from '@/components/play/play.vue'
import playing from '@/components/playing/playing.vue'
import content from '@/components/content/content'



import new_list from '@/components/content/new/new.vue'
import collect from '@/components/content/collect/collect'
import list from '@/components/content/list/list'
import search from '@/components/content/search/search'
import singer from '@/components/content/singer/singer'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      component:content,
      children:[
      	{
      		path:'/',
      		redirect:'/new'
      	},
      	{
      		path:'/new',
      	     component:new_list
      	},
      	{
      		path:'/collect',
      	     component:collect
      	},
      	{
      		path:'/list',
      	     component:list
      	},
      	{
      		path:'/search',
      	     component:search
      	},
      	{
      		path:'/singer',
      	     component:singer
      	},
      ]
    },
    {
      path: '/playing',
      component: playing
    },
    
  ]
})
