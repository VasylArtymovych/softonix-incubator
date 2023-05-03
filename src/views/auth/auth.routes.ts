import type { RouteRecordRaw } from 'vue-router'
import Login from '@/views/auth/Login.vue'

export const authRoutesNames = {
  login: 'login',
  register: 'register'
}

export const authRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: authRoutesNames.login,
    component: Login
  },
  {
    path: '/register',
    name: authRoutesNames.register,
    component: () => import('@/views/auth/Register.vue')
  }
]
