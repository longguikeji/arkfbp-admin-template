import { RouteConfig } from 'vue-router'

/* AdminPage */
import Admin from '@/admin/main/index.vue'

/* Layout */
import Layout from '@/layout/index.vue'

export function initRouterFromConfig(path: string) {
  const routerconfig = require(`@/${path.split('.').join('/')}.json`)

  const routers: RouteConfig[] = []

  Object.keys(routerconfig).forEach(e => {
    routers.push({
      path: '/' + e,
      redirect: 'admin',
      component: Layout,
      name: e,
      meta: {
        title: routerconfig[e].title,
        icon: routerconfig[e].icon,
        config: routerconfig[e].config
      },
      children: routerconfig[e].children ? getChildren(routerconfig[e].children, e) : undefined
    })
  })

  return routers
}
  
function getChildren(routerconfig: any, name: string) {
  if (!routerconfig) {
    return []
  }

  return routerconfig.map((c: any) => {
    return {
      path: c.path,
      component: Admin,
      name: name + '.' + c.path,
      meta: {
        title: c.title,
        icon: c.icon,
        config: c.config
      },
      children: c.children ? getChildren(c.children, name + '.' + c.path) : undefined
    }
  })
}