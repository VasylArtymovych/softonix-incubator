interface IJobOpening {
  title: string
  id: string
  departments: string[]
  isClosed: boolean
  url: string
}

interface IDepartment {
  name: string
  value: string
}

interface IDepartmentOpenings {
  [key: string]: IJobOpening[]
}

interface IDepartmentsNameValueMap {
  [key: string]: string
}

interface IJobOpeningsMap {
  [key: string]: Omit<IJobOpening, 'id'>
}