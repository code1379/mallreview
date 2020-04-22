<template>
  <TopBar class="detail-topbar">
    <div slot="left" @click="goBack">
      <i class="iconfont">&#xe658;</i>
    </div>
    <div slot="center"></div>
  </TopBar>
</template>

<script>
import TopBar from "cn/topBar/TopBar";
export default {
  name: "DetailTopBar",
  components: {
    TopBar
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail-topbar
  color: #000
  .iconfont
    font-size: 20px
  .center
    display: flex
</style>