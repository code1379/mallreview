<template>
  <div class="tabbar-item" :class="{'active': isActive}" @click="RouterGo">
    <div class="active_img" v-if="isActive">
      <slot name="active-img"></slot>
    </div>
    <div class="noactive-img" v-else>
      <slot name="noactive-img"></slot>
    </div>
    <div class="title">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    }
  },
  methods: {
    RouterGo() {
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
  .img-class
    width: 20px
    height: 20px
    // 去除图片 3px margin-bottom
    vertical-align: middle
  .iconfont
    font-size: 20px
  .title
    margin-top: 2px
    font-size: 14px
</style>