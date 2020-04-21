<template>
  <swiper class="home-swiper" ref="mySwiper" :options="swiperOptions">
    <swiper-slide v-for="banner in bannerList" :key="banner.title">
      <a :href="banner.link">
        <img class="banner-image" :src="banner.image" :alt="banner.title" />
      </a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "carrousel",
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
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: true,
        loop: true
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.home-swiper
  height: 0
  padding-bottom: 52%
  background: #ffffff
  .banner-image
    width: 100%
</style>