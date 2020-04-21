// 方案一：使用icon-font 的 class 实现
// 比较好写，可以使用数组遍历
<template>
  <div class="tabbar">
    <div
      class="tabbar-item"
      :class="{active: index === currentIndex}"
      v-for="(item, index) in bars"
      :key="item.path"
      @click="changeIndex(index)"
    >
      <i class="iconfont" :class="item.iconClass"></i>
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data() {
    return {
      currentIndex: 0,
      bars: [
        {
          title: "首页",
          path: "home",
          iconClass: "icon-home"
        },
        {
          title: "分类",
          path: "cate",
          iconClass: "icon-fenlei"
        },
        {
          title: "购物车",
          path: "cart",
          iconClass: "icon-icon-test"
        },
        {
          title: "个人",
          path: "profile",
          iconClass: "icon-yonghu"
        }
      ]
    };
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      this.$router.push(this.bars[index].path);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/variables.styl'
.tabbar
  height: 49px
  position: fixed
  left: 0
  right: 0
  bottom: 0
  background-color: #ECECEC
  display: flex
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