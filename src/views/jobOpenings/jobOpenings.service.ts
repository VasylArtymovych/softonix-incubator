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

  createDepartmentOpenings (data: IJobOpening[] = []) {
    return data.reduce((acc: IDepartmentOpenings, j: IJobOpening) => {
      if (j.departments.length <= 0) {
        acc.other ? acc.other.push(j.id) : acc.other = [j.id]
      }
      j.departments.forEach((d: string) => {
        acc[d] ? acc[d].push(j.id) : acc[d] = [j.id]
      })

      return acc
    }, {})
  }

  timer (delay = 1000) {
    return new Promise(resolve => {
      setTimeout(() => { resolve('') }, delay)
    })
  }
}

export const jobOpeningsService = new JobOpeningsService()
