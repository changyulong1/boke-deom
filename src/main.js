import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import uilt from '@/helpers/util'
// import highlight from 'highlight.js'
// Vue.directive('highlight', function (el) {
//   let blocks = el.querySelectorAll(' pre code');
//   blocks.forEach((block) => {

//     highlight.highlightAll(block)
//   })
// })
Vue.use(ElementUI);
Vue.use(uilt)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
