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
    // eslint-disable-next-line
    const headers = params.headers
    const site = params.site
    // const data = { "name": site.name }
    // console.log(data)

    api.post('/sites', {"name": `${site.name}`},
      { headers }).then(function (response) {
        // eslint-disable-next-line
        // console.log(response)
        commit('SET_ACTIVE_SITE', response.data)
        // this.$store.dispatch('sites/setActiveSite', this.site)
        // this.$router.push({ name: 'site-show', params: { id: this.site.id }})
        // if(response.status === 200) {
        //   commit('SET_SITES', response.data)
        // }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });

  },

  // getSite({commit, state}, headers, id) {
  //   api.get(`/sites/${id}`,
  //     { headers }).then(function (response) {
  //       // eslint-disable-next-line
  //       console.log(response)
  //       // if(response.status === 200) {
  //       //   commit('SET_SITES', response.data)
  //       // }
  //   }.bind(this))
  //   .catch(function (error) {
  //     // eslint-disable-next-line
  //     console.warn(error.response);
  //   });
  // },

  setActiveSite({ commit, state }, site) {
    commit('SET_ACTIVE_SITE', site)
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