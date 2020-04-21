// 使用 iconfont &#xe617; 方式，不能使用动态绑定
<template>
  <div class="tabbar">
    <!-- 
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
    <div class="tabbar-item">
      <img class="img-class" src="~assets/images/tabbar/home.svg" alt />
      <img class="img-class" src="~assets/images/tabbar/home_active.svg" alt />
      <div class="title">首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBar"
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
    font-font-weight: bold
    text-align: center
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    &.active
      color: $textHighlightColor
    .img-class
      width: 20px
      height: 20px
    .title
      margin-top: 2px
      font-size: 14px
</style>