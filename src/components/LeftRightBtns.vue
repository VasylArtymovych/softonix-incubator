<template>
  <div class="flex gap-2 lg:gap-4 mb-3 md:mb-0">
    <div
      v-for="btn in btns" :key="btn.arrow"
      class="group w-6 h-6 lg:w-[40px] lg:h-[40px] border border-primary rounded-full
            flex justify-center items-center hover:bg-primary focus:bg-primary"
      @click="btn.handler"
    >
      <svg class="w-[4.5px] h-[9px] fill-primary group-hover:fill-white group-focus:fill-white">
        <use :href="getSvgUrl(btn.arrow)" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import svgSprite from '@/assets/images/symbol-defs.svg'

// interface IProps {
//   onLeftBtn: () => void
// }

const onLeftBtn = () => {
  console.log('click left')
}
const onRightBtn = () => {
  console.log('click right')
}
const btns = [
  { arrow: 'left', handler: onLeftBtn },
  { arrow: 'right', handler: onRightBtn }
]

const getSvgUrl = (name: string) => {
  return (`${svgSprite}#icon-arrow-${name}-svg`)
}

</script>

<style lang="scss" scoped>

</style>
