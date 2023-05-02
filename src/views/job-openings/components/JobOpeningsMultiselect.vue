<template>
  <div class="mb-1">
    <h3 class="text-sm font-medium text-gray">Departments:</h3>
    <!--Select-->
    <div
      ref="multiSelectRef"
      v-click-outside="()=>(focused = false)"
      class="relative flex grow-0 items-center flex-wrap gap-1 w-full min-h-[36px] border
      border-gray-medium p-1 pr-4 rounded hover:border-lightBlue-400 cursor-pointer"
      @click="focused = !focused"
    >
      <!--Selected options-->
      <div
        v-for="(dep, i) in selectedDepartments" :key="dep"
        class="first:w-[18%] w-[10%] p-1 flex gap-[2px] flex-grow-0 items-center text-xs
        font-semibold text-blue-500 bg-blue-100 rounded"
        @click.stop
      >
        <p class="truncate p-0 m-0">{{ dep }}</p>
        <span
          class="relative bottom-1 text-[20px] text-blue-800 hover:text-red-500 cursor-pointer"
          @click="handleDelete(i)"
        >
          &times;
        </span>
      </div>

      <!--Select arrow-->
      <div
        class="absolute top-1/2 right-1 translate-y-[-12px] text-gray-medium 'rotate-90'"
        :class="{'-rotate-90': focused}"
      >
        <span>&#10095;</span>
      </div>

      <!--Select options list -->
      <ul
        v-show="focused"
        class="options absolute right-0 left-0 px-1 py-2 h-[350px] overflow-y-auto flex flex-col text-sm
        font-medium text-trueGray-500 bg-gray-light rounded-md border border-x-gray-medium"
        :style="{top: topPosition}"
        @click.stop
      >
        <li
          v-for="depName in conectedDepartmentNames" :key="depName"
          class="input-container block relative hover:bg-slate-200 select-none"
          @click.stop="handleCheckbox"
        >
          <input
            :id="depName"
            v-model="selectedDepartments"
            type="checkbox"
            :value="depName"
            class="checkbox absolute opacity-0 w-0 h-0 peer"
          >
          <label
            :for="depName"
            class="label block w-full py-2 px-4 rounded peer-checked:bg-blue-100 peer-checked:text-black cursor-pointer"
          >
            {{ depName }}
          </label>

          <span class="hidden absolute top-2 right-4 text-base peer-checked:block text-gray">&#10003;</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ObjectDirective, DirectiveBinding } from 'vue'

const props = defineProps<{
  departmentsJobOpenings: IDepartmentOpenings
}>()

const jobOpeningsStore = useJobOpeningsStore()
const { selectedDepartments } = storeToRefs(jobOpeningsStore)

const multiSelectRef = ref()
const topPosition = ref('38px')
const focused = ref(false)

const conectedDepartmentNames = computed(() => {
  return Object.keys(props.departmentsJobOpenings).sort((d1, d2) => d1.localeCompare(d2))
})

const fixTopPosition = () => {
  topPosition.value = multiSelectRef.value.clientHeight + 4 + 'px'
}

const handleCheckbox = () => {
  setTimeout(fixTopPosition, 100)
}

const handleDelete = (i: number) => {
  selectedDepartments.value.splice(i, 1)
  setTimeout(fixTopPosition, 100)
}

const vClickOutside: ObjectDirective = {
  mounted (el, binding: DirectiveBinding) {
    el.clickOutside = function (e: Event) {
      if (!(el === e.target || el.contains(e.target))) {
        binding.value(e)
      }
    }
    document.addEventListener('click', el.clickOutside)
  },

  unmounted (el) {
    document.removeEventListener('click', el.clickOutside)
  }
}
</script>

<style lang="scss" scoped>
  .options {
    overscroll-behavior-y: contain;

    &::-webkit-scrollBar, {
      display: block;
      width: 5px;
      color: transparent;
    };

    &::-webkit-scrollbar-track {
      display: none;
    }

    &::-webkit-scrollbar-thumb {
      background: #bdbbbb;
      border-radius: 20px;
    }
  }
</style>
