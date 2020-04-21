// 使用 iconfont &#xe617; 方式，不能使用动态绑定
<template>
  <div class="tabbar">
    <!-- 
        {
          title: "首页",
          path: "home",
          iconText: "&#xe601;",
          imgPath: "../../../assets/images/tabbar/home.svg",
          imgPath1: "~assets/images/tabbar/home.svg"
        },
        动态绑定的 静态资源 显示不了
        1. 图片不显示，是因为图片地址会被打包， 地址变了，找不到图片了
        2. css 不显示，是因为，第一次渲染的时候会渲染，再次插入就不渲染了。是静态的。
    -->
    <!-- <i class="iconfont">{{item.iconText}}</i> -->
    <!-- <img :src="item.imgPath" alt /> -->
    <!-- <img :src="item.imgPath1" alt /> -->
    <!-- 静态资源可以显示 -->
    <!-- <i class="iconfont">&#xe617;</i> -->
    <!-- <img src="~assets/images/tabbar/home.svg" alt /> -->
    <!-- <img src="../../../assets/images/tabbar/home.svg" alt /> -->
    <TabBarItem path="home" activeColor="red">
      <i slot="icon" class="iconfont">&#xe617;</i>
      <span slot="title" class="title">首页</span>
    </TabBarItem>
    <TabBarItem path="cate" activeColor="red">
      <i slot="icon" class="iconfont">&#xe601;</i>
      <span slot="title" class="title">分类</span>
    </TabBarItem>
    <TabBarItem path="cart" activeColor="red">
      <i slot="icon" class="iconfont">&#xe63b;</i>
      <span slot="title" class="title">购物车</span>
    </TabBarItem>
    <TabBarItem path="profile" activeColor="red">
      <i slot="icon" class="iconfont">&#xe610;</i>
      <span slot="title" class="title">个人</span>
    </TabBarItem>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem2";
export default {
  name: "TabBar",
  components: {
    TabBarItem
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