<template>
  <div class="detail" :key="iid">
    <DetailTopBar />
    <Scroll class="detail-scroll">
      <DetailSwiper :bannerList="bannerList" />
      <DetailInfo :info="info" />
      <DetailShopInfo :shopInfo="shopInfo" />
      <DetailGallery :galleryInfo="galleryInfo" />
      <DetailParams :itemParams="itemParams" />
      <DetailComment :rate="rate" />
      <div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>9</p>
        <p>10</p>
        <p>11</p>
        <p>12</p>
        <p>13</p>
        <p>14</p>
        <p>15</p>
        <p>16</p>
        <p>17</p>
        <p>18</p>
        <p>19</p>
        <p>20</p>
        <p>21</p>
        <p>22</p>
        <p>23</p>
        <p>24</p>
        <p>25</p>
        <p>26</p>
        <p>27</p>
        <p>28</p>
        <p>29</p>
        <p>30</p>
        <p>31</p>
        <p>32</p>
        <p>33</p>
        <p>34</p>
        <p>35</p>
        <p>36</p>
        <p>37</p>
        <p>38</p>
        <p>39</p>
        <p>40</p>
        <p>41</p>
        <p>42</p>
        <p>43</p>
        <p>44</p>
        <p>45</p>
        <p>46</p>
        <p>47</p>
        <p>48</p>
        <p>49</p>
        <p>50</p>
      </div>
    </Scroll>
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
    DetailComment
  },
  data() {
    return {
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
      rate: {}
    };
  },
  mounted() {
    this.getGoodDetail();
  },
  methods: {
    //  获取数据
    async getGoodDetail() {
      const res = await getGoodDetail(this.iid);
      console.log(res);
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
  }
};
</script>

<style lang="stylus" scoped>
.detail
  .detail-scroll
    height: 600px
    overflow: hidden
</style>