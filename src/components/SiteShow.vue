<template>
  <div class="row row-wrapper">
    <div class="col">

      <div class="row row-data">
        <div class="col site-left">
          <strong>Account ID:</strong>
        </div>
        <div class="col site-right">
          {{ site.accountId }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Site ID:</strong>
        </div>
        <div class="col site-right">
          {{ site.id }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Site name:</strong>
        </div>
        <div class="col site-right">
          {{ site.name }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Created:</strong>
        </div>
        <div class="col site-right">
          {{ site.created }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Ecommerce:</strong>
        </div>
        <div class="col site-right">
          {{ site.ecommerce }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>IP Address:</strong>
        </div>
        <div class="col site-right">
          {{ site.ipAddress }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>All time page views:</strong>
        </div>
        <div class="col site-right">
          {{ site.pageViewsAllTime }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Page views this month:</strong>
        </div>
        <div class="col site-right">
          {{ site.pageViewsThisMonth }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Page views today:</strong>
        </div>
        <div class="col site-right">
          {{ site.pageViewsToday }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Page views yesterday:</strong>
        </div>
        <div class="col site-right">
          {{ site.pageViewsYesterday }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Production mode:</strong>
        </div>
        <div class="col site-right">
          {{ site.production }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>SSL enabled:</strong>
        </div>
        <div class="col site-right">
          {{ site.sslEnabled }}
        </div>
      </div>

      <div class="row row-data">
        <div class="col site-left">
          <strong>Site state:</strong>
        </div>
        <div class="col site-right">
          {{ site.state }}
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import api from '../api'

export default {
  name: 'SiteShow',
  computed: {
    site() {
      return this.$store.state.sites.active
    }
  },
  methods: {
    // getSite() {
    //   if(!this.site) {
    //     const headers = {
    //       Authorization: `Bearer ${this.$store.state.account.access_token}`,
    //       Content: 'application/json'
    //     }

    //     // eslint-disable-next-line
    //     const id = this.$route.params.id

    //     this.$store.dispatch('sites/getSite', headers, id)
    //   }
    // }
  },
  mounted() {
    this.getSite();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.site-left {
  text-align: right;
}

.site-right {
  text-align: left;
}

.row-data {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

.row-wrapper {
  padding-bottom: 50px;
}
</style>
