import { request } from './request'

export function getGoodDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommendGoods() {
  return request({
    url: '/recommend'
  })
}

// 把获取到的数据存储
export class Good {
  constructor(itemInfo, columns, shopInfo) {
    this.iid = itemInfo.iid
    this.title = itemInfo.title
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.lowNowPrice = itemInfo.lowNowPrice
    this.columns = columns
    this.services = shopInfo.services
  }
}


// 