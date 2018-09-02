<template>
  <div class="hello">
    <form>
        <input type="text" v-model="email">
        <input type="password" v-model="password">
        <button @click.stop.prevent="authenticate">Login</button>
    </form>
  </div>
</template>

<script>

import auth from '../api/auth'

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    authenticate() {

      auth.post('/token', {
        client_id: process.env.VUE_APP_CLIENT_ID,
        client_secret: process.env.VUE_APP_CLIENT_SECRET,
        email: process.env.VUE_APP_EMAIL,
        password: process.env.VUE_APP_PASSWORD,
        // email: this.email,
        // password: this.password,
        grant_type: 'password'
      })
      .then(function (response) {
        // eslint-disable-next-line
        if(response.status === 200) {
          this.$store.dispatch('account/setTokens', response.data)
          this.$router.push({ name: "sites" })
        }
      }.bind(this))
      .catch(function (error) {
        // eslint-disable-next-line
        console.warn(error.response);
      });
    }
  },
  mounted() {
    this.authenticate()
    // eslint-disable-next-line
    console.log(this.$store.state)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
