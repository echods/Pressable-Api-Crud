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
    const headers = params.headers
    const id = params.id

    api.get(`/sites/${id}/collaborators`,
      { headers }).then(function (response) {
        if(response.status === 200) {
          commit('GET_COLLABORATORS', response.data)
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error.response);
    });
  },

  createCollaborator({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const email = params.email

    api.post(`/sites/${id}/collaborators`, { "siteId": id, "email": `${email}` },
      { headers }).then(function (response) {
        if(response.status === 201) {
          dispatch('getCollaborators', params)
          swal("Great!", `Your collaborator ${email} is being added and will need to verify their email address.`, "success");
        }
    }.bind(this))
    .catch(function (error) {
      // eslint-disable-next-line
      console.warn(error);
    });
  },

  deleteCollaborator({ commit, state, dispatch }, params) {

    const headers = params.headers
    const id = params.id
    const collaboratorId = params.collaboratorId

    swal({
      title: "Are you sure?",
      text: "Are you sure you want to delete this collaborator?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then(willDelete => {

      if (willDelete) {

        api.delete(`/sites/${id}/collaborators/${collaboratorId}`,
          { headers }).then(function (response) {
            // console.log(response)
            if(response.status === 200) {
              dispatch('getCollaborators', params)
              swal("Deleted!", "Your collaborator has been deleted!", "success");
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
  GET_COLLABORATORS(state, collaborators) {
    state.list = collaborators
    state.loading = false
  },

  CLEAR_ALL(state) {
    state.list = []
    state.active = ''
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
