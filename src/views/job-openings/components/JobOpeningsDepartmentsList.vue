<template>
  <div class="text-xs font-medium text-warmGray-500 pb-2 border-b border-gray-medium">
    <h4 v-if="checkedOpeningsNumber">
      Showing {{ checkedOpeningsNumber }} out of {{ totalOpeningsNumber }} job openings
    </h4>
    <h4 v-else>
      Showing {{ totalOpeningsNumber }} job openings
    </h4>
  </div>

  <ul v-show="visible" class="mt-1">
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
const { selectedDepartments } = storeToRefs(jobOpeningsStore)

const props = defineProps<{
  visible: boolean
  departmentsJobOpenings: IDepartmentOpenings
}>()

const totalOpeningsNumber = computed(() => Object.values(props.departmentsJobOpenings)
  .reduce((total, jobArr) => {
    total += jobArr.length
    return total
  }, 0)
)

const checkedOpeningsNumber = computed(() => {
  return selectedDepartments.value.reduce((sum, depName) => {
    sum += props.departmentsJobOpenings[depName].length
    return sum
  }, 0)
})

const shownDepartments = computed(() => Object.keys(props.departmentsJobOpenings)
  .sort((a, b) => a.localeCompare(b))
  .filter(dep => (selectedDepartments.value.length ? selectedDepartments.value.includes(dep) : true))

)
</script>
