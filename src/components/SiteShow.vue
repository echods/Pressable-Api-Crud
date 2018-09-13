<template>
  <div class="row row-wrapper">

    <div class="col">

      <div class="row">
        <div class="col">
          <h1 class="page-title mb-5">Site: {{ site.name }}</h1>
        </div>
      </div>

      <div class="row">
        <div class="col" v-if="!isProduction">
          <a href="#" @click.stop.prevent="enableProduction" class="btn btn-primary">Enable for Production</a>
        </div>
        <div class="col" v-else>
          <a href="#" @click.stop.prevent="disableProduction" class="btn btn-primary">Disable Production</a>
        </div>
        <div class="col">
          <a href="#" @click.stop.prevent="clearCache" class="btn btn-primary">Clear Cache</a>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <hr>
        </div>
      </div>

      <section class="row">
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
        </div>

        <div class="col">
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
      </section>

      <hr>

      <collaborators
        :collaborators="collaborators"></collaborators>

      <hr>

      <domains
        :domains="domains"></domains>

    </div>
  </div>
</template>

<script>

import Collaborators from './collaborators/Collaborators.vue'
import Domains from './domains/Domains.vue'

export default {
  name: 'SiteShow',
  components: {Collaborators, Domains},
  data() {
    return {
      headers: {
        Authorization: `Bearer ${this.$store.state.account.access_token}`,
        Content: 'application/json'
      }
    }
  },
  computed: {
    site() {
      return this.$store.state.sites.active
    },
    collaborators() {
      return this.$store.state.collaborators.list
    },
    domains() {
      return this.$store.state.domains.list
    },
    isProduction() {
      return this.$store.state.sites.active.production
    }
  },
  methods: {
    getCollaborators() {
      const params = {
        headers: this.headers,
        id: this.$store.state.sites.active.id
      }
      this.$store.dispatch('collaborators/getCollaborators', params)
    },
    getDomains() {
      const params = {
        headers: this.headers,
        id: this.$store.state.sites.active.id
      }
      this.$store.dispatch('domains/getDomains', params)
    },
    enableProduction() {
      this.$store.dispatch('sites/enableForProduction', this.headers)
    },

    disableProduction() {
      this.$store.dispatch('sites/disableForProduction', this.headers)
    },

    clearCache() {
      const params = {
        headers: this.headers,
        id: this.$store.state.sites.active.id
      }
      this.$store.dispatch('sites/clearCache', params)
    }
  },
  mounted() {
    this.getCollaborators()
    this.getDomains()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section.row {
  margin-bottom: 40px;
}

.row-wrapper {
  padding-bottom: 50px;
}

.row-data {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

.site-left {
  text-align: right;
}

.site-right {
  text-align: left;
}
</style>
