import type { RouteRecordRaw } from 'vue-router'

export const jobOpeningsRouteNames = {
  jobOpenings: 'jobOpenings'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/jobOpenings',
    name: jobOpeningsRouteNames.jobOpenings,
    component: () => import('./JobOpenings.vue'),
    props: true
  }
]
