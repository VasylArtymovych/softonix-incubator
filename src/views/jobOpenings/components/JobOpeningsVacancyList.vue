<template>
  <ul v-if="jobOpeningsIdValMap" class="list list-disc list-inside pl-2">
    <li
      v-for="jobOpId in firstFiveItemsArr" :key="jobOpId"
      class="truncate text-lightBlue-500"
    >
      <RouterLink
        :to="{name: $routeNames.jobOpeningInfo,
              params: {jobOpenigId: jobOpId, title: jobOpeningsIdValMap[jobOpId].title.replace(/[\s./]/g, '_')}}"
        class="hover:underline"
      >
        {{ jobOpeningsIdValMap[jobOpId].title }}
      </RouterLink>
    </li>
    <div class="text-lightBlue-600">
      <button v-if="vacancyIdArray.length > 5" @click="showAll = !showAll">
        {{ !showAll ? 'See more' : 'See less' }}
      </button>
    </div>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  vacancyIdArray: string[]
}>()

const jobOpeningStore = useJobOpeningsStore()
const { jobOpenings } = storeToRefs(jobOpeningStore)

const jobOpeningsIdValMap = computed(() => {
  if (jobOpenings.value) {
    return jobOpeningsService.createJobOpeningsIdValueMap(jobOpenings.value)
  }
})

const showAll = ref(false)

const firstFiveItemsArr = computed(() => {
  if (props.vacancyIdArray.length > 5 && !showAll.value) {
    return props.vacancyIdArray.slice(0, 5)
  } else {
    return props.vacancyIdArray
  }
})
</script>

<style lang="scss" scoped>
.list li::marker {
  color: green;
  font-size: 16px;
}

.link {
  text-decoration:underline;
}
</style>
