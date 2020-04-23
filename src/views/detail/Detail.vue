<template>
  <div class="detail" :key="iid">
    <DetailTopBar
      :navs="navs"
      :currentIndex="currentIndex"
      @scrollToMapElement="handleScrollToElement"
      ref="topnav"
    />
    <Scroll
      class="detail-scroll"
      :scrollOptions="scrollOptions"
      @sendCurrentPositionY="handleCurrentPositionY"
      ref="scroll"
    >
      <DetailSwiper :bannerList="bannerList" ref="swiper" />
      <DetailInfo :info="info" />
      <DetailShopInfo :shopInfo="shopInfo" />
      <DetailGallery :galleryInfo="galleryInfo" />
      <DetailParams :itemParams="itemParams" ref="params" />
      <DetailComment :rate="rate" ref="comment" />
      <DetailRecommend ref="recommend" />
    </Scroll>
    <DetailBottomBar />
  </div>
</template>

<script>
import { getGoodDetail, Good } from "network/detail";
import DetailTopBar from "./childComps/DetailTopBar";
import Scroll from "cn/scroll/Scroll";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailInfo from "./childComps/DetailInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGallery from "./childComps/DetailGallery";
import DetailParams from "./childComps/DetailParams";
import DetailComment from "./childComps/DetailComment";
import DetailRecommend from "./childComps/DetailRecommend";
import DetailBottomBar from "./childComps/DetailBottomBar";
import { shopInfoDataConstructor } from "./dataConstructor";
export default {
  name: "Detail",
  components: {
    DetailTopBar,
    Scroll,
    DetailSwiper,
    DetailInfo,
    DetailShopInfo,
    DetailGallery,
    DetailParams,
    DetailComment,
    DetailRecommend,
    DetailBottomBar
  },
  data() {
    return {
      // topnavBar
      navs: ["商品", "参数", "评论", "推荐"],
      // 轮播图
      bannerList: [],
      // 商品信息
      good: {},
      // 店铺信息
      shopInfo: {},
      // 商品 图片展示信息
      galleryInfo: {},
      // 产品参数
      itemParams: {},
      // 评论列表 包含总评论数
      rate: {},
      scrollOptions: {
        click: true,
        observeDOM: true,
        probeType: 2
      },
      currentIndex: 0
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.getGoodDetail();
      this.scroll = this.$refs.scroll;
      this.topnav = this.$refs.topnav;
      this.params = this.$refs.params;
      this.comment = this.$refs.comment;
      this.recommend = this.$refs.recommend;
    },
    //  获取数据
    async getGoodDetail() {
      const res = await getGoodDetail(this.iid);
      // console.log(res);
      const { itemInfo, columns, shopInfo } = res.result;
      // 轮播图图片
      this.bannerList = itemInfo.topImages;
      // 商品信息
      this.good = new Good(itemInfo, columns, shopInfo);
      this.shopInfo = new shopInfoDataConstructor(res.result.shopInfo);
      this.galleryInfo = res.result.detailInfo;
      this.itemParams = res.result.itemParams;
      this.rate = res.result.rate;
    },
    // 处理滚动位置
    handleCurrentPositionY(y) {
      // console.log(y, "scroll listen");
      console.log(this.heightList);
    },
    // 处理topbar滚动到指定位置
    handleScrollToElement(index) {
      console.log(index, "get");
      this.scroll.scrollTo(this.heightList[index]);
      // switch (index) {
      //   case 0:
      //     this.scroll.scrollTo(0);
      //     break;
      //   case 1:
      //     this.scroll.scrollToElement(this.params.$el);
      //     break;
      //   case 2:
      //     this.scroll.scrollToElement(this.comment.$el);
      //     break;
      //   case 3:
      //     this.scroll.scrollToElement(this.recommend.$el);
      //     break;
      // }
    },
    // 制作info
    createInfo(good) {
      const numberDescs = [];
      numberDescs.push(...good.columns.slice(0, 2));
      numberDescs.push(good.services.slice(-1)[0].name);
      return {
        title: good.title,
        displayPrice: good.price,
        oldPrice: good.oldPrice,
        discountDesc: good.discountDesc,
        numberDescs: numberDescs,
        services: good.services.slice(0, -1),
        discountBgColor: good.discountBgColor
      };
    }
  },
  computed: {
    iid() {
      return this.$route.params.iid;
    },
    info() {
      if (Object.keys(this.good).length > 0) {
        return this.createInfo(this.good);
      } else {
        return {};
      }
    },
    heightList() {
      return [
        0,
        this.params && this.params.$el.offsetTop,
        this.comment.$el.offsetTop,
        this.recommend.$el.offsetTop,
        Number.MAX_VALUE
      ];
    }
  },
  updated() {
    // console.log("detail updated");
  },
  beforeDestroy() {
    // console.log("detail beforeDestory");
  },
  watch: {
    $route(to, from) {
      if (to.params.iid !== from.params.iid) {
        this.getGoodDetail();
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.detail
  .detail-scroll
    position: absolute
    top: 43px
    right: 0
    bottom: 58px
    left: 0
    overflow: hidden
</style>