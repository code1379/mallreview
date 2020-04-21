<template>
  <div class="home">
    <HomeTopBar />
    <NavBar
      class="fixed-nav-bar"
      :currentIndex="currentIndex"
      @sendChangeIndex="handleChangeNavIndex"
      ref="outerNav"
      v-show="isShowOuterNav"
    />
    <BackTop v-show="isShowBackTop" @backtop="handleBacktop" />
    <Scroll
      class="home-scroll"
      :scrollOptions="homeScrollOptions"
      @sendPullUpEvent="handlePullUpEvent"
      @sendCurrentPositionY="handleCurrentPositionY"
      ref="scroll"
    >
      <!-- 首页上的内容插入到这里 -->
      <HomeSwiper :bannerList="bannerList" />
      <HomeRecommend :recommendList="recommendList" />
      <HomeTrend />
      <NavBar :currentIndex="currentIndex" @sendChangeIndex="handleChangeNavIndex" ref="innerNav" />
      <GoodList :goods="goods" />
    </Scroll>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTopBar from "./childComps/HomeTopBar";
import Scroll from "cn/scroll/Scroll";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeTrend from "./childComps/HomeTrend";
import NavBar from "ct/navBar/NavBar";
import GoodList from "ct/goodList/GoodList";
// import BackTop from "ct/backTop/BackTop";
// 从 mixin 中引入 backtop
import { backTopMixin } from "common/mixins";
// 获取数据
import { getMultiData, getOneTypeGoods } from "network/home";
// 一些小配置
import { homeScrollOptions } from "common/const";

export default {
  name: "Home",
  mixins: [backTopMixin],
  components: {
    HomeTopBar,
    Scroll,
    HomeSwiper,
    HomeRecommend,
    HomeTrend,
    NavBar,
    GoodList
  },
  data() {
    return {
      // 1. better-scroll 配置
      homeScrollOptions,
      // 2. swiper 的图片列表
      bannerList: [],
      // 3. 推荐图片列表
      recommendList: [],
      // 4.navBar CurrentIndex
      currentIndex: 0,
      // 5. 数据获取到的存放位置
      allTypesgoods: [
        { type: "pop", page: 1, goods: [], isEnd: false },
        { type: "new", page: 1, goods: [], isEnd: false },
        { type: "sell", page: 1, goods: [], isEnd: false }
      ],
      // 6. 是否显示outerNav
      isShowOuterNav: false
    };
  },
  mounted() {
    // 1. 执行获取数据
    // 1.1 获取轮播图 和 推荐 数据
    this.getMultiData();
    // 1.2 获取所有类型商品数据
    this.allTypesgoods
      .map(item => item.type)
      .forEach(type => {
        this.getOneTypeGoods(type);
      });
    // 2. 获取ref 对应的Vue 对象
    // 2.1 scrll 对象
    this.scroll = this.$refs.scroll;
    // 2.2 navBar 对象
    this.outerNav = this.$refs.outerNav;
    this.innerNav = this.$refs.innerNav;
    // 3. 内部innerNav到父元素顶部的高度 大于等于这个高度时显示 outerNav
    this.innerNavOffsetTop = this.innerNav.$el.offsetTop;
    // console.log(this.innerNavOffsetTop);
  },
  methods: {
    // 2. 获取数据
    // 2.1 获取轮播图 和 推荐
    async getMultiData() {
      const res = await getMultiData();
      // 如果没有获取过程出错 返回的是 undefined
      if (res) {
        const data = res.data;
        // console.log(data);
        // 这里 两种写法 都可以。。。。
        this.bannerList.push(...data.banner.list);
        this.recommendList = data.recommend.list;
      }
    },
    // 2.2 获取 类型  数据
    async getOneTypeGoods(type, fn = null) {
      const typeObj = this.allTypesgoods.find(item => item.type === type);
      // 判断是否还有下一页
      // if (!typeObj.isEnd) {
      const page = typeObj.page;
      const res = await getOneTypeGoods(type, page);
      const goods = res.data.list;
      typeObj.goods.push(...res.data.list);
      typeObj.isEnd = res.data.isEnd;
      typeObj.page += 1;
      fn ? fn() : null;
      // }
      // return;
    },
    // 1. better-scroll 的事件
    handlePullUpEvent() {
      // console.log("home handlePullUpEvent");
      // 监听到上拉需要加载更多
      this.getOneTypeGoods(this.currentGoodsType, this.scroll.finishPullUp());
    },
    handleCurrentPositionY(y) {
      // console.log("实时监听滚动位置", y);
      // 根据 innerNavOffsetTop 的高度判断是否显示 outerNav
      // console.log(y);
      this.isShowOuterNav = y >= this.innerNavOffsetTop;
      // 这两个值都是 mixin 中来的
      this.isShowBackTop = y >= this.showBackTopHeight;
    },
    // 2. navbar 事件
    handleChangeNavIndex(index) {
      this.currentIndex = index;
      // 顺便回到 innerNavBar 的位置
      this.scroll.scrollToElement(this.innerNav.$el);
    }
  },
  computed: {
    // 计算出 navBar 对应要展示的goods
    goods() {
      return this.allTypesgoods[this.currentIndex].goods;
    },
    // 根据 currentIndex 计算出当前商品的类型
    currentGoodsType() {
      return this.allTypesgoods[this.currentIndex].type;
    }
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
.fixed-nav-bar
  position: relative
  z-index: 2
</style>