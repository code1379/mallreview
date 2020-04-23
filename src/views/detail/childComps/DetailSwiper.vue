<template>
  <div class="detail-swiper">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="bannerList.length !== 0">
      <swiper-slide v-for="(banner, index) in bannerList" :key="index">
        <img class="banner-image" :src="banner" :alt="banner.title" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    bannerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.detail-swiper
  height: 0
  padding-bottom: 85%
  background: #ffffff
  overflow: hidden
  .swiper-container
    height: 0
    padding-bottom: 85%
    .banner-image
      width: 100%
</style>