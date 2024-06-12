/*
 * @Description: 路由核心 所有翻译均为机翻 勿6
 * @Author: Gavin
 * @Date: 2021-06-29 16:03:25
 * @LastEditTime: 2024-05-31 11:11:34
 * @LastEditors: GAtomis 850680822@qq.com
 */

import { createRouter, createWebHashHistory } from 'vue-router'
import type { App } from 'vue'
import { createGuardHook } from './permission'
import redirect from './redirect'
// import nested from './modules/nested'
// import account from './modules/account'
// import constructor from './modules/constructor'
import modules from './modules'
import publicRoute from './public'
import type { ExpandRouteRecordRaw } from '@/model/router'

const layout = () => import('@/layout/index.vue')

//公共的路由表  Public
export const publicRouteTable: Array<ExpandRouteRecordRaw> = [
  /*  meta-api
 
             title: 'Read', // menu name
             icon: 'icon-IE',// menu icon
              hidden: true,// display yes or not
             affix: false, // tagsView fixed header
             roles: "/readme/read", //backed async router
             only:true  // no menuGroup  only page  
             sortIndex: sort
             keepAlive:true
  */

  // {
  //   path: '/',
  //   name: 'Origin',
  //   redirect: '/Login',
  //   meta: {
  //     hidden: true,
  //   },
  // },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/view/Login.vue'),
    meta: {
      title: '欢迎登录',
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/view/ErrorPage/404.vue'),
    meta: {
      title: 'error',
      hidden: true,
    },
  },
  
  ...publicRoute,
  ...redirect,
]

//按需加载路由表  Load routes according to permissions. This attribute is private
export const privateRouteTable: Array<ExpandRouteRecordRaw> = [
  // ...nested,
  // ...account,
  // ...constructor,
  ...modules,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRouteTable,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function setupRouter(app: App) {
  app.use(router)
  // 创建路由守卫 loading guard hook
  createGuardHook(router)
  // console.log(modules);
}

export default router
