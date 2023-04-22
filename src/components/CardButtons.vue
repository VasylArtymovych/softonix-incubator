<template>
  <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
    <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
      <slot name="left" />
    </div>
    <div
      class="flex items-center justify-center flex-1 py-4 border-l border-gray-ultra-light hover:text-gray
      cursor-pointer"
    >
      <slot name="right" />
    </div>
  </div>
</template>
