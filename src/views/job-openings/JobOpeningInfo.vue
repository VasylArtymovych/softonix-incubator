<template>
  <h2 v-if="loading" class="mt-8 font-bold text-base text-center">Loading...</h2>
  <div v-else-if="error" class="text-center text-red-500">Ooops, Something vent wrong.</div>
  <div v-else-if="jobOpeningsIdValMap" class="mt-8 border border-gray-medium rounded-lg p-4">
    <div class="inner p-3 bg-blue-200">
      <h2 class="text-xl font-bold text-center">
        <span class="text-lg text-gray italic">Job opening:</span>
        {{ jobOpeningsIdValMap[jobOpeningId].title }}
      </h2>
      <a
        :href="jobOpeningsIdValMap[jobOpeningId].url"
        target="_blank"
        class="block mt-6 font-semibold text-center text-blue-500 hover:underline"
      >
        Visit Company site, for more information.
      </a>
      <p class="mt-6 font-bold text-center text-ld">
        <span class="font-medium text-base text-gray">Is vacancy already closed:</span>
        {{ jobOpeningsIdValMap[jobOpeningId].isClosed ? 'Yes' : 'No' }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps<{jobOpeningId: string}>()

const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, loading, error } = storeToRefs(jobOpeningsStore)

const jobOpeningsIdValMap = computed(() => {
  if (jobOpenings.value) {
    return jobOpeningsService.createJobOpeningsIdValueMap(jobOpenings.value)
  }
})
</script>
