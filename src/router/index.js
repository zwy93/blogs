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
          name:'webHome',
          component: indexs,
          meta: {
            title: '首页',
          }
        },
        {
          path: '/web', 
          name:'webWeb',
          component: web,
          redirect:'/weblist',
          meta: {
            title: '前端小记',
          },
          children:[
            {
              path:'/webpart',
              name:'webPart',
              component:webpart,
              meta: {
                title: '文章详情',
              }
            },
            {
              path:'/weblist',
              component:weblist,
              meta: {
                title: '前端小记',
              }
            },
          ]
        },{
          path:'/resume',
          name:'webResume',
          component : resume,
          meta: {
            title: '个人简介',
          }
        },
        {
          path:'/timeShaft',
          name:'webTimeShaft',
          component: timeShaft,
          meta: {
            title: '时间轴',
          }
        },{
          path:'/mesBoard',
          name:'webMesBoard',
          component:mesBoard,
          meta: {
            title: '留言板',
          }
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
          name:'backindex',
          component: backindex,
          meta: {
            title: '首页',
          }
        },{
          path: '/backStage/web', 
          name:'backWeb',
          component: backWeb,
          meta: {
            title: '前端小记',
          }
        },{
          path: '/backStage/resume', 
          name:'backresume',
          component: backresume,
          meta: {
            title: '个人简介',
          }
        },{
          path: '/backStage/timeShaft', 
          name:'backtimeShaft',
          component: backtimeShaft,
          meta: {
            title: '时间轴',
          }
        },{
          path: '/backStage/mesBoard', 
          name:'backmesBoard',
          component: backmesBoard,
          meta: {
            title: '留言板',
          }
        },{
          path:'/test',
          name:'test',
          component:test,
          meta: {
            title: '功能测试',
          }
        },{
          path:'/test1',
          name:'test1',
          component:test1,
          meta: {
            title: '功能测试',
          }
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

