import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg)
})

Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
