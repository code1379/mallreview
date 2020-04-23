<template>
  <div class="info" v-if="Object.keys(info).length !== 0">
    <div class="title">{{info.title}}</div>
    <div class="price-desc">
      <div class="display-price">{{info.displayPrice}}</div>
      <div class="old-price" v-if="info.oldPrice">{{info.oldPrice}}</div>
      <div class="discount" :style="discountStyle" v-if="info.discountDesc">{{info.discountDesc}}</div>
    </div>
    <div class="nums-desc">
      <div class="item sell-nums">销量{{info.numberDescs[0] }}</div>
      <div class="item fav-nums">收藏{{info.numberDescs[1]}}</div>
      <div class="item promise">{{info.numberDescs[2]}}</div>
    </div>
    <div class="services">
      <div class="service" v-for="service in info.services" :key="service.name">
        <div class="icon" v-if="service.icon">
          <img class="icon-img" :src="service.icon" alt />
        </div>
        <div class="promise">{{service.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  props: {
    info: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    discountStyle() {
      return {
        backgroundColor: this.info.discountBgColor
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.info
  padding: 6px
  .price-desc
    display: flex
    margin: 5px 0px
    align-items: baseline
    position: relative
    .display-price
      font-size: 24px
      color: #ff5777
    .old-price
      margin: 0 8px
    .discount
      font-size: 10px
      position: relative
      top: -6px
      padding: 2px 5px
      border-radius: 5px
      color: #fff
  .nums-desc
    display: flex
    font-size: 13px
    color: #999
    justify-content: space-between
  .services
    display: flex
    margin-top: 5px
    font-size: 13px
    justify-content: space-between
    .service
      display: flex
      align-items: center
      .icon
        .icon-img
          width: 14px
          vertical-align: middle
</style>