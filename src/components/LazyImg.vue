<template>
  <div v-intersection class="max-w-[350px] md:max-w-none h-[220px]">
    <div v-if="isVisible" class="w-full h-full bg-gray-300">
      <div v-if="!isLoaded" class="w-full h-full bg-blue-300 text-center">Skeleton</div>
      <img
        :src="imgSrc"
        lazy
        class="object-center object-cover"
        @load="onLoad"
        @error="onError"
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import placeholder from '@/assets/images/default.jpeg'

const props = defineProps<{
  src: string
  alt?: string
}>()

const isVisible = ref(false)
const isLoaded = ref(false)
const isError = ref(false)

const imgSrc = computed(() => (isError.value ? placeholder : props.src))

const onLoad = () => {
  console.log('leaded')
  isLoaded.value = true
}
const onError = () => {
  console.log('Error')
  isLoaded.value = true
  isError.value = true
}

const vIntersection = {
  mounted (el: HTMLDivElement) {
    const options = {
      root: null,
      rootMargin: '300px',
      threshold: 0
    }

    const callback = ([entry]: any) => {
      if (entry.isIntersecting) {
        isVisible.value = true
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}
</script>
