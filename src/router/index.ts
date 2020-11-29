import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* AdminPage */
import Admin from '@/views/admin/index.vue'

/* Router modules */
import menuRouterConfig from '@/router/modules/menuRouter.json'
import hideRouterConfig from '@/router/modules/hideRouter.json'

/* Solve the problem of router repeatedly jumping to the same route */
const originalPush = Router.prototype.push
Router.prototype.push = function push (location: any) {
  return (originalPush.call(this, location) as any).catch((err: any) => err)
}

Vue.use(Router)

/*
  Note: sub-menu only appear when children.length>=1
  Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
*/

/*
  name:'router-name'             the name field is required when using <keep-alive>, it should also match its component's name property
                                 detail see : https://vuejs.org/v2/guide/components-dynamic-async.html#keep-alive-with-Dynamic-Components
  redirect:                      if set to 'noredirect', no redirect action will be trigger when clicking the breadcrumb
  meta: {
    roles: ['admin', 'editor']   will control the page roles (allow setting multiple roles)
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    hidden: true                 if true, this route will not show in the sidebar (default is false)
    alwaysShow: true             if true, will always show the root menu (default is false)
                                 if false, hide the root menu when has less or equal than one children route
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    noCache: true                if true, the page will not be cached (default is false)
    affix: true                  if true, the tag will affix in the tags-view
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
*/

/**
  MenuRoutes
*/
export const menuRoutes: RouteConfig[] = [
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
    meta: { hidden: true }
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/testboard.vue'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'dashboard',
          affix: true
        }
      }
    ]
  },
  ...initRouterFromConfig(menuRouterConfig),
]

/**
  HideRoutes
*/
export const hideRoutes: RouteConfig[] = [
  ...initRouterFromConfig(hideRouterConfig),
]

const createRouter = () => new Router({
  mode: 'hash', // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [...menuRoutes, ...hideRoutes]
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  (router as any).matcher = (newRouter as any).matcher // reset router
}

export function initRouterFromConfig(configs: any) {
  const routers: RouteConfig[] = []

  Object.keys(configs).forEach(e => {
    routers.push({
      path: '/' + e,
      redirect: 'admin',
      component: Layout,
      name: e,
      meta: {
        title: configs[e].title,
        icon: configs[e].icon
      },
      children: configs[e].children ? getChildren(configs[e].children, e) : undefined
    })
  })

  return routers
}

export function getChildren(configs: any, name: string) {
  if (!configs) {
    return []
  }

  return configs.map((c: any) => {
    return {
      path: c.path,
      component: Admin,
      name: name + '.' + c.path,
      meta: {
        title: c.title,
        icon: c.icon
      },
      children: c.children ? getChildren(c.children, name + '.' + c.path) : undefined
    }
  })
}

export default router
