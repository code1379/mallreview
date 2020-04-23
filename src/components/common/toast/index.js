import Toast from './Toast.vue'
const obj = {}
obj.install = function (Vue) {
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  const div = document.createElement('div')
  toast.$mount(div)
  // 记住这里是 $el
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}
export default obj