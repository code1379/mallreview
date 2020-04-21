<template>
  <div class="navbar">
    <div
      class="item"
      v-for="(title, index) in titles"
      :key="title"
      :class="{active: index === currentIndex}"
      @click="sendChangeIndex(index)"
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
  },
  methods: {
    sendChangeIndex(index) {
      this.$emit("sendChangeIndex", index);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~assets/stylus/variables.styl'
.navbar
  display: flex
  background-color: #fff
  .item
    flex: 1
    line-height: 40px
    text-align: center
    &.active
      color: $textHighlightColor
      .title
        border-bottom: 2px solid $textHighlightColor
    .title
      line-height: 20px
      padding: 5px 8px
</style>