import { ref } from 'vue'
import type { Ref } from 'vue'

export const useScrollCarouselState = (type: Ref<string>) => {
  const container = ref<HTMLDivElement | null>(null)
  const scrollValue = computed(() => {
    if (type.value === 'sm') {
      return 300
    } else if (type.value === 'md') {
      return 350
    } else if (type.value === 'lg') {
      return 450
    } else {
      return 538
    }
  })

  const previous = () => {
    container.value && container.value.scrollBy(-scrollValue.value, 0)
  }
  const next = () => {
    container.value && container.value.scrollBy(scrollValue.value, 0)
  }

  return { container, previous, next }
}
