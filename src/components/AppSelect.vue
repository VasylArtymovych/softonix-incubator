<template>
  <select
    :value="modelValue"
    @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
  >
    <option disabled value="">{{ defaultOpt }}</option>
    <option v-for="opt in options" :key="opt" :value="opt">{{ opt }}</option>
  </select>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  options: string[]
  modelValue: string
  defaultOpt: string
}>(), {
  options: () => []
})

defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()
</script>
