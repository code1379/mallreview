<template>
  <div class="tabbar-item" :class="{'active': isActive}" :style="activeStyle" @click="routerGo">
    <slot name="icon"></slot>
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: String
  },
  data() {
    return {};
  },
  mounted() {},
  computed: {
    isActive() {
      // indexOf 不等于 -1 tabbar-item 的 path 是激活的
      console.log(this.$route.path.indexOf(this.path) !== -1);
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      // 如果是激活状态
      return this.isActive
        ? {
            color: this.activeColor
          }
        : {};
    }
  },
  methods: {
    routerGo() {
      this.$router.push(this.path);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variables.styl'
.tabbar-item
  flex: 1
  text-align: center
  display: flex
  flex-direction: column
  justify-content: center
  &.active
    color: $textHighlightColor
  .iconfont
    font-size: 20px
  .title
    margin-top: 2px
    font-size: 14px
</style>