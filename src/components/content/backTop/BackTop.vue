<template>
  <div class="back-top" @click="handleClick"></div>
</template>

<script>
export default {
  name: "BackTop",
  methods: {
    handleClick() {
      // 或者执行 @click.native 使用组件直接触发
      this.$emit("backtop");
    }
  }
};
</script>

<style lang="stylus" scoped>
.back-top
  position: absolute
  z-index: 2
  right: 5%
  bottom: 15%
  width: 40px
  height: 40px
  background-image: url('~assets/images/common/top.png')
  background-size: 40px 40px
  background-repeat: no-repeat
  background-position: center
</style>