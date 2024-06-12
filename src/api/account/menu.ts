/*
 * @Description: 菜单
 * @Author: Gavin
 * @Date: 2022-08-03 11:15:05
 * @LastEditTime: 2024-05-31 09:56:31
 * @LastEditors: GAtomis 850680822@qq.com
 */
import type { Primarykey, PageInfo, PageStruct } from '@/model/common'
import type { Permission } from '@/model/account'
import http from '@/utils/request-api'
export function getListByRoleId<R = Permission[]>() {
  return http.request<R>(
    {
      url: '/permission/getListByRoleId',
      method: 'GET',
    },
  )
}
/**
 * @description: 请求列表
 * @return {*}
 */
export function getMenusByToken(){
  return http.request<any,Result<{menus:Menu[]}>>(
    {
      url: '/menu/getMenu',
      method: 'POST',
    },
  )  
}





// export function getList<Q = PageInfo, R = PageStruct<Permission>>(params: Q) {
//   return http.request<R>(
//     {
//       url: '/permission/list',
//       method: 'GET',
//       params,
//     },
//   )
// }
// export function createItem<Q = Permission, R = string>(data: Q) {
//   return http.request<R>(
//     {
//       url: '/permission/permission',
//       method: 'POST',
//       data,
//     }
//   )
// }
// export function updateItem<Q = Permission, R = string>(data: Q) {
//   return http.request<R>(
//     {
//       url: '/permission/permission',
//       method: 'PUT',
//       data,
//     }
//   )
// }

// export function delItem<Q = Permission, R = string>(data: Q) {
//   return http.request<R>(
//     {
//       url: '/permission/permission',
//       method: 'DELETE',
//       data,
//     }
//   )
// }

// export function getItem<Q = Primarykey, R = Permission>(params: Q) {
//   return http.request<R>(
//     {
//       url: '/permission/permission',
//       method: 'GET',
//       params,
//     }
//   )
// }
