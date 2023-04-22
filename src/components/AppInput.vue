<template>
  <input
    :value="modelValue"
    :type="type"
    :placeholder="placeholder"
    class="block w-full"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  >
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  modelValue: string | number
  type?: string
  placeholder?: string
}>(), {
  type: 'text'
})

defineEmits<{
  (e: 'update:modelValue', value: string | number): void
}>()
</script>
