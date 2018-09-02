<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <h1 class="mb-5">Create a site: {{ site.name }}</h1>
      </div>
      <div class="row">
        <div class="col">
          <form>
            <div class="form-group">
              <label class="text-left" for="name">Enter site name</label>
              <input type="text" class="form-control" id="name" placeholder="Enter the site name of your choice"
                v-model="site.name">
            </div>
            <button type="submit" class="btn btn-primary" @click.stop.prevent="saveSite">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SiteCreate',
  data() {
    return {
      site: {
        name: ''
      }
    }
  },
  methods: {
    saveSite() {
      const params = {
        headers: {
          Authorization: `Bearer ${this.$store.state.account.access_token}`,
          Content: 'application/json'
        },
        site: this.site
      }

      this.$store.dispatch('sites/saveSite', params)
    }
  },
  mounted() {
    // this.$store.dispatch('sites/clearActiveSite')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
