<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Pressable API Vue Example</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'sites' }" class="nav-link">Sites</router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'site-create' }" class="nav-link">Create Site</router-link>
          </li>

          <li class="nav-item">
            <a href="#" @click.stop.prevent="logout" class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
        <div class="row">
            <div class="col"></div>
            <div class="col-10">
                <router-view></router-view>
            </div>
            <div class="col"></div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  methods: {
    logout() {
      this.$store.dispatch('account/logout')
      this.$router.push({ name: "home" })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container-fluid {
    padding-top: 60px;
}
</style>
