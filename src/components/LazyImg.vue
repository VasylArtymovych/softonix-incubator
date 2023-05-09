<template>
  <div v-intersection>
    <div v-if="isVisible" class="relative w-full h-full bg-gray-300">
      <div
        v-if="!isLoaded" class="skeleton w-full h-full bg-gray-medium"
      />
      <img
        :src="imgSrc"
        lazy
        class="absolute top-0 left-0 object-center object-cover w-full h-full"
        @load="isLoaded = true"
        @error="isError = true"
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

<style lang="scss" scoped>
  .skeleton {
    background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 0%,
      #94a3b8
    );

    animation: waves 1s linear infinite alternate;
  }

  @keyframes waves {
    20% {
      background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 20%,
      #94a3b8
    );
    }
    40% {
      background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 40%,
      #94a3b8
    );
    }
    60% {
      background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 60%,
      #94a3b8
    );
    }
    80% {
      background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 80%,
      #94a3b8
    );
    }
    100% {
      background: linear-gradient(
      to right,
      #94a3b8,
      #cbd5e1 100%,
      #94a3b8
    );
    }
  }
</style>
