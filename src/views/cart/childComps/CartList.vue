<template>
  <div class="cart-list">
    <CartListItem v-for="item in cartList" :key="item.iid" :item="item" />
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
export default {
  name: "CartList",
  components: {
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted() {
    console.log(this.cartList);
  }
};
</script>
