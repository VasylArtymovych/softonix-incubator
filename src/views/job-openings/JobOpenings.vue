<template>
  <div class="jobopenings flex min-h-full">
    <!--Left side-->
    <div class="left w-1/3 py-6 pr-2">
      <div
        class="flex flex-col justify-between border border-gray-medium rounded-sm "
      >
        <div class="p-2">
          <div class="mb-1 flex justify-between">
            <h2 class="font-semibold text-sm text-gray">
              JOB OPENINGS
              <span
                class="info relative inline-flex justify-center items-center w-5 h-5 text-white rounded-full ml-2
                bg-blue-500 hover:bg-[#1d4ed8]"
                title="Info"
              >i</span>
            </h2>
            <AppButton>
              <span class="px-1">&#10140;</span>
            </AppButton>
          </div>

          <div v-if="loading" class="w-full text-gray font-semibold text-center ">Loading...</div>

          <div v-else-if="error">
            <h2>{{ error }}</h2>
          </div>

          <div v-else-if="departmentsJobOpenings">
            <JobOpeningsMultiselect :departmentsJobOpenings="departmentsJobOpenings" />
            <JobOpeningsDepartmentsList :departmentsJobOpenings="departmentsJobOpenings" :visible="visibleList" />
          </div>
        </div>
        <button class="w-fill bg-blue-100 text-xs font-semibold text-blue-500" @click="visibleList = !visibleList">
          {{ visibleList? 'See less &#9650;' : 'See more &#9660;' }}
        </button>
      </div>
    </div>

    <!--Right side-->
    <div class="w-2/3 border-l border-gray-medium p-6">
      <div class="right sticky top-6">
        <h2 class="text-xl font-bold uppercase text-center text-gray">Job opening information page</h2>
        <RouterView #default="{Component}">
          <Transition :duration="550" :name="$route.meta.transition as string || 'fade'" mode="out-in">
            <component :is="Component" :key="$route.path" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { jobOpenings, departments, loading, error } = storeToRefs(jobOpeningsStore)

const visibleList = ref(true)

const departmentsJobOpenings = computed(() => {
  if (jobOpenings.value && departments.value) {
    return jobOpeningsService.createDepartmentsOpenings(jobOpenings.value, departments.value)
  }
})

</script>

<style scoped>
.jobopenings {
  min-height: calc(100vh - 73px);
}

.info::after {
  content: 'Information';
  display: none;
  padding: 3px;
  position: absolute;
  top: -35px;
  left: 17px;
  color: #3b82f6;
  background: rgb(201, 197, 197);
  border: 1px solid #3b82f6;
  transform: skewY(-10deg);
}
.info:hover.info::after {
  display: block;
}

.nested-enter-active,
.nested-leave-active {
transition: all 0.3s ease-in-out;
}
.nested-leave-active {
  transition-delay: 0.25s;
}
.nested-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.nested-enter-active :deep(.inner),
.nested-leave-active :deep(.inner){
  transition: all 0.3s ease-in-out;
}
.nested-enter-active :deep(.inner) {
transition-delay: 0.25s;
}
.nested-enter-from :deep(.inner){
  transform: translateX(-30px);
  opacity: 0.001;
}
.nested-leave-to :deep(.inner) {
  transform: translateX(30px);
  opacity: 0.001;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
