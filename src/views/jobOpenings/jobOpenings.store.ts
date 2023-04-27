export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpenings = ref<IJobOpening[]>([])
  const departments = ref<IDepartment[]>([])

  const departmentOpenings = ref<IDepartmentOpenings | null>(null)
  const jobOpeningsMap = ref<IJobOpeningsMap | null>(null)
  const selectedDepartments = ref<string[]>([])

  const loading = ref(false)
  const error = ref('')

  const loadData = () => {
    loading.value = true

    return Promise.allSettled([
      jobOpeningsService.fetchJobOpenings(),
      jobOpeningsService.fetchDepartments()])
      .then(res => {
        if (res[0].status === 'fulfilled') {
          jobOpenings.value = res[0].value as IJobOpening[]
          jobOpeningsMap.value = jobOpeningsService.createJobOpeningsMap(res[0].value)
        }

        if (res[1].status === 'fulfilled') {
          departments.value = res[1].value as IDepartment[]
        }

        if (res[0].status === 'fulfilled' && res[1].status === 'fulfilled') {
          departmentOpenings.value =
          jobOpeningsService.createDepartmentOpenings(res[0].value, res[1].value)
        }
      })
      .catch(error => {
        error.value = error
      })
      .finally(() => (loading.value = false))
  }
  loadData()

  return {
    jobOpenings,
    departments,
    departmentOpenings,
    selectedDepartments,
    jobOpeningsMap,
    loading,
    error,
    loadData
  }
})
