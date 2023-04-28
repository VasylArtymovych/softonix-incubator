import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

class JobOpeningsService {
  async fetchJobOpenings (): Promise<IJobOpening[]> {
    await this.timer()

    return new Promise((resolve) => {
      resolve(jobOpenings)
    })
  }

  async fetchDepartments (): Promise<IDepartment[]> {
    await this.timer()

    return new Promise((resolve) => {
      resolve(departments)
    })
  }

  createDepartmentsOpenings (jobOpenings: IJobOpening[] = [], departments: IDepartment[] = []) {
    const depsNameValueMap = this.createDepartmentsNameValueMap(departments)

    return jobOpenings.reduce((acc: IDepartmentOpenings, j: IJobOpening) => {
      if (j.departments.length <= 0) {
        acc.Other ? acc.Other.push(j.id) : acc.Other = [j.id]
      }

      j.departments.forEach((d: string) => {
        if (depsNameValueMap[d]) {
          acc[depsNameValueMap[d]] ? acc[depsNameValueMap[d]].push(j.id) : acc[depsNameValueMap[d]] = [j.id]
        }
      })

      return acc
    }, {})
  }

  createDepartmentsNameValueMap (departments: IDepartment[] = []): IDepartmentsNameValueMap {
    const hashMap: IDepartmentsNameValueMap = {}

    departments.forEach(d => (hashMap[d.value] = d.name))

    return hashMap
  }

  createJobOpeningsIdValueMap (jobOpenings: IJobOpening[]) {
    const jobOpeningsMap: IJobOpeningsMap = {}

    jobOpenings.forEach(jobOp => {
      jobOpeningsMap[jobOp.id] = { ...jobOp }
    })

    return jobOpeningsMap
  }

  timer (delay = 1000) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, delay)
    })
  }
}

export const jobOpeningsService = new JobOpeningsService()
