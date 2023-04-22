<template>
  <button
    class="inline-flex justify-center items-center p-2 bg-blue-500 hover:bg-blue-700 text-white font-medium
    rounded"
  >
    <div v-if="$slots.icon" class="mr-2">
      <slot name="icon" />
    </div>

    <slot />
  </button>
</template>
