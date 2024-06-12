/*
 * @Description: 请输入....
 * @Author: Gavin
 * @Date: 2022-01-24 14:34:43
 * @LastEditTime: 2024-05-23 17:39:05
 * @LastEditors: GAtomis 850680822@qq.com
 */

const allModules = import.meta.glob('./*.ts', { eager: true })
import { useBubblingSort } from '@/hooks/global/common'
const modules: any = {}

import { ExpandRouteRecordRaw } from '@/model/router'

let modulesList: Array<ExpandRouteRecordRaw> = []
Object.keys(allModules).forEach((path) => {
  const fileName = path.split('/')[1]
  modules[
    `${allModules[path].default?.meta?.point ?? 0}${fileName.split('.')[0]}`
  ] = allModules[path][fileName] || allModules[path].default || allModules[path]

  if (Array.isArray(allModules[path].default as Array<ExpandRouteRecordRaw>)) {
    modulesList = [
      ...modulesList,
      ...(allModules[path].default as Array<ExpandRouteRecordRaw>),
    ]
  }
})

export default useBubblingSort<ExpandRouteRecordRaw>(modulesList, (arr, j) => {
  if ((arr[j].meta?.sortIndex ?? 0) > (arr[j + 1].meta?.sortIndex ?? 0)) {
    const temp = arr[j]
    arr[j] = arr[j + 1]
    arr[j + 1] = temp
  }
})
