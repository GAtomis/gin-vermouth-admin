/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-05 19:11:51
 * @LastEditTime: 2024-05-31 13:10:25
 * @LastEditors: GAtomis 850680822@qq.com
 */

import { ExpandRouteRecordRaw } from '@/model/router'
import { RouterTransition } from '@/components/transition'
const Layout = () => import('@/layout/index.vue')
const routes: Array<ExpandRouteRecordRaw> = [

  {
    path: '/',
    component: Layout,
    name: 'Menu',
    meta: {
      title: '系统',
      icon: 'icon-read',
      roles: '/readme',
      affix: false,
      sortIndex: 999,
    },
    children: [

    ],
  },

]

export default routes
