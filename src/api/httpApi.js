import { get, post } from './http';
// 获取机械列表
export function jixie(data) {
  return get('/jixie', data)
}
// 获取树状图
export function navigate(data) {
  return get('/navigate-tree', data)
}
// 获取机械类别
export function category(data) {
  return post('/category', data)
}
// 获取产权单位
export function property(data) {
  return post('/property', data)
}
// 获取机械名称
export function names(data) {
  return post('/names', data)
}
