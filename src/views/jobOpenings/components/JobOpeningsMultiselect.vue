<template>
  <div class="flex justify-between">
    <div
      ref="multiSelectRef"
      class="relative flex grow-0 items-center flex-wrap gap-1 w-[400px] min-h-[46px] border border-gray p-1
      rounded"
      @click="focused = !focused"
    >
      <div
        v-for="(dep, i) in checkedDepartments" :key="dep.name"
        class="max-w-[24%] px-2 py-1 flex gap-[2px] flex-grow-0 items-center text-xs font-semibold text-blue-500
      bg-blue-100"
        @click.stop
      >
        <p class="truncate">{{ dep.name }}</p>
        <span
          class="relative bottom-1 text-xl text-blue-800 hover:text-red-500 cursor-pointer "
          @click="handleDelete(i)"
        >
          &times;
        </span>
      </div>

      <div
        v-show="focused"
        class="absolute right-0 left-0 px-4 py-2 flex flex-col gap-2 text-sm bg-blue-100"
        :style="{top: topPosition}"
        @click.stop
      >
        <div
          v-for="dep in departments" :key="dep.name"
          class="flex justify-between"
          @click.stop="handleChaeckbox"
        >
          <label :for="dep.name">{{ dep.name }}</label>
          <input :id="dep.name" v-model="checkedDepartments" type="checkbox" :value="dep">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{departments: IDepartment[]}>(), {
  departments: () => []
})

const checkedDepartments = ref<IDepartment[]>([])
const multiSelectRef = ref()
const topPosition = ref('48px')
const focused = ref(false)

const fixTopPosition = () => {
  topPosition.value = multiSelectRef.value.clientHeight + 4 + 'px'
}

const handleChaeckbox = () => {
  setTimeout(fixTopPosition, 100)
}

const handleDelete = (i: number) => {
  checkedDepartments.value.splice(i, 1)
  setTimeout(fixTopPosition, 100)
}
</script>

<style scoped>

</style>
