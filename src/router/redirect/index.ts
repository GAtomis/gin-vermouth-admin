/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-09-05 19:11:51
 * @LastEditTime: 2024-05-31 11:03:08
 * @LastEditors: GAtomis 850680822@qq.com
 */

import { ExpandRouteRecordRaw } from '@/model/router'
import { RouterTransition } from '@/components/transition'

const routes: Array<ExpandRouteRecordRaw> = [
  {
    path: '/redirect/:path*',
    name: 'Redirect',
    component: RouterTransition,
    meta: {
      title: '重定向',
      icon: 'SettingOutlined',
      hidden: true,
    },
    children: [
      {
        path: '',
        name: 'RedirectChirden',
        component: () => import('@/view/redirect/index.vue'),
        meta: {
          title: '重定向',
          hidden: true,
          keepAlive: false,
        },
      },
    ],
  },
 

]

export default routes
