<template>
  <div class="mt-4">
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="site" class="sr-only">Collaborator email</label>
        <input type="text" class="form-control" id="site" placeholder="Enter collaborator email" v-model="email">
      </div>
      <button type="submit" class="btn btn-primary mb-2" @click.stop.prevent="createCollaborator">Add Collaborator</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddCollaborator',
    props: {
      collaborator: Object,
      id: Number
    },
    data() {
      return {
        email: ''
      }
    },
    methods: {
      createCollaborator() {
        const params = {
          headers: {
            Authorization: `Bearer ${this.$store.state.account.access_token}`,
            Content: 'application/json'
          },
          email: this.email,
          id: this.$store.state.sites.active.id
        }

        this.$store.dispatch('collaborators/createCollaborator', params)
        this.email = ''
      }
    },
    mounted() {
      // this.createCollaborator()
    }
  }
</script>

<style scoped>
.form-inline {
  justify-content: center;
}

.form-group {
  width: 25%;
}

.form-control {
  width: 100%;
}
</style>
