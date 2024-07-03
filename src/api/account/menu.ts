/*
 * @Description: 菜单
 * @Author: Gavin
 * @Date: 2022-08-03 11:15:05
 * @LastEditTime: 2024-07-03 23:13:37
 * @LastEditors: GAtomis 850680822@qq.com
 */
import type { Primarykey, PageInfo, PageStruct } from '@/model/common';
import type { Permission } from '@/model/account';
import http from '@/utils/request-api';
export function getListByRoleId<R = Permission[]>() {
  return http.request<R>({
    url: '/permission/getListByRoleId',
    method: 'GET',
  });
}
/**
 * @description: 请求列表
 * @return {*}
 */
export function getMenusByToken() {
  return http.request<any, Result<{ menus: Menu[] }>>({
    url: '/menu/getBaseMenuTree',
    method: 'POST',
  });
}
