<template>
  <h4 v-if="checkedOpeningsNumber"> Showing {{ checkedOpeningsNumber }} out of {{ totalOpeningsNumber }}</h4>
  <h4 v-else> Showing {{ totalOpeningsNumber }} job openings</h4>

  <hr>

  <ul v-if="departmentOpenings">
    <li v-for="depName in departmentNames" :key="depName">
      {{ depName }} ({{ departmentOpenings[depName].length }})
    </li>
  </ul>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { departmentOpenings, checkedDepartments } = storeToRefs(jobOpeningsStore)

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
  return checkedDepartments.value.reduce((sum, dep) => {
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
      .filter(dep => (checkedDepartments.value.length > 0 ? checkedDepartments.value.includes(dep) : true))
  } else {
    return null
  }
}
)
</script>

<style scoped>

</style>
