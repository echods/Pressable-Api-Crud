import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import account from './modules/account'
import sites from './modules/sites'
import collaborators from './modules/collaborators'
import domains from './modules/domains'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    sites,
    collaborators,
    domains
  },
  plugins: [createPersistedState()]
})
