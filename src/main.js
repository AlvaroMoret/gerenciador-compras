import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('dinheiro', valor => {
	return `R$ ${parseFloat(valor).toFixed(2)}`.replace('.', ',')
})

Vue.use(Vuex);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
