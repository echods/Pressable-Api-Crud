import api from '../../api'
import swal from 'sweetalert'

// initial state
const state = {
  list: [],
  active: '',
  loading: true
}

// getters
const getters = {}

// actions
const actions = {
  getCollaborators({ commit, state }, params) {
    console.log(params)
    const headers = params.headers
    const id = params.id

    api.get(`/sites/${id}/collaborators`,
      { headers }).then(function (response) {
        // eslint-disable-next-line
        console.log(response)
        if(response.status === 200) {
          commit('SET_COLLABORATORS', response.data)
        }
    }.bind(this))
    .catch(function (error) {

      // if(error.response.status === 401) {
      //   dispatch('account/refreshToken', {}, { root:true })
      // }

      // eslint-disable-next-line
      console.warn(error.response);
    });

  }
}

// mutations
const mutations = {
  SET_COLLABORATORS(state, collaborators) {
    state.list = collaborators
    state.loading = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}