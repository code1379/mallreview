<template>
  <div class="tabbar">
    <TabBarItem
      v-for="(item, index) in bars"
      :key="item.path"
      :bar="item"
      :index="index"
      :currentIndex="currentIndex"
      @changeIndex="changeIndex"
    />
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem1";
export default {
  name: "TabBar",
  components: {
    TabBarItem
  },
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
    }
  }
};
</script>

<style lang="stylus" scoped>
.tabbar
  height: 49px
  position: fixed
  left: 0
  right: 0
  bottom: 0
  background-color: #ECECEC
  display: flex
</style>