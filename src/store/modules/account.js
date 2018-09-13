import auth from '../../api/auth'

// Initial state
const state = {
  access_token: '',
  refresh_token: '',
  isAuthenticated: false
}

// getters
const getters = {}

// actions
const actions = {
  authorize({ commit, state, dispatch }, params) {
    auth.post('/token', {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      grant_type: 'password',
      email: params.email,
      password: params.password
    })
    .then(function (response) {
      if(response.status === 200) {
        commit('SET_AUTH_TOKENS', response.data)
      }
    }.bind(this))
    .catch(function (error) {
      if(error.response.status === 401) {
        dispatch('refreshToken')
      }
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  refreshToken({ commit, state }) {
    auth.post('/token', {
      client_id: process.env.VUE_APP_CLIENT_ID,
      client_secret: process.env.VUE_APP_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: state.refresh_token
    })
    .then(function (response) {
      if(response.status === 200) {
        commit('SET_AUTH_TOKENS', response.data)
      }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  logout({ commit, state, dispatch}) {
    commit('LOGOUT')
    dispatch('collaborators/clearAll', {}, { root:true })
    dispatch('domains/clearAll', {}, { root:true })
    dispatch('sites/clearAll', {}, { root:true })
  }

}

// mutations
const mutations = {
  SET_AUTH_TOKENS(state, account) {
    state.access_token = account.access_token
    state.refresh_token = account.refresh_token
    state.isAuthenticated = true
  },
  LOGOUT(state) {
    state.access_token = ''
    state.refresh_token = ''
    state.isAuthenticated = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
