<template>
  <div class="mt-4">
    <form class="form-inline">
      <div class="form-group mb-2">
        <label for="site" class="sr-only">Domain url</label>
        <input type="text" class="form-control" id="site" placeholder="Enter domain url" v-model="url">
      </div>
      <button type="submit" class="btn btn-primary mb-2" @click.stop.prevent="createDomain">Add Domain</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddDomain',
    props: {
      // collaborator: Object,
      // id: Number
    },
    data() {
      return {
        url: ''
      }
    },
    methods: {
      createDomain() {
        const params = {
          headers: {
            Authorization: `Bearer ${this.$store.state.account.access_token}`,
            Content: 'application/json'
          },
          url: this.url,
          siteId: this.$store.state.sites.active.id
        }

        this.$store.dispatch('domains/createDomain', params)
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
