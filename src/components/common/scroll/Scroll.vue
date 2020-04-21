<template>
  <div class="wrapper" ref="wrapper">
    <ul class="content">
      <slot></slot>
      <!-- 测试具名插槽
        只能在 父级组件使用，
        爷爷级组件不能再使用了.
        可以在父组件再定义一个具名插槽。。。。
      -->
      <!-- <slot name="scrollfooter"></slot> -->
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import Pullup from "@better-scroll/pull-up";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(Pullup);
BScroll.use(ObserveDOM);

export default {
  name: "Scroll",
  props: {
    // 原来是写多个，我把他们合并到一个对象里面去了
    // probeType: {
    //   type: Number,
    //   default: 0
    // },
    // pullUpLoad: {
    //   type: Boolean,
    //   default: false
    // },
    // observeDOM: {
    //   type: Boolean,
    //   default: true
    // },
    scrollOptions: {
      type: Object,
      default() {
        return {
          // 点击事件是否可以被监听
          click: true,
          observeDOM: true
          // probeType 默认为 0 不实时监听滚动
          // probeType: 2,
          // pullUpLoad 默认为 false ，不监听上拉事件
          // pullUpLoad: true
        };
      }
    }
  },
  created() {
    this.scroll = null;
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, this.scrollOptions);
    // 监听滚动位置
    if (
      this.scrollOptions.probeType === 2 ||
      this.scrollOptions.probeType === 3
    ) {
      this.scroll.on("scroll", this.handleScroll);
    }
    // 滚动到底部的时候 监听上拉
    if (this.scrollOptions.pullUpLoad) {
      this.scroll.on("pullingUp", this.handlePullingUp);
    }
  },
  methods: {
    // 实时监听滚动位置
    handleScroll(position) {
      // console.log("实时监听滚动位置", position);
      this.$emit("sendCurrentPositionY", -position.y);
    },
    // 监听到上拉事件
    handlePullingUp() {
      console.log("监听到上拉事件");
      this.$emit("sendPullUpEvent");
      setTimeout(() => {
        this.scroll.finishPullUp();
      }, 3000);
    },
    // scroll 图片加载，没有及时刷新高度，有可能导致滚动不了
    // 手动调用 refresh 方法
    refresh() {
      this.scroll && this.scroll && this.scroll.refresh();
    },
    // 滚动到某个高度
    scrollTo(y, delay = 0) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(0, -y, delay);
    },
    // 滚动到某个元素位置
    scrollToElement(el, time = 500) {
      this.scroll &&
        this.scroll.scrollToElement &&
        this.scroll.scroscrollToElementllTo(el.time);
    }
  }
};
</script>

