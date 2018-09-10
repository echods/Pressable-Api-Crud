<template>
  <div>
    <h2>Domains</h2>
    <domain-item
      v-for="domain in domains"
      :domain="domain"
      :key="domain.id"></domain-item>
    <add-domain></add-domain>
  </div>
</template>
<script>

  import DomainItem from './DomainItem.vue'
  import AddDomain from './AddDomain.vue'

  export default {
    name: 'Domains',
    components: {DomainItem, AddDomain},
    props: {
      domains: Array
    }
  }
</script>
