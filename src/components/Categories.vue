<template>
  <MainContainer class="pt-[50px] lg:pt-[18px] pb-4 lg:pb-8 lg:mt-[79px]">
    <!--Categories top wrapper-->
    <div class="md:flex justify-between w-[300px] md:w-full  mx-auto md:mx-0 md:mb-[14px]">
      <!--Categories title wrapper-->
      <div class="lg:pb-[60px]">
        <SectionTitle class="leading-[1] md:mb-[14px] lg:mb-6">
          Categories
        </SectionTitle>
        <p class="text-xs  lg:text-base leading-[1.62] w-[300px] lg:w-[370px] text-secondary">
          Here are lots of interesting destinations to visit, but don’t be confused—they’re
          already grouped by category.
        </p>
      </div>
      <!--Categories btns wrapper-->
      <div class="flex justify-end gap-2 lg:gap-4 mb-3 md:mb-0">
        <div
          v-for="btn in btns" :key="btn.arrow"
          class="group w-6 h-6 lg:w-[54px] lg:h-[54px] border border-primary rounded-full
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
    </div>
    <!--Carousel-->
    <div class="w-[300px] md:w-[100%] mx-auto md:mx-0 overflow-hidden">
      <ul
        class=" w-[3000px] transition-[margin-left] duration-300 ease-linear"
        :style="{'margin-left': position + 'px'}"
      >
        <li
          v-for="item, i in listData" :key="item.text + i"
          class="inline-block w-[90px] md:w-[162px] lg:w-[170px] lg:h-[274px]"
          :style="{'margin-right': margin + 'px'}"
        >
          <div class="pb-2 2xl:pb-[18px]">
            <img :src="item.img" :alt="item.text">
          </div>
          <p class="text-center font-medium text-base md:text-[20px] lg:text-[26px] leading-[1]">{{ item.text }}</p>
        </li>
      </ul>
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'
import Pic1 from '../assets/images/categories-pic-1.png'
import Pic2 from '../assets/images/categories-pic-2.png'
import Pic3 from '../assets/images/categories-pic-3.png'
import Pic4 from '../assets/images/categories-pic-4.png'
import Pic5 from '../assets/images/categories-pic-5.png'
import Pic6 from '../assets/images/categories-pic-6.png'
import svgSprite from '@/assets/images/symbol-defs.svg'
import { useWindowWidth } from '@/hooks/windowWidth'

const listData = [
  { img: Pic1, text: 'Beach' },
  { img: Pic2, text: 'Desert' },
  { img: Pic3, text: 'Mountain' },
  { img: Pic4, text: 'Temple' },
  { img: Pic5, text: 'Tower' },
  { img: Pic6, text: 'Pyramid' },
  { img: Pic1, text: 'Beach' },
  { img: Pic2, text: 'Desert' },
  { img: Pic3, text: 'Mountain' },
  { img: Pic4, text: 'Temple' }
]
const { type } = useWindowWidth()

const width = computed(() => {
  if (type.value === 'sm') {
    return 90
  } else if (type.value === 'md') {
    return 162
  } else {
    return 170
  }
})

const quantity = computed(() => {
  if (type.value === 'sm') {
    return 3
  } else if (type.value === 'md') {
    return 4
  } else {
    return 5
  }
})

const margin = computed(() => {
  if (type.value === 'sm') {
    return 15
  } else if (type.value === 'md') {
    return 20
  } else {
    return 30
  }
})
const position = ref(0)

const onLeftBtn = () => {
  position.value += (width.value + margin.value) * quantity.value
  position.value = Math.min(position.value, 0)
}

const onRightBtn = () => {
  position.value -= (width.value + margin.value) * quantity.value
  position.value = Math.max(position.value, -(width.value + margin.value) * (listData.length - quantity.value))
}

watch(type, () => {
  position.value = 0
})

const btns = [
  { arrow: 'left', handler: onLeftBtn },
  { arrow: 'right', handler: onRightBtn }
]

const getSvgUrl = (name: string) => {
  return (`${svgSprite}#icon-arrow-${name}-svg`)
}

</script>

<style lang="scss">
</style>
