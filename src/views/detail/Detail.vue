<template>
  <div class="detail">
    <div class="inner" :key="iid
    ">
      <DetailTopBar
        :navs="navs"
        :currentIndex="currentIndex"
        @changeCurrentIndex="handleChangeCurrentIndex"
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
      <DetailBottomBar @addToCart="handleAddToCart" />
    </div>
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
import { debounce } from "common/util";
import { shopInfoDataConstructor } from "./dataConstructor";
// vuex
import { mapActions } from "vuex";
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
      this.debounceScrollRefresh = debounce(() => {
        // console.log("hi got images");
        this.scroll.refresh();

        // 这里有问题 vue-router 复用，第二次init 就获取不到对应的高度了
        // console.log(this.params, this.params.$el.offsetTop);
        this.heightList = [
          0,
          this.params && this.params.$el.offsetTop,
          this.comment && this.comment.$el.offsetTop,
          this.recommend && this.recommend.$el.offsetTop,
          Number.MAX_VALUE
        ];
      });
      this.$bus.$on("goodImageLoadOver", this.debounceScrollRefresh);
      this.currentIndex = 0;
    },
    // vuex map
    ...mapActions({
      add: "asyncAddToCart"
    }),
    //  获取数据
    async getGoodDetail() {
      const res = await getGoodDetail(this.iid);
      if (res) {
        const { itemInfo, columns, shopInfo } = res.result;
        // 轮播图图片
        this.bannerList = itemInfo.topImages;
        // 商品信息
        this.good = new Good(itemInfo, columns, shopInfo);
        this.shopInfo = new shopInfoDataConstructor(res.result.shopInfo);
        this.galleryInfo = res.result.detailInfo;
        this.itemParams = res.result.itemParams;
        this.rate = res.result.rate;
      }
    },
    // 处理滚动位置
    handleCurrentPositionY(y) {
      // console.log(y, "scroll listen");
      // console.log(this.heightList);
      // [0, 15240, 16263, 16399, 1.7976931348623157e+308]
      // 作比较
      if (this.heightList && this.heightList.length !== 0) {
        for (let i = 0; i < this.heightList.length; i++) {
          if (i !== this.currentIndex) {
            if (y > this.heightList[i] && y < this.heightList[i + 1]) {
              this.currentIndex = i;
            }
          }
        }
      }
    },
    // 处理topbar滚动到指定位置
    handleChangeCurrentIndex(index) {
      // console.log(index, "get");
      if (this.heightList && this.heightList.length) {
        console.log(index);
        console.log(this.heightList);
        this.currentIndex = index;
        console.log(this.scroll);
        console.log(this.heightList[index]);
        this.scroll.scrollTo(this.heightList[index]);
      }

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
    // 处理加入购物车
    handleAddToCart() {
      // console.log("handleAddToCart");
      // console.log(this.good);
      // console.log(this.bannerList);
      const product = {
        title: this.good.title,
        price: this.good.lowNowPrice,
        iid: this.good.iid,
        imgUrl: this.bannerList[0]
      };
      this.add(product);
      this.$toast.showMessage("添加到购物车");
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
    }
    // heightList() {
    //   return [
    //     0,
    //     this.params && this.params.$el.offsetTop,
    //     this.comment.$el.offsetTop,
    //     this.recommend.$el.offsetTop,
    //     Number.MAX_VALUE
    //   ];
    // }
  },
  updated() {
    // console.log("detail updated");
    // this.heightList = [
    //   0,
    //   this.params && this.params.$el.offsetTop,
    //   this.comment.$el.offsetTop,
    //   this.recommend.$el.offsetTop,
    //   Number.MAX_VALUE
    // ];
  },
  beforeDestroy() {
    console.log("detail beforeDestory");
    this.$bus.$off("goodImageLoadOver", this.debounceScrollRefresh);
  },
  watch: {
    $route(to, from) {
      if (to.params.iid !== from.params.iid) {
        this.init();
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