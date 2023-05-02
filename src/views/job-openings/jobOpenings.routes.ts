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
        path: ':jobOpeningId/:title',
        name: jobOpeningsRouteNames.jobOpeningInfo,
        component: () => import('@/views/job-openings/JobOpeningInfo.vue'),
        props: (router) => ({ ...router.params, jobOpeningId: router.params.jobOpeningId }),
        meta: { transition: 'nested' }
      }
    ]
  }
]
