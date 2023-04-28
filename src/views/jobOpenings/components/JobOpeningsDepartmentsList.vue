<template>
  <div class="text-xs font-medium text-warmGray-500 pb-2 border-b border-gray-medium">
    <h4 v-if="checkedOpeningsNumber">
      Showing {{ checkedOpeningsNumber }} out of {{ totalOpeningsNumber }} job openings
    </h4>
    <h4 v-else>
      Showing {{ totalOpeningsNumber }} job openings
    </h4>
  </div>

  <ul v-if="departmentsJobOpenings" v-show="visible" class="mt-1">
    <li
      v-for="depName in shownDepartments"
      :key="depName"
      class="text-xs font-semibold"
    >
      {{ depName }} ({{ departmentsJobOpenings[depName].length }})
      <JobOpeningsVacancyList :vacancyIdArray="departmentsJobOpenings[depName] " />
    </li>
  </ul>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, departments, selectedDepartments } = storeToRefs(jobOpeningsStore)

defineProps<{visible: boolean}>()

const departmentsJobOpenings = computed(() => {
  if (jobOpenings.value && departments.value) {
    return jobOpeningsService.createDepartmentsOpenings(jobOpenings.value, departments.value)
  }
})

const totalOpeningsNumber = computed(() => {
  if (departmentsJobOpenings.value) {
    return Object.values(departmentsJobOpenings.value).reduce((total, el) => {
      total += el.length
      return total
    }, 0)
  }
})

const checkedOpeningsNumber = computed(() => {
  return selectedDepartments.value.reduce((sum, dep) => {
    if (departmentsJobOpenings.value) {
      sum = sum += departmentsJobOpenings.value[dep].length
      return sum
    } else {
      return sum
    }
  }, 0)
})

const shownDepartments = computed(() => {
  if (departmentsJobOpenings.value) {
    return Object.keys(departmentsJobOpenings.value)
      .sort((a, b) => a.localeCompare(b))
      .filter(dep => (selectedDepartments.value.length > 0 ? selectedDepartments.value.includes(dep) : true))
  } else {
    return null
  }
})

</script>

<style scoped>

</style>
