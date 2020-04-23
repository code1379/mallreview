<template>
  <div class="gallery" v-if="Object.keys(galleryInfo).length !== 0">
    <div class="top clearfix">
      <div class="left line"></div>
      <div class="title">{{galleryInfo.desc}}</div>
      <div class="right line"></div>
    </div>

    <div class="cate" v-for="cate in galleryInfo.detailImage.slice(0,1)" :key="cate.anchor">
      <div class="keyword">{{cate.key}}</div>
      <div v-for="(imgUrl, index) in cate.list" :key="index">
        <img class="gallery-image" :src="imgUrl" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGallery",
  props: {
    galleryInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.gallery
  padding: 6px
  .line
    height: 2px
    background-color: #000
    width: 70%
    background-color: #ccc
    &.right
      float: right
  .title
    padding: 8px 6px
    font-size: 14px
    line-height: 24px
  .cate
    .keyword
      line-height: 40px
      text-align: center
    .gallery-image
      width: 100%
</style>