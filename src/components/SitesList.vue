<template>
  <div>
      <div class="row">
        <div class="col text-left">
          <h1>Your Pressable Sites</h1>
        </div>
        <div class="col text-right">
          <router-link :to="{ name: 'site-create' }" class="btn btn-primary ml-auto create-site">Create Site</router-link>
        </div>
      </div>
      <div class="row" v-if="loading" >
        <div class="col loader">
            <i class="fas fa-spin fa-sun"></i>
        </div>
      </div>
      <div class="row" v-else>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">IP Address</th>
              <th scope="col">All Page Views</th>
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
    </div>
</template>

<script>

import SiteItem from './SiteItem.vue'

export default {
  name: 'SitesList',
  components: {
    'site-item': SiteItem
  },
  data() {
    return {
        headers: {
          Authorization: `Bearer ${this.$store.state.account.access_token}`,
          Content: 'application/json'
        }
    }
  },
  computed: {
    loading() {
        return this.$store.state.sites.loading;
    },
    sites() {
      return this.$store.state.sites.list;
    }
  },
  methods: {
    getSites() {
      this.$store.dispatch('sites/getSites', this.headers)
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
  .loader {
    display: block;
    font-size: 50px;
    margin-top: 20px;
  }
</style>
