import type { RouteRecordRaw } from 'vue-router'

import { routeNames } from './route-names'
import { contactsRoutes } from '@/views/contacts/contacts.routes'
import { authRoutes } from '@/views/auth/auth.routes'
import Home from '@/views/home/Home.vue'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: routeNames.rootPage,
    component: Home
  },

  ...authRoutes,
  ...contactsRoutes
]
