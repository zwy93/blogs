import Vue from 'vue'
import Router from 'vue-router'
// 前台
import nav from '@/components/web/layout/nav'
import indexs from '@/views/web/home'
import web from '@/views/web/web'
import weblist from '@/views/web/weblist/weblist'
import resume from '@/views/web/resume/resume'
import timeShaft from '@/views/web/timeShaft/timeShaft'
import mesBoard from '@/views/web/mesBoard/mesBoard'
import webpart from '@/views/web/webpart/webpart'
import NotFound from '@/views/web/notFound/NotFound'
// 后台
import backStage from '@/components/backStage/backStage'
import backindex from '@/views/backStage/home'
import backWeb from '@/views/backStage/web'
import backresume from '@/views/backStage/resume'
import backtimeShaft from '@/views/backStage/timeShaft'
import backmesBoard from '@/views/backStage/mesBoard'


import test from '@/views/web/test/test'
import test1 from '@/views/web/test/test1'
// const _import = require('./_import_' + process.env.NODE_ENV)
Vue.use(Router)

const routerList = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      component: nav,
      children:[
        {
          path: '/', 
          name:'首页',
          component: indexs
        },
        {
          path: '/web', 
          name:'前端小记',
          component: web,
          redirect:'/weblist',
          children:[
            {
              path:'/webpart',
              name:'文章详情',
              component:webpart
            },
            {
              path:'/weblist',
              component:weblist
            },
          ]
        },{
          path:'/resume',
          name:'个人简介',
          component : resume
        },
        {
          path:'/timeShaft',
          name:'时间轴',
          component: timeShaft
        },{
          path:'/mesBoard',
          name:'留言板',
          component:mesBoard
        }
        
      ]
    },
    {
      path:'/backStage',
      name:'后台管理',
      component:backStage,
      meta:{
        roles:['admin']
      },
      children:[
        {
          path: '/', 
          name:'首页',
          component: backindex
        },{
          path: '/backStage/web', 
          name:'前端小记',
          component: backWeb
        },{
          path: '/backStage/resume', 
          name:'个人简介',
          component: backresume
        },{
          path: '/backStage/timeShaft', 
          name:'时间轴',
          component: backtimeShaft
        },{
          path: '/backStage/mesBoard', 
          name:'留言板',
          component: backmesBoard
        },{
          path:'/test',
          name:'功能测试',
          component:test
        },{
          path:'/test1',
          name:'功能测试',
          component:test1
        }
      ]
    },
    {
      path:'*',
      component:NotFound
    }
  ]
})


export default routerList

