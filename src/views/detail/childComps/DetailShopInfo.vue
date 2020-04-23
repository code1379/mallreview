<template>
  <div class="shop-info" v-if="Object.keys(shopInfo).length !== 0">
    <div class="shop">
      <a :href="shopInfo.shopUrl">
        <img class="shop-img" :src="shopInfo.shopLogo" alt />
      </a>
      <div class="name">{{shopInfo.name}}</div>
    </div>
    <div class="shop-desc">
      <div class="left">
        <div class="item sell-count">
          <div class="count">{{shopInfo.sells|formatNums}}</div>
          <div class="title">总销量</div>
        </div>
        <div class="item all-goods">
          <div class="count">{{shopInfo.goodsCount}}</div>
          <div class="title">全部宝贝</div>
        </div>
      </div>
      <div class="right">
        <table class="table-class">
          <tr v-for="(score, index) in shopInfo.scores" :key="index" class="score-item">
            <td class="name">{{score.name}}</td>
            <td class="score">{{score.score}}</td>
            <td>
              <span v-if="score.isBetter" class="item better">高</span>
              <span v-else class="item no-better">低</span>
              <!-- <div class="item better" v-if="score.isBetter">高</div>
              <div class="item no-better" v-else>低</div>-->
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="enter-shop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    formatNums(value) {
      console.log(value);
      return value >= 10000 ? (value / 10000).toFixed(2) + "万" : value;
    }
  }
};
</script>

<style lang="stylus" scoped>
.shop-info
  padding: 6px
  .shop
    display: flex
    align-items: center
    .shop-img
      width: 44px
      vertical-align: middle
    .name
      margin-left: 10px
  .shop-desc
    display: flex
    align-items: center
    .left, .right
      flex: 1
    .left
      display: flex
      .item
        flex: 1
        text-align: center
        .count
          margin-bottom: 3px
    .right
      .table-class
        width: 100%
        font-size: 12px
        .score-item
          line-height: 20px
          text-align: center
          .item
            color: #fff
            padding: 0 2px
          .better
            background-color: red
          .no-better
            background: green
  .enter-shop
    line-height: 40px
    text-align: center
</style>