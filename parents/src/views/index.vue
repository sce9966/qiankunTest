<template>
  <div>
    <div id="nav">
      <router-link to="/home">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/vue">vue</router-link>
    </div>
    <router-view v-show="this.$route.name"/>
    <div v-show="!this.$route.name" id="frame"></div>
  </div>
</template>
<script>
export default {
    mounted(){
        console.log('index')
    }
};
</script>
<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>