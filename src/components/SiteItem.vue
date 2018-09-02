<template>
    <tr>
      <th scope="row"><a href="#" @click="siteShow">{{ site.id }}</a></th>
      <td>{{ site.name }}</td>
      <td>{{ site.ipAddress }}</td>
      <td>{{ site.pageViewsAllTime }}</td>
      <td><a href="#">Edit</a></td>
      <td><a href="#">Del</a></td>
    </tr>
</template>

<script>

export default {
  name: 'SiteItem',
  props: {
    site: Object
  },
  computed: {
  },
  methods: {
    siteShow() {
        this.$store.dispatch('sites/setActiveSite', this.site)
        this.$router.push({ name: 'site-show', params: { id: this.site.id }})
    }
  },
  mounted() {
  }
}
</script>