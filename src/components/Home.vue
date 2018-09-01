<template>
  <div class="hello">
    This is home
  </div>
</template>

<script>

import api from '../api'

export default {
  name: 'Home',
  methods: {
    authUser() {
      api.post('/token', {
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        email: process.env.VUE_APP_EMAIL,
        password: process.env.VUE_APP_PASSWORD,
        grant_type: 'password'
      })
      .then(function (response) {
        // eslint-disable-next-line
        console.log(response);
      })
      .catch(function (error) {
        // eslint-disable-next-line
        console.log(error);
      });
    }
  },
  mounted() {
    this.authUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
