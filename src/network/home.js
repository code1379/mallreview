import { request } from './request'

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}
// /home/data?type=sell&page=1
// /home/data?type=new&page=1
// /home/data?type=pop&page=1
export function getOneTypeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}