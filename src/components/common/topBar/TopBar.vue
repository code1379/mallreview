<template>
  <div class="topbar" :style="computedStyleObj">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  props: {
    // 传递背景颜色
    bgcolor: String
  },
  computed: {
    computedStyleObj() {
      return {
        backgroundColor: this.bgcolor
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.topbar
  line-height: 43px
  display: flex
  text-align: center
  color: #fff
  .left, .right
    min-width: 60px
  .center
    flex: 1
</style>