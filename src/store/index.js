import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cart: [
      {
        "title": "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
        "price": "56.64",
        "iid": "1jw0sr2",
        "count": 2,
        "imgUrl": 'http://s11.mogucdn.com/mlcdn/c45406/180811_1k5hfa6d803575df3lkb6j67l5j3c_640x960.jpg',
        "isSelect": true
      },
      {
        "title": "2018春夏季新款八色纯色浅色系时尚简约韩范纯棉学生休闲百搭基础款纯色圆领短袖上衣女T恤",
        "price": "39.00",
        "iid": "1lyp2vg",
        "count": 1,
        "imgUrl": 'http://s11.mogucdn.com/mlcdn/c45406/180423_0h6j2abd17hka9d4j7dlk710d3af9_640x960.jpg',
        "isSelect": false
      },
      {
        "title": "2018春秋冬白色体恤女长袖宽松t恤女打底衫韩版新款圆领纯棉百搭上衣",
        "price": "39.00",
        "iid": "1m7dvsq",
        "count": 3,
        "imgUrl": 'http://s11.mogucdn.com/mlcdn/c45406/180808_600abce0g8dc8i4f6ic7k27i7837l_640x960.jpg',
        "isSelect": false
      }
    ]
  },
  mutations: {
    addToCart(state, payload) {
      payload.count = 1
      payload.isSelect = false
      state.cart.push(payload)
    },
    productCountPlusOne(state, product) {
      product.count += 1
    },
    changeIsSelect(state, product) {
      product.isSelect = !product.isSelect
    },
    changeAllSelectFalse(state) {
      state.cart.forEach(item => item.isSelect = false)
    },
    changeAllSelectTrue(state) {
      state.cart.forEach(item => item.isSelect === false ? item.isSelect = true : null)
      console.log(state.cart)
    }
  },
  actions: {
    // 使用 mutations 方法使用 commit
    asyncAddToCart(context, payload) {
      const product = context.state.cart.find(product => product.iid === payload.iid)
      if (!product) {
        context.commit('addToCart', payload)
      } else {
        context.commit("productCountPlusOne", product)
      }
    },
    // 改变 select
    asyncChangeIsSelect(context, iid) {
      const product = context.state.cart.find(product => product.iid === iid)
      context.commit("changeIsSelect", product)
    },
    // 如果是全选 则全部取消，如果不是全选，就全部选中
    asyncSelectAllItems({ getters, commit }) {
      console.log(getters)
      if (getters.isAllSelect) {
        commit('changeAllSelectFalse')
      } else {
        commit('changeAllSelectTrue')
      }
    }
  },
  // getters 类似于 computed 
  getters: {
    cartList(state) {
      return state.cart
    },
    isAllSelect(state) {
      for (let item of state.cart) {
        if (item.isSelect === false) {
          return false
        }
      }
      return true
    }
  },
  modules: {
  }
})
