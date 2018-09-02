import Vue from 'vue'
import Vuex from 'vuex'
import account from './modules/account'
import sites from './modules/sites'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    sites
  }
})