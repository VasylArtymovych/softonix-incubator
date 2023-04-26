<template>
  <div class="text-xs font-medium text-warmGray-500 pb-2 border-b border-gray-medium">
    <h4 v-if="checkedOpeningsNumber">
      Showing {{ checkedOpeningsNumber }} out of {{ totalOpeningsNumber }} job openings
    </h4>
    <h4 v-else>
      Showing {{ totalOpeningsNumber }} job openings
    </h4>
  </div>

  <ul v-if="departmentOpenings" v-show="visible" class="mt-1">
    <li
      v-for="depName in departmentNames"
      :key="depName"
      class="text-xs font-semibold"
    >
      {{ depName }} ({{ departmentOpenings[depName].length }})
      <JobOpeningsVacancyList :vacancyIdArray="departmentOpenings[depName] " />
    </li>
  </ul>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { departmentOpenings, selectedDepartments } = storeToRefs(jobOpeningsStore)
defineProps<{visible: boolean}>()

const totalOpeningsNumber = computed(() => {
  if (departmentOpenings.value) {
    return Object.values(departmentOpenings.value).reduce((total, el) => {
      total += el.length
      return total
    }, 0)
  } else {
    return null
  }
})

const checkedOpeningsNumber = computed(() => {
  return selectedDepartments.value.reduce((sum, dep) => {
    if (departmentOpenings.value) {
      sum = sum += departmentOpenings.value[dep].length
      return sum
    } else {
      return sum
    }
  }, 0)
})

const departmentNames = computed(() => {
  if (departmentOpenings.value) {
    return Object.keys(departmentOpenings.value)
      .sort((a, b) => a.localeCompare(b))
      .filter(dep => (selectedDepartments.value.length > 0 ? selectedDepartments.value.includes(dep) : true))
  } else {
    return null
  }
})

</script>

<style scoped>

</style>
