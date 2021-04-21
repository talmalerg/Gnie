import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import VueTailwind from 'vue-tailwind'

import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import '@/assets/tailwind.css'


 
Vue.use(PerfectScrollbar);


const settings = {
  //...
}

Vue.use(VueTailwind, settings)


Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
