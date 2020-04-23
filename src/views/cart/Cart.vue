<template>
  <div class="cart">
    <CartTopBar />
    <Scroll class="cart-scroll">
      <CartList :cartList="cartList" />
    </Scroll>
    <CartChargeBar
      :totalPrice="totalPrice"
      :isAllSelect="isAllSelect"
      @selectAllItems="selectAllItems"
    />
  </div>
</template>
<script>
import CartTopBar from "./childComps/CartTopBar";
import CartList from "./childComps/CartList";
import CartChargeBar from "./childComps/CartChargeBar";
import Scroll from "cn/scroll/Scroll";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart",
  components: {
    CartTopBar,
    Scroll,
    CartList,
    CartChargeBar
  },
  computed: {
    ...mapGetters(["cartList", "isAllSelect"]),
    totalPrice() {
      const selectedCartList = this.cartList.filter(item => item.isSelect);
      const totalPrice = selectedCartList.reduce(
        (init, item) => init + item.price * item.count,
        0
      );
      return totalPrice === 0 ? 0 : totalPrice.toFixed(2);
    }
  },
  methods: {
    selectAllItems() {
      console.log("selectAllItems");
      this.asyncSelectAllItems();
    },
    ...mapActions(["asyncSelectAllItems"])
  }
};
</script>

<style lang="stylus" scoped>
.cart
  .cart-scroll
    position: absolute
    top: 43px
    right: 0
    bottom: 90px
    left: 0
    overflow: hidden
</style>