<template>
  <div class="flex justify-end gap-2 lg:gap-4">
    <div
      v-for="btn in btns" :key="btn.arrow"
      class="group w-6 h-6 md:w-[40px] md:h-[40px] lg:w-[54px] lg:h-[54px] border border-primary rounded-full
        flex justify-center items-center hover:bg-primary focus:bg-primary cursor-pointer"
      @click="btn.handler"
    >
      <svg
        class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary group-hover:fill-white
          group-focus:fill-white"
      >
        <use :href="getSvgUrl(btn.arrow)" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import svgSprite from '@/assets/images/symbol-defs.svg'

interface IProps {
  onLeftBtn: () => void
  onRightBtn: () => void
}

const props = defineProps<IProps>()

const btns = [
  { arrow: 'left', handler: props.onLeftBtn },
  { arrow: 'right', handler: props.onRightBtn }
]

const getSvgUrl = (name: string) => {
  return (`${svgSprite}#icon-arrow-${name}-svg`)
}

</script>

<style lang="scss" scoped>

</style>
