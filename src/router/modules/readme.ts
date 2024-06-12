/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-27 11:50:29
 * @LastEditTime: 2024-05-31 13:21:16
 * @LastEditors: GAtomis 850680822@qq.com
 */

const Layout = () => import('@/layout/index.vue')
import { ExpandRouteRecordRaw } from '@/model/router'

const mixinRouter: Array<ExpandRouteRecordRaw> = [
  {
    path: '/readme',
    component: Layout,
    redirect: '/readme/read',
    name: 'Readme',
    meta: {
      title: 'About',
      icon: 'icon-read',
      roles: '/readme',
      affix: false,
      sortIndex: 999,
    },
    children: [
   
    ],
  },
]

export default mixinRouter
