<template>
  <section class="row">
    <div class="col">
      <h2>Collaborators</h2>
      <div v-for="collaborator in collaborators">
        <collaborator
          :collaborator="collaborator"></collaborator>
      </div>
      <br>
      <add-collaborator></add-collaborator>
    </div>
  </section>
</template>

<script>
  import Collaborator from './CollaboratorItem.vue'
  import AddCollaborator from './AddCollaborator.vue'

  export default {
    name: 'Collaborators',
    components: {Collaborator, AddCollaborator},
    props: {
      collaborators: Array
    }
  }
</script>