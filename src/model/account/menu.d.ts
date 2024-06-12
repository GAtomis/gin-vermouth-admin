

declare interface Menu {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  parentId: string
  path: string
  name: string
  hidden: boolean
  component: string
  sort: number
  meta: Meta
  authoritys: any
  menuBtn: any
  menuId: string
  children?: Children[]
  parameters: any[]
  btns: any
}

declare interface Meta {
  activeName: string
  keepAlive: boolean
  defaultMenu: boolean
  title: string
  icon: string
  closeTab: boolean
}

declare interface Children {
  ID: number
  CreatedAt: string
  UpdatedAt: string
  parentId: string
  path: string
  name: string
  hidden: boolean
  component: string
  sort: number
  meta: Meta2
  authoritys: any
  menuBtn: any
  menuId: string
  children: any
  parameters: any[]
  btns: any
}

declare interface Meta2 {
  activeName: string
  keepAlive: boolean
  defaultMenu: boolean
  title: string
  icon: string
  closeTab: boolean
}
