<template>
  <div class="navbar">
    <div
      class="item"
      v-for="(title, index) in titles"
      :key="title"
      :class="{active: index === this.currentIndex}"
    >
      <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    titles: {
      type: Array,
      default() {
        return ["流行", "新款", "经典"];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style lang="stylus" scoped>
.navbar
  line-height: 40px
  display: flex
  .item
    flex: 1
    line-height: 20px
    // .title
</style>