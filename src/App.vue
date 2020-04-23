<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view :key="$route.path" />
    </keep-alive>
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
