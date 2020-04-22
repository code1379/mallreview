<template>
  <swiper class="detail-swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="(banner, index) in bannerList" :key="index">
      <img class="banner-image" :src="banner" :alt="banner.title" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
  .banner-image
    width: 100%
</style>