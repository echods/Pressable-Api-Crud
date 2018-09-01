<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    Testing again
  </div>
</template>

<script>
export default {
  name: 'TestAgain',
  props: {
    msg: String
  },
  mounted() {
    // eslint-disable-next-line
    console.log(process.env.VUE_APP_USER)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
