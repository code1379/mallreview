<template>
  <div class="params" v-if="Object.keys(itemParams).length !== 0 ">
    <div class="item-params">
      <div class="title">{{sizeTitle}}</div>
      <table class="size-table">
        <tr v-for="(tr, index) in sizeTable" :key="index" class="row">
          <td v-for="(td, indey) in tr" :key="indey" class="item">{{td}}</td>
        </tr>
      </table>
      <div class="title">{{paramsTitle}}</div>
      <table class="params-table">
        <tr v-for="(item, index) in params" :key="index" class="row">
          <td class="name">{{item.key}}</td>
          <td class="param">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    itemParams: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    sizeTable() {
      if (Object.keys(this.itemParams).length !== 0) {
        return this.itemParams.rule.tables[0];
      }
    },
    sizeTitle() {
      if (Object.keys(this.itemParams).length !== 0) {
        return this.itemParams.rule.key;
      }
    },
    params() {
      if (Object.keys(this.itemParams).length !== 0) {
        return this.itemParams.info.set;
      }
    },
    paramsTitle() {
      if (Object.keys(this.itemParams).length !== 0) {
        return this.itemParams.info.key;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.title
  text-align: center
  line-height: 40px
table, .params
  padding: 0 6px
  .item-params
    .size-table
      width: 100%
      .row
        line-height: 30px
        font-size: 14px
        .item
          padding-left: 2px
          border-bottom: 1px solid rgba(100, 100, 100, 0.1)
    .params-table
      .row
        line-height: 30px
        font-size: 14px
        .name
          width: 90px
        .param
          color: #eb4868
</style>