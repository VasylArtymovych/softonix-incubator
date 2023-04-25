<template>
  <Header />
  <div>
    <h1>Job Openings</h1>

    <div v-if="loading">Loading...</div>

    <div v-else-if="error">
      <h2>{{ error }}</h2>
    </div>

    <div v-else>
      <JobOpeningsMultiselect :departments="departments" />
    </div>
  </div>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { departments, loading, error } = storeToRefs(jobOpeningsStore)

</script>

<style scoped>

</style>
