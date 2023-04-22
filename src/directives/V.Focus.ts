import type { ObjectDirective } from 'vue'

type TFocusDirective = ObjectDirective & {name: string}
export default {
  name: 'foceu',

  mounted: (el: HTMLInputElement) => el.focus()
} as TFocusDirective
