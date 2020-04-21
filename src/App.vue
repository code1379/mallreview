<template>
  <div id="app">
    <router-view />
    <TabBar />
  </div>
</template>

<script>
import TabBar from "cn/tabBar/TabBar3";
export default {
  components: {
    TabBar
  }
};
</script>
<style lang="stylus"></style>
