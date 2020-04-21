<template>
  <div class="recommend">
    <div class="item" v-for="recommendItem in recommendList" :key="recommendItem.title">
      <a :href="recommendItem.link">
        <img class="recommend-img" :src="recommendItem.image" alt />
        <span>{{recommendItem.title}}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.recommend
  display: flex
  justify-content: space-around
  height: 0
  padding-bottom: 37%
  background: #fff
  margin-bottom: 10px
  .item
    padding-top: 5%
    font-size: 14px
    width: 23%
    text-align: center
    .recommend-img
      width: 100%
</style>