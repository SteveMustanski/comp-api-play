import Vue from 'vue'
import App from './App.vue'
import VueCopositionApi from '@vue/composition-api'

Vue.use(VueCopositionApi);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
