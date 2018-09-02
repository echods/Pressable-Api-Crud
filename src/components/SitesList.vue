<template>
  <div class="row">
    <h1>Your Pressable Sites</h1>
    <router-link to="create-site" class="btn btn-primary ml-auto create-site">Create Site</router-link>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">IP Address</th>
          <th scope="col">All Page Views</th>
          <th width="30">Edit</th>
          <th width="30">Delete</th>
        </tr>
      </thead>
      <tbody>
        <site-item
          v-for="site in sites"
          :site="site"
          :key="site.id"></site-item>
      </tbody>
    </table>
  </div>
</template>

<script>

import api from '../api'
import SiteItem from './SiteItem.vue'

export default {
  name: 'SitesList',
  components: {
    'site-item': SiteItem
  },
  computed: {
    sites() {
      return this.$store.state.sites.list;
    }
  },
  methods: {
    getSites() {

      const headers = {
        Authorization: `Bearer ${this.$store.state.account.access_token}`,
        Content: 'application/json'
      }

      this.$store.dispatch('sites/getSites', headers)
    }
  },
  mounted() {
    this.getSites()
    this.$store.dispatch('sites/clearActiveSite')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .create-site {
    height: 40px;
  }
</style>
