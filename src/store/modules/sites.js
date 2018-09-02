import api from '../../api'

// initial state
const state = {
  list: [],
  active: ''
}

// getters
const getters = {}

// actions
const actions = {
  getSites({ commit, state }, headers) {

    api.get('/sites',
      { headers }).then(function (response) {
        if(response.status === 200) {
          commit('SET_SITES', response.data)
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });

  },

  saveSite({ commit, state }, params) {
    const headers = params.headers
    const name = params.name

    api.post('/sites', {"name": `${name}`},
      { headers }).then(function (response) {
        if(response.status === 200) {
          commit('SET_ACTIVE_SITE', response.data)
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });

  },

  setActiveSite({ commit, state }, site) {
    commit('SET_ACTIVE_SITE', site)
  },

  deleteSite({ commit, state }, params) {

    const headers = params.headers
    const id = params.id

    api.delete(`/sites/${id}`,
      { headers }).then(function (response) {
        // eslint-disable-next-line
        console.log(response)
        commit('CLEAR_ACTIVE_SITE')
        // commit('DELETE_SITE', id)
        // if(response.status === 200) {
        //   commit('SET_ACTIVE_SITE', response.data)
        // }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  clearActiveSite({ commit, state }) {
    commit('CLEAR_ACTIVE_SITE')
  }
}

// mutations
const mutations = {
  SET_SITES(state, sites) {
    state.list = sites
  },

  SET_ACTIVE_SITE(state, site) {
    state.active = site
  },

  CLEAR_ACTIVE_SITE(state) {
    state.active = ''
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}