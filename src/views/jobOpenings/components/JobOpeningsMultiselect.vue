<template>
  <div class="flex justify-between">
    <!--Select-->
    <div
      ref="multiSelectRef"
      class="relative flex grow-0 items-center flex-wrap gap-1 w-[400px] min-h-[46px] border border-gray p-1
      pr-4 rounded"
      @click="focused = !focused"
    >
      <!--Selected options-->
      <div
        v-for="(dep, i) in checkedDepartments" :key="dep"
        class="first:w-[20%] w-[12%] px-2 py-1 flex gap-[2px] flex-grow-0 items-center text-xs font-semibold
        text-blue-500 bg-blue-100"
        @click.stop
      >
        <p class="truncate">{{ dep }}</p>
        <span
          class="relative bottom-1 text-xl text-blue-800 hover:text-red-500 cursor-pointer "
          @click="handleDelete(i)"
        >
          &times;
        </span>
      </div>
      <!--Select arrows -->
      <span v-show="!focused" class="absolute top-1/2 right-1 translate-y-[-12px] text-gray">&#10095;</span>
      <span v-show="focused" class="absolute top-1/2 right-1 translate-y-[-12px] text-gray">&#9650;</span>
      <!--Select options list -->
      <ul
        v-show="focused"
        class="options absolute right-0 left-0 px-1 py-2 h-[350px] overflow-y-auto flex flex-col text-sm
        bg-white rounded-md"
        :style="{top: topPosition}"
        @click.stop
      >
        <li
          v-for="dep in conectedDepartments" :key="dep"
          class="input-container block relative hover:bg-gray-light select-none "
          @click.stop="handleChaeckbox"
        >
          <input
            :id="dep"
            v-model="checkedDepartments"
            type="checkbox"
            :value="dep"
            class="checkbox absolute opacity-0 w-0 h-0 peer"
          >
          <label :for="dep" class="label block w-full py-2 px-4 peer-checked:bg-blue-100">{{ dep }}</label>
          <span class="hidden absolute top-2 right-4 text-base peer-checked:block text-gray">&#10003;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const jobOpeningsStore = useJobOpeningsStore()
const { checkedDepartments, departmentOpenings } = storeToRefs(jobOpeningsStore)

const multiSelectRef = ref()
const topPosition = ref('48px')
const focused = ref(false)

const conectedDepartments = computed(() => {
  if (departmentOpenings.value) {
    return Object.keys(departmentOpenings.value).sort((d1, d2) => d1.localeCompare(d2))
  } else {
    return []
  }
})

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

defineExpose()
</script>

<style lang="scss" scoped>
  .options {
    overscroll-behavior-y: contain;

    &::-webkit-scrollBar {
      display: none;
    };
  }
</style>
