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
    const siteId = params.siteId

    api.get(`/sites/${siteId}/domains`,
      { headers }).then(function (response) {
        // eslint-disable-next-line
        if(response.status === 200) {
          commit('GET_DOMAINS', response.data)
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  createDomain({ commit, state, dispatch }, params) {

    const headers = params.headers
    const siteId = params.siteId
    const url = params.url

    api.post(`/sites/${siteId}/domains`, { "url": `${url}` },
      { headers }).then(function (response) {
        if(response.status === 201) {
          dispatch('getDomains')
          swal("Great!", `Your domain ${url} is being added.`, "success");
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error);
    });
  },

  deleteDomain({ commit, state, dispatch }, params) {

    const headers = params.headers
    const siteId = params.siteId
    const domainId = params.domainId

    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this collaborator?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(willDelete => {

      if (willDelete) {

        api.delete(`/sites/${siteId}/domains/${domainId}`,
          { headers }).then(function (response) {
            console.log(response)
            if(response.status === 200) {
              dispatch('getDomains')
              swal("Deleted!", "Your domain has been deleted!", "success");
            }
        }.bind(this))
        .catch(function (error) {
          // eslint-disable-next-line
          console.warn(error);
        });
      }
    });
  }

}

// mutations
const mutations = {
  GET_DOMAINS(state, domains) {
    state.list = domains
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
