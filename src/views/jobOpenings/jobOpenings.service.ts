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
    await this.timer(2000)

    return new Promise((resolve) => {
      resolve(departments)
    })
  }

  createDepartmentOpenings (jobOpen: IJobOpening[] = [], departs: IDepartment[]) {
    const departmentNamesMap = this.createDepartmentNamesMap(departs)

    return jobOpen.reduce((acc: IDepartmentOpenings, j: IJobOpening) => {
      if (j.departments.length <= 0) {
        acc.Other ? acc.Other.push(j.id) : acc.Other = [j.id]
      }

      j.departments.forEach((d: string) => {
        if (departmentNamesMap[d]) {
          acc[departmentNamesMap[d]] ? acc[departmentNamesMap[d]].push(j.id) : acc[departmentNamesMap[d]] = [j.id]
        }
      })

      return acc
    }, {})
  }

  createDepartmentNamesMap (departments: IDepartment[] = []): IDepartmentNamesMap {
    const hashMap: IDepartmentNamesMap = {}

    departments.forEach(d => (hashMap[d.value] = d.name))

    return hashMap
  }

  createJobOpeningsMap (jobOpenings: IJobOpening[]) {
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
