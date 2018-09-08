import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes'
import store from './store'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
})

router.beforeEach((to, from, next) => {
  if(store.state.account.access_token) {
    next()
  } else {
    next({path: '/'})
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
