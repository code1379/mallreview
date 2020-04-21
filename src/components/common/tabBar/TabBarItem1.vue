<template>
  <div class="tabbar-item" :class="{active: index === currentIndex}" @click="changeIndex(index)">
    <i class="iconfont" :class="[bar.iconClass, 'hello-class-array']"></i>
    <div class="title">{{bar.title}}</div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    bar: {
      type: Object,
      default() {
        return {};
      }
    },
    index: Number,
    currentIndex: Number
  },
  created() {
    console.log(`${this.bar.title} TabBarItem created`);
  },
  updated() {
    console.log(`${this.bar.title} TabBarItem updated`);
  },
  methods: {
    // 每次更改 index 都会使 4 个TabBarItem 更新 props
    changeIndex(index) {
      this.$emit("changeIndex", index);
      this.$router.push(this.bar.path);
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
    &.icon-fenlei
      font-size: 18px
    &.icon-icon-test
      font-size: 24px
      margin-bottom: -3px
  .title
    margin-top: 2px
    font-size: 14px
</style>