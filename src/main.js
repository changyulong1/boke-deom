import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import 'github-markdown-css/github-markdown-light.css'
import '@/assets/cyanosis.scss'
import 'highlight.js/styles/monokai-sublime.css'
import '@/assets/index.scss'
import uilt from '@/helpers/util'

Vue.use(ElementUI);
Vue.use(uilt)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
