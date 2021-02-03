<template>
<nav class=" navbar navbar-expand-lg navbar-light" style="background-color: #F7F9FA">
  <div class="container p-0" style="max-width: 1440px;">
    <div class="navbar-brand text-white m-0 p-0"></div>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to='/user' class='prof'>/\ მთავარი</router-link>
        <router-link to='' class='prof'># MY პროფილი</router-link>
        <router-link to='' class='prof'>MY პოსტები</router-link>
        <router-link to='' class='prof'>ჰოთ News</router-link>
        <router-link to='' class='prof'>* გალერეა</router-link>
        <router-link to='' class='prof'>! Feedბექი</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'UserProfileApp',
    props: { obj: {
        type: Object
    }},
    computed: { ...mapGetters(['getSpinnerProfile']) },
}
</script>
<style lang='scss' scoped>
@font-face {
    font-family: profileMenuFONT;
    src: url('../fonts/bpg_arial_2009.ttf');
}
a {
    padding: 15px;
}
a.router-link-active.router-link-exact-active{
}
a:hover {
    // border: none;
    // background-color: aqua;
    color: #1DA1F2 !important;
    background-color: #E8F5FE;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
}
.profileMenuFONT {
    font-family: profileMenuFONT;
    text-decoration: none;
    color: #E85662;
}
.prof {
  font-family: profileMenuFONT;
  text-decoration: none;
  color: black !important;
  font-size: 28px;
  font-weight: 700;
}
</style>