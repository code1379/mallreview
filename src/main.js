import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入样式文件
import "assets/stylus/index.styl"
// 事件总线
Vue.prototype.$bus = new Vue()
// 引入弹出框
import toast from 'cn/toast'
Vue.use(toast)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
