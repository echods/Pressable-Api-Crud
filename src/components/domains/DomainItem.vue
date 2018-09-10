<template>
  <div class="row row-data">
    <div class="col text-left">
      <strong>Url:</strong> {{ domain.url }}
    </div>
    <div class="col text-left">
      <strong>Primary:</strong> {{ domain.primary }}
    </div>
    <div class="col delete">
      <a href="#" @click.stop.prevent="deleteDomain">
        <i class="far fa-trash-alt"></i>
      </a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Domains',
    props: {
      domain: Object
    },
    methods: {
      deleteDomain() {
        const params = {
          headers: {
            Authorization: `Bearer ${this.$store.state.account.access_token}`,
            Content: 'application/json',
          },
          siteId: this.$store.state.sites.active.id,
          domainId: this.domain.id
        }

        this.$store.dispatch('domains/deleteDomain', params)
      }
    }
  }
</script>
<style scoped>
.row-data {
  border-bottom: 1px solid #f2f2f2;
  padding: 7px 0;
}

.delete {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
