// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routerList from './router'
import store from './store/store'
import '@/style/index.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false


// 面包屑导航测试
let breadcrumb = routerList.options.routes[0].children
for(let i = 0 ; i < breadcrumb.length ; i ++){
  
}
console.log(routerList);
routerList.beforeEach((to, from, next) => {
  console.log(to)
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:routerList,
  store,
  components: { App },
  template: '<App/>'
})
