import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import account from './modules/account'
import sites from './modules/sites'
import collaborators from './modules/collaborators'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    account,
    sites,
    collaborators
  },
  plugins: [createPersistedState()]
})