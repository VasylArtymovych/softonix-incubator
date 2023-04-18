import { computed, onMounted, onUnmounted, ref } from 'vue'

export const useWindowWidth = () => {
  const windowWidth = ref(window.innerWidth)
  const windowWidthWithoutScrollBar = ref(document.documentElement.clientWidth)

  const onWidthChange = () => {
    windowWidth.value = window.innerWidth
    windowWidthWithoutScrollBar.value = document.documentElement.clientWidth
  }

  onMounted(() => {
    window.addEventListener('resize', onWidthChange)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', onWidthChange)
  })

  const width = computed(() => windowWidthWithoutScrollBar.value)

  const type = computed(() => {
    if (windowWidthWithoutScrollBar.value < 768) {
      return 'sm'
    } else if (
      windowWidthWithoutScrollBar.value >= 768 &&
      windowWidthWithoutScrollBar.value < 1024
    ) {
      return 'md'
    } else if (windowWidthWithoutScrollBar.value >= 1024 &&
      windowWidthWithoutScrollBar.value < 1440) {
      return 'lg'
    } else {
      return '2xl'
    }
  })

  return { width, type }
}
