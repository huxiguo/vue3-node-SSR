import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('../views/home.vue')
      },
      {
        path: '/about',
        component: () => import('../views/about.vue')
      }
    ]
  }
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}
