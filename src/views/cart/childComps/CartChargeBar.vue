<template>
  <div class="charge-bar">
    <div class="left" @click="handleCilck">
      <div class="select-icon" :class="{active: isAllSelect}"></div>
    </div>
    <div class="center">合计：{{totalPrice}}</div>
    <div class="right">去结算</div>
  </div>
</template>

<script>
export default {
  name: "CartChangeBar",
  props: {
    totalPrice: String,
    isAllSelect: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleCilck() {
      this.$emit("selectAllItems");
    }
  }
};
</script>

<style lang="stylus" scoped>
.charge-bar
  position: absolute
  display: flex
  line-height: 40px
  left: 0
  right: 0
  bottom: 50px
  background-color: green
  text-align: center
  .left
    min-width: 60px
    display: flex
    justify-content: center
    align-items: center
    .select-icon
      width: 20px
      height: 20px
      border-radius: 50%
      border: 2px solid #ccc
      &.active
        border: none
        background-color: #FF6347
        background-image: url('~assets/images/cart/tick.svg')
        background-position: center
        background-repeat: no-repeat
  .right
    min-width: 100px
  .center
    flex: 1
</style>