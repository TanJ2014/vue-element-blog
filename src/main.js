// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './mock/mockServer'
import '../static/kindeditor/themes/default/default.css'
import '../static/kindeditor/kindeditor-all-min.js'
import '../static/kindeditor/lang/zh-CN.js'

import store from './store'

Vue.config.productionTip = false

Vue.use(element)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
});
