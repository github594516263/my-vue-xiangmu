<template>
  <div id="app">
    <router-view></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'

  export default {
  components: { TabBar },
    name:'App',
  }
</script>

<style>
@import url(./assets/css/base.css);

  
</style>
