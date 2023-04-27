<template>
  <ul v-if="jobOpeningsMap" class="list list-disc list-inside pl-2">
    <li
      v-for="jobOpId in firstFiveItemsArr" :key="jobOpId"
      class="truncate text-lightBlue-500"
    >
      <RouterLink
        :to="{name: $routeNames.jobOpeningInfo, params: {jobOpenigId: jobOpId, title: jobOpeningsMap[jobOpId].title}}"
        class="hover:underline"
      >
        {{ jobOpeningsMap[jobOpId].title }}
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
const { jobOpeningsMap } = storeToRefs(jobOpeningStore)

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
