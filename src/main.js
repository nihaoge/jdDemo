import Vue from 'vue'
import App from './App.vue'
import router from './router'
import stort from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

new Vue({
  router,
  stort,
  render: h => h(App),
}).$mount('#app')
