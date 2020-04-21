import axios from 'axios'
import { baseURL, timeout } from './config'

export function request(config) {
  const instance = axios.create({
    baseURL,
    timeout
  })
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    console.log("request error", error)
  })
  instance.interceptors.response.use(response => {
    return response.data
  }, error => {
    console.log("response error", error)
  })
  return instance(config)
}