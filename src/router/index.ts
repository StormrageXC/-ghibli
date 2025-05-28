import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // 路由器使用的历史记录模式。大多数应用应该使用 createWebHistory，但这需要正确配置服务器。
  // 你也可以使用 createWebHashHistory 来实现基于 hash 的历史记录，无需配置服务器。但这种方式不会被搜索引擎处理，SEO 的效果较差。
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})
export default router
