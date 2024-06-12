const viewModules = import.meta.glob('../view/**/*.vue')
const pluginModules = import.meta.glob('../plugin/**/*.vue')

export const asyncRouterHandle = (asyncRouter:any) => {
  asyncRouter.forEach(item => {
    if (item.component && typeof item.component === 'string') {
      if (item.component.split('/')[0] === 'view') {
        item.component = dynamicImport(viewModules, item.component)

      } else if (item.component.split('/')[0] === 'plugin') {
        item.component = dynamicImport(pluginModules, item.component)
      }
    }
    if (item.children) {
      asyncRouterHandle(item.children)
    }
  })
}

function dynamicImport(
  dynamicViewsModules,
  component
) {

  console.log(dynamicViewsModules,component);
  
  const keys = Object.keys(dynamicViewsModules)
  const matchKeys = keys.filter((key) => {
    const k = key.replace('../', '')
    return k === component
  })
  console.error(matchKeys);
  
  const matchKey = matchKeys[0]


  
  return dynamicViewsModules[matchKey]
}
