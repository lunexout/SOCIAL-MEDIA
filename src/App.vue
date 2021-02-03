<template>
    <router-view name="Main"/>
    <router-view name="Registration"/>
    <router-view name="Company"/>
    <router-view name="Style"/>
    <router-view name="Client"/>
    <router-view name="User"/>
    <router-view name="UserDetailView"/>
    <router-view name='Profile'/>
    <router-view name='Chat'/>
</template>

<script>

export default {
  name: 'App',
}

</script>

<style lang="scss">
body {
// background: radial-gradient(circle, #fdbb2d, #22c1c3); 
background-color: #FFFFFF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.round_picture {
  border-radius: 50%;
}
// 
</style>
