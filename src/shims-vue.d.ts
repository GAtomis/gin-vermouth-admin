/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2021-05-01 00:48:47
 * @LastEditTime: 2024-05-27 15:35:28
 * @LastEditors: GAtomis 850680822@qq.com
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@zougt/vite-plugin-theme-preprocessor'
declare module 'vite-plugin-optimize-persist'