<template>
  <div class="recommend">
    <div class="title">商品推荐</div>
    <GoodList :goods="goods" />
  </div>
</template>

<script>
import GoodList from "ct/goodList/GoodList";

import { getRecommendGoods } from "network/detail";
import { getOneTypeGoods } from "network/home";
export default {
  name: "DetailRecommend",
  components: {
    GoodList
  },
  data() {
    return {
      goods: []
    };
  },
  mounted() {
    this.getRecommendGoods();
  },
  methods: {
    async getRecommendGoods() {
      const res = await getOneTypeGoods("new", 1);
      this.goods = res.data.list;
      // item_id: "1kkf1di"
      // shop_id: "1pzayc"
      // console.log(this.goods);
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend
  .title
    text-align: center
    line-height: 40px
</style>