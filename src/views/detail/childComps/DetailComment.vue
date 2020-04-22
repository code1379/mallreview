<template>
  <div class="comment" v-if="Object.keys(rate).length !== 0 ">
    <div class="title">
      <div class="left">用户评论({{rate.cRate}})</div>
      <div class="right">更多></div>
    </div>
    <div class="user-comments">
      <div class="item" v-for="comment in rate.list" :key="comment.rateId">
        <div class="avatar">
          <img class="avatar-image" :src="comment.user.avatar" alt />
          <div class="content">{{comment.content}}</div>
          <div class="desc">
            <div class="time">{{comment.created}}</div>
            <div class="style">{{comment.style}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComment",
  props: {
    rate: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
.comment
  padding: 6px
.title
  display: flex
  justify-content: space-between
.user-comments
  .item
    margin: 4px 0
    .avatar
      .avatar-image
        width: 40px
        height: 40px
        border-radius: 50%
    .content
      margin: 5px 0
    .desc
      display: flex
      .style
        margin-left: 10px
</style>