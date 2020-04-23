<template>
  <div class="item" v-if="Object.keys(item).length !== 0">
    <div class="select" @click="changeItemSelectStatu(item.iid)">
      <div class="select-icon" :class="{active: item.isSelect}"></div>
    </div>
    <img class="item-img" :src="item.imgUrl" alt />
    <div class="desc">
      <div class="title">{{item.title}}</div>
      <div class="info">
        <div class="price">¥{{item.price}}</div>
        <div class="count">x {{item.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "CartListItem",
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    changeItemSelectStatu(iid) {
      // 这个时候不应该去派发事件 应该去改变 vux state 的状态
      // this.$emit("changeItemSelectStatu", iid);
      console.log(iid, "changeSelect");
      this.asyncChangeIsSelect(iid);
    },
    ...mapActions(["asyncChangeIsSelect"])
  }
};
</script>

<style lang="stylus" scoped>
.item
  display: flex
  padding: 10px 6px
  border-bottom: 1px solid #ccc
  .select
    display: flex
    min-width: 40px
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
  .item-img
    width: 80px
    height: 120px
    border-radius: 10px
  .desc
    display: flex
    padding: 10px
    flex-direction: column
    justify-content: space-between
    .info
      display: flex
      justify-content: space-between
</style>