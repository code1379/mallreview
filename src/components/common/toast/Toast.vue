<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    showMessage(msg) {
      this.message = msg;
      this.isShow = true;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, 3000);
    }
  }
};
</script>

<style lang="stylus" scoped>
.toast
  position: absolute
  z-index: 999
  transform: translate(-50%, -50%)
  left: 50%
  top: 50%
  background-color: #F0F9EB
  color: #67C23A
  width: 60%
  text-align: center
  padding: 50px 6px
  transition: all 0.3s
</style>