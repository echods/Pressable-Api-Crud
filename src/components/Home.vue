<template>
  <div class="hello row justify-content-center">
    <div class="col-6 text-center" v-if="isLoggedIn">
      <h1>You are already logged in</h1>
      <p>Go to <router-link to="sites">Sites</router-link></p>
    </div>
    <div class="col-6 text-left" v-else>
      <form>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary" @click.stop.prevent="authenticate">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
    isLoggedIn() {
        return (this.$store.state.account.isAuthenticated)
    }
  },
  methods: {
    authenticate() {

      const params = {
        email: this.email,
        password: this.password,
      }

      this.$store.dispatch('account/authorize', params)
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
