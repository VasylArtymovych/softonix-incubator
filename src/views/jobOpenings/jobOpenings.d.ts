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
  [key: string]: string[]
}

interface IDepartmentNamesMap {
  [key: string]: string
}

