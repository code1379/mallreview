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
  name: "HomeSwiper",
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
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    }
  },
  mounted() {
    console.log("Current Swiper instance object", this.swiper);
  },
  methods: {
    pause() {
      console.log("homeswiper pause");
      this.swiper && this.swiper.pause && this.swiper.pause();
    },
    run() {
      console.log("homeswiper run");
      this.swiper && this.swiper.run && this.swiper.run();
    }
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