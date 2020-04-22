export class shopInfoDataConstructor {
  constructor(shopInfo) {
    this.name = shopInfo.name,
      this.shopLogo = shopInfo.shopLogo,
      this.shopUrl = shopInfo.shopUrl,
      this.goodsCount = shopInfo.cGoods,
      this.sells = shopInfo.cSells,
      this.scores = [...shopInfo.score]
  }
}
