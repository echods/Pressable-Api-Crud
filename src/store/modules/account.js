// initial state
const state = {
  access_token: '',
  refresh_token: '',
  isAuthenticated: false
}

// getters
const getters = {}

// actions
const actions = {
  setTokens({ commit, state }, account) {
    commit('SET_AUTH_TOKENS', account)
  }
}

// mutations
const mutations = {
  SET_AUTH_TOKENS(state, account) {
    state.access_token = account.access_token
    state.refresh_token = account.refresh_token
    state.isAuthenticated = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}