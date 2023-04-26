<template>
  <div class="jobopenings flex min-h-full">
    <div class="left w-1/3 py-6 pr-2">
      <div
        class="flex flex-col justify-between border border-gray-medium rounded-sm "
      >
        <div class="p-2">
          <div class="mb-1 flex justify-between">
            <h2 class="uppercase font-semibold text-sm text-gray">Job Openings</h2>
            <AppButton>
              <span class="px-1">&#10140;</span>
            </AppButton>
          </div>

          <div v-if="loading" class="w-full text-center">Loading...</div>

          <div v-else-if="error">
            <h2>{{ error }}</h2>
          </div>

          <div v-else>
            <JobOpeningsMultiselect />

            <JobOpeningsDepartmentsList :visible="visibleList" />
          </div>
        </div>
        <button class="w-fill bg-blue-100 text-xs font-semibold text-blue-500" @click="visibleList = !visibleList">
          {{ visibleList? 'See less &#9650;' : 'See more &#9660;' }}
        </button>
      </div>
    </div>

    <div class="rigth w-2/3 border-l border-gray-medium ">
      some data
    </div>
  </div>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { loading, error } = storeToRefs(jobOpeningsStore)

const visibleList = ref(true)
</script>

<style scoped>
.jobopenings {
  min-height: calc(100vh - 72px);
}
</style>
