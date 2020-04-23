<template>
  <div class="bottom-bar">
    <div class="left">
      <div class="item">
        <div class="icon shop"></div>
        <div class="title">商铺</div>
      </div>
      <div class="item">
        <div class="icon fav"></div>
        <div class="title">收藏</div>
      </div>
      <div class="item">
        <div class="icon cs"></div>
        <div class="title">客服</div>
      </div>
    </div>
    <div class="right">
      <div class="cart">
        <!-- <img class="cart-img" src="~assets/images/detail/cart.png" alt /> -->
        加入购物车
      </div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar"
};
</script>

<style lang="stylus" scoped>
.bottom-bar
  display: flex
  position: fixed
  z-index: 10
  right: 0
  bottom: 0
  left: 0
  height: 58px
  background-color: #ccc
  .left, .right
    flex: 1
    display: flex
    justify-content: space-evenly
  .left
    .item
      // text-align: center
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      .icon
        width: 22px
        height: 22px
        background-image: url('~assets/images/detail/detail_bottom.png')
        background-repeat: no-repeat
        background-size: 22px 150px
        &.shop
          background-position: 0px -53px
        &.fav
          background-position: 0px 1px
        &.cs
          background-position: 0px -98px
      .title
        margin-top: 3px
        font-size: 14px
  .right
    background-color: pink
    .cart, .buy
      flex: 1
      line-height: 58px
      text-align: center
    .cart
      background-color: #f1c40f
    .buy
      background-color: #e74c3c
</style>