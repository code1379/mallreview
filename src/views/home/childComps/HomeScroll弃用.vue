<template>
  <!-- 
    对 scroll 的二次封装
    里面再放一个插槽。
    这样做好像没好处。。。。。
    要操作都变的麻烦了。
    这里就弃用了
  -->
  <Scroll class="home-scroll" :scrollOptions="homeScrollOptions">
    <slot></slot>
    <!-- <div class="footer" slot="footer">footer</div> -->
    <!-- <slot name="homescrollfooter"></slot> -->
  </Scroll>
</template>

<script>
import Scroll from "cn/scroll/Scroll";
export default {
  name: "HomeScroll",
  components: {
    Scroll
  },
  data() {
    return {
      homeScrollOptions: {
        click: true,
        observeDOM: true,
        probeType: 2,
        pullUpLoad: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.home-scroll
  position: absolute
  top: 43px
  right: 0
  left: 0
  bottom: 49px
  overflow: hidden
  background-color: #EEEEEE
</style>