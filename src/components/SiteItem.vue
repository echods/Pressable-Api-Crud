<template>
    <tr>
      <th scope="row"><a href="#" @click="siteShow">{{ site.id }}</a></th>
      <td>{{ site.name }}</td>
      <td>{{ site.ipAddress }}</td>
      <td>{{ site.pageViewsAllTime }}</td>
      <td><a href="#">Edit</a></td>
      <td><a href="#" @click.stop.prevent="deleteSite">Del</a></td>
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
    deleteSite() {

      swal({
        title: "Are you sure?",
        text: "Are you sure you want to delete this site?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then(willDelete => {
        const params = {
          headers: this.headers,
          id: this.site.id
        }

        this.$store.dispatch('sites/deleteSite', params)
        // eslint-disable-next-line
        console.log('delete')
        if (willDelete) {
          swal("Deleted!", "Your site has been deleted!", "success");
        }
      });
    }
  },
  mounted() {
  }
}
</script>