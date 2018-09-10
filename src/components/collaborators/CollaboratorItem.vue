<template>
  <div class="row row-data">
    <div class="col text-left">
      <strong>User name:</strong><br>{{ collaborator.name }}
    </div>
    <div class="col text-left">
      <strong>WP username:</strong><br>{{ collaborator.wpUsername }}
    </div>
    <div class="col text-left">
      <strong>Status:</strong><br>{{ collaborator.state }}
    </div>
    <div class="col delete">
      <a href="#" @click.stop.prevent="deleteCollaborator">
        <i class="far fa-trash-alt"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CollaboratorItem',
    props: {
      collaborator: Object
    },
    methods: {
      deleteCollaborator() {
        const params = {
          headers: {
            Authorization: `Bearer ${this.$store.state.account.access_token}`,
            Content: 'application/json',
          },
          siteId: this.$store.state.sites.active.id,
          collaboratorId: this.collaborator.id
        }

        this.$store.dispatch('collaborators/deleteCollaborator', params)
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
