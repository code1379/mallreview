<template>
  <TopBar class="detail-topbar">
    <div slot="left" @click="goBack">
      <i class="iconfont">&#xe658;</i>
    </div>
    <div slot="center" class="items">
      <div
        class="item"
        v-for="(item, index) in navs"
        :key="item"
        :class="{active: index === myCurrentIndex}"
        @click="changeIndex(index)"
      >{{item}}</div>
    </div>
  </TopBar>
</template>

<script>
import TopBar from "cn/topBar/TopBar";
export default {
  name: "DetailTopBar",
  props: {
    navs: {
      type: Array,
      default() {
        return [];
      }
    },
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      myCurrentIndex: this.currentIndex
    };
  },
  components: {
    TopBar
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    changeIndex(index) {
      this.myCurrentIndex = index;
      this.$emit("scrollToMapElement", index);
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail-topbar
  color: #000
  .iconfont
    font-size: 20px
  .items
    display: flex
    justify-content: space-around
    .item
      &.active
        color: #ff5777
</style>