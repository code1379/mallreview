<template>
  <div class="good-list">
    <GoodItem v-for="(good, index) in goods" :key="index" :good="good" />
  </div>
</template>

<script>
import GoodItem from "./GoodItem";
export default {
  name: "GoodList",
  props: {
    goods: {
      type: Array,
      default() {
        return {};
      }
    }
  },
  components: {
    GoodItem
  }
};
</script>

<style lang="stylus" scoped>
.good-list
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  background-color: #fff
</style>