<template>
  <TopBar class="cart">
    <span slot="center">购物车</span>
  </TopBar>
</template>

<script>
import TopBar from "cn/topBar/TopBar";
export default {
  name: "CartTopBar",
  components: {
    TopBar
  }
};
</script>

<style lang="stylus" scoped>
.cart
  background-color: #FF8198
</style>