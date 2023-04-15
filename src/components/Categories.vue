<template>
  <MainContainer class="pt-[50px] lg:pt-[100px] pb-4 lg:pb-8 ">
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
      <div class="flex gap-4 mb-3 md:mb-0">
        <div
          class="ml-auto w-6 h-6 lg:w-[54px] lg:h-[54px] border border-primary rounded-full
          flex justify-center items-center
        hover:bg-primary focus:bg-primary"
          @click="onLeftBtn"
        >
          <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary hover:fill-white focus:fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-arrow-left-svg" />
          </svg>
        </div>
        <div
          class="w-6 h-6 lg:w-[54px] lg:h-[54px] border border-primary rounded-full flex justify-center items-center
        hover:bg-primary focus:bg-primary"
          @click="onRightBtn"
        >
          <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary hover:fill-white focus:fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-arrow-right-svg" />
          </svg>
        </div>
      </div>
    </div>
    <!--Carousel-->
    <div>
      <ul class="flex justify-between gap-[15px] overflow-hidden w-[300px] md:w-auto mx-auto md:mx-0">
        <li v-for="item in listData" :key="item.text" class="w-[90px] md:w-[120px] lg:w-[170px] lg:h-[274px] shrink-0">
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

const listData = [
  { img: Pic1, text: 'Beach' },
  { img: Pic2, text: 'Desert' },
  { img: Pic3, text: 'Mountain' },
  { img: Pic4, text: 'Temple' },
  { img: Pic5, text: 'Tower' },
  { img: Pic6, text: 'Pyramid' }
]

const currentPosition = ref(0)
const onLeftBtn = () => {
  currentPosition.value -= 1
  console.log('click left')
}
const onRightBtn = () => {
  currentPosition.value += 1
  console.log('click right')
}
</script>

<style lang="scss"></style>
