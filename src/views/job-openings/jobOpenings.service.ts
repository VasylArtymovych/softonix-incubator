import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'

class JobOpeningsService {
  async fetchJobOpenings (): Promise<IJobOpening[]> {
    await this.timer()

    return jobOpenings
  }

  async fetchDepartments (): Promise<IDepartment[]> {
    await this.timer()

    return departments
  }

  createDepartmentsOpenings (jobOpenings: IJobOpening[] = [], departments: IDepartment[] = []) {
    const depsNameValueMap = this.createDepartmentsNameValueMap(departments)

    return jobOpenings.reduce((acc: IDepartmentOpenings, j: IJobOpening) => {
      if (!j.departments.length) {
        acc.Other ? acc.Other.push(j) : acc.Other = [j]
      }

      j.departments.forEach((d: string) => {
        if (depsNameValueMap[d]) {
          acc[depsNameValueMap[d]] ? acc[depsNameValueMap[d]].push(j) : acc[depsNameValueMap[d]] = [j]
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
