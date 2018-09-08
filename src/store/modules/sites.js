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
  getSites({ commit, state, dispatch }, headers) {
    api.get('/sites',
      { headers }).then(function (response) {
        if(response.status === 200) {
          commit('SET_SITES', response.data)
        }
    }.bind(this))
    .catch(function (error) {

      if(error.response.status === 401) {
        dispatch('account/refreshToken', {}, { root:true })
      }

      // eslint-disable-next-line
      console.warn(error.response);
      commit('SET_SITES', [])
    });

  },

  saveSite({ commit, state }, params) {
    const headers = params.headers
    const name = params.name

    api.post('/sites', {"name": `${name}`},
      { headers }).then(function (response) {
        // eslint-disable-next-line
        console.log(response)
        if(response.status === 201) {
          commit('SET_ACTIVE_SITE', response.data)
          const currentState = response.data.state
          swal("Great!", `Your site is being created and is currently ${currentState}. It will be done momentarily!`, "success");
        }
    }.bind(this))
    .catch(function (error) {
      const message = error.response.data.error
      swal("An error occurred", message, "error");
    });

  },

  setActiveSite({ commit, state }, site) {
    commit('SET_ACTIVE_SITE', site)
  },

  cloneSite({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const name = params.name

    api.post(`/sites/${id}/clone`, {"name": `${name}`},
      { headers }).then(function (response) {
        if(response.status === 201) {
          swal("Great!", `Your site is being cloned and is titled ${response.data.name}. It will be done momentarily!`, "success");
          dispatch('getSites')
        }
      });

  },

  deleteSite({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id

    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this site?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(willDelete => {

      if (willDelete) {

        api.delete(`/sites/${id}`,
          { headers }).then(function (response) {
            if(response.status === 200) {
              dispatch('getSites', headers)
              swal("Deleted!", "Your site has been deleted!", "success");
            }
        }.bind(this))
        .catch(function (error) {
          // eslint-disable-next-line
          console.warn(error.response);
        });
      }
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
    state.loading = false
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