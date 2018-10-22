import api from '../../api'
import swal from 'sweetalert'

// initial state
const state = {
  list: [],
  loading: true
}

// getters
const getters = {}

// actions
const actions = {
  getDomains({ commit, state }, params) {

    const headers = params.headers
    const id = params.id

    api.get(`/sites/${id}/domains`,
      { headers }).then(function (response) {
        if(response.status === 200) {
          commit('GET_DOMAINS', response.data.data)
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  createDomain({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const url = params.url

    api.post(`/sites/${id}/domains`, { "url": `${url}` },
      { headers }).then(function (response) {
        if(response.status === 201) {
          dispatch('getDomains', params)
          swal("Great!", `Your domain ${url} is being added.`, "success");
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error);
    });
  },

  makePrimary({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const domainId = params.domainId

    api.post(`/sites/${id}/domains/${domainId}/primary`, {},
      { headers }).then(function (response) {
        if(response.status === 200) {
          dispatch('getDomains', params)
          swal("Great!", `A new primary domain has been set.`, "success");
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error);
    });
  },

  deleteDomain({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const domainId = params.domainId

    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this domain?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(willDelete => {

      if (willDelete) {

        api.delete(`/sites/${id}/domains/${domainId}`,
          { headers }).then(function (response) {
            console.log(response)
            if(response.status === 200) {
              dispatch('getDomains', params)
              swal("Deleted!", "Your domain has been deleted!", "success");
            }
        }.bind(this))
        .catch(function (error) {
          // eslint-disable-next-line
          console.warn(error);
        });
      }
    });
  },

  clearAll( {commit, state} ) {
    commit('CLEAR_ALL')
  }

}

// mutations
const mutations = {
  GET_DOMAINS(state, domains) {
    state.list = domains
    state.loading = false
  },

  CLEAR_ALL(state) {
    state.list = []
    state.loading = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
