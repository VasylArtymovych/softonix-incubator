import type { RouteRecordRaw } from 'vue-router'

export const jobOpeningsRouteNames = {
  jobOpenings: 'jobOpenings',
  jobOpeningInfo: 'jobOpening.info'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/jobOpenings',
    name: jobOpeningsRouteNames.jobOpenings,
    component: () => import('./JobOpenings.vue'),
    children: [
      {
        path: ':jobOpenigId/:title',
        name: jobOpeningsRouteNames.jobOpeningInfo,
        component: () => import('@/views/jobOpenings/JobOpeningInfo.vue'),
        props: (router: any) => ({ ...router.params, jobOpeningId: router.params.jobOpenigId }),
        meta: { transition: 'slide' }
      }
    ]
  }
]
