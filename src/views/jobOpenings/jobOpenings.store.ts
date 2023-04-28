export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpenings = ref<IJobOpening[] | null>(null)
  const departments = ref<IDepartment[] | null>(null)
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
        }

        if (res[1].status === 'fulfilled') {
          departments.value = res[1].value as IDepartment[]
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
    selectedDepartments,
    loading,
    error,
    loadData
  }
})
