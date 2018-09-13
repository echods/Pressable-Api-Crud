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

  getSite({ commit, state, dispatch }, headers) {
    const id = state.active.id
    api.get(`/sites/${id}`,
      { headers }).then(function (response) {
        if(response.status === 200) {
          dispatch('setActiveSite', response.data)
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

  disableForProduction({ commit, state, dispatch }, headers) {

    const id = state.active.id

    api.delete(`/sites/${id}/production`,
      { headers }).then(function (response) {
        if(response.status === 200) {
          swal("Disabled!", "Your site has been set to development!", "success");
          dispatch('getSite', headers)
        }
      });
  },

  enableForProduction({ commit, state, dispatch }, headers) {

    const id = state.active.id

    api.post(`/sites/${id}/production`, {},
      { headers }).then(function (response) {
        if(response.status === 200) {
          dispatch('getSite', headers)
          swal("Enabled!", "Your site has been set to production!", "success");
        }
      });
  },

  clearCache({ commit, state }, params) {

    const headers = params.headers
    const id = params.id

    api.delete(`/sites/${id}/cache`,
      { headers }).then(function (response) {
        if(response.status === 200) {
          swal("Cached Deleted!", "Your site has been deleted!", "success");
        }
      });
  },

  clearActiveSite({ commit, state }) {
    commit('CLEAR_ACTIVE_SITE')
  },

  clearAll( {commit, state} ) {
    commit('CLEAR_ALL')
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
  },

  CLEAR_ALL(state) {
    state.list = [],
    state.active = '',
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
