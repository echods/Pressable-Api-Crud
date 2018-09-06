<template>
    <tr>
      <th scope="row"><a href="#" @click="siteShow">{{ site.id }}</a></th>
      <td>{{ site.name }}</td>
      <td>{{ site.ipAddress }}</td>
      <td>{{ site.pageViewsAllTime }}</td>
      <td>
        <a href="#" @click.stop.prevent="cloneSite">
          <i class="fas fa-clone"></i>
        </a>
      </td>
      <td>
        <a href="#" @click.stop.prevent="deleteSite">
          <i class="far fa-trash-alt"></i>
        </a>
      </td>
    </tr>
</template>

<script>

import swal from 'sweetalert'

export default {
  name: 'SiteItem',
  props: {
    site: Object
  },
  computed: {
  },
  data() {
    return {
        headers: {
          Authorization: `Bearer ${this.$store.state.account.access_token}`,
          Content: 'application/json',
        }
    }
  },
  methods: {
    siteShow() {
      this.$store.dispatch('sites/setActiveSite', this.site)
      this.$router.push({ name: 'site-show', params: { id: this.site.id }})
    },
    cloneSite() {
      const params = {
        headers: this.headers,
        id: this.site.id
      }
      this.$store.dispatch('sites/cloneSite', params)
    },
    deleteSite() {
      const params = {
        headers: this.headers,
        id: this.site.id
      }

      this.$store.dispatch('sites/deleteSite', params)
    }
  },
  mounted() {
  }
}
</script>