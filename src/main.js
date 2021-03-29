import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import store from './store/index.js'

// Vue.use(Vuex)

Vue.config.productionTip = false

import './assets/all.css'

router.beforeEach((to,from,next)=>{
	if (to.meta.title){
		document.title = to.meta.title
	}
	next()
})

new Vue({
  router,
  render: h => h(App),
  store,
  
}).$mount('#app')



