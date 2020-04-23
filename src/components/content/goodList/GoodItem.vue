<template>
  <div class="good-item" @click="goToDetailPage" v-if="Object.keys(good).length !== 0 ">
    <!-- 先读取层级比较浅的 -->
    <img class="good-img" :src=" good.image || good.show.img" alt @load="goodImageLoadOver" />
    <div class="title">{{good.title}}</div>
    <div class="desc">
      <span class="price">￥{{good.price}}</span>
      <div class="fav">
        <i class="iconfont">&#xe7a9;</i>
        <span>{{good.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodItem",
  props: {
    good: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  mounted() {
    // console.log(this.good);
  },
  methods: {
    goToDetailPage() {
      this.$router.push({
        name: "Detail",
        params: {
          iid: this.good.iid || this.good.item_id
        }
      });
    },
    goodImageLoadOver() {
      this.$bus.$emit("goodImageLoadOver");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/mixins.styl'
@import '~assets/stylus/variables.styl'
.good-item
  width: 48%
  padding: 5px 0
  font-size: 14px
  .good-img
    width: 100%
    border-radius: 10px
  .desc
    margin-top: 2px
    display: flex
    justify-content: space-around
    align-items: center
    .price
      color: $textHighlightColor
  .title
    ellipsis()
</style>