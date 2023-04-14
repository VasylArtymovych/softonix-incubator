<template>
  <MainContainer class="lg:pt-[100px] lg:pb-8 ">
    <!--Categories top wrapper-->
    <div class="flex justify-between">
      <!--Categories title wrapper-->
      <div class="2xl:pb-[60px]">
        <SectionTitle class="leading-[1] 2xl:pb-6">
          Categories
        </SectionTitle>
        <p class="2xl:text-base leading-[1.62] 2xl:w-[370px]">
          Here are lots of interesting destinations to visit, but don’t be confused—they’re
          already grouped by category.
        </p>
      </div>
      <!--Categories btns wrapper-->
      <div class="flex gap-4">
        <div
          class="2xl:w-[54px] 2xl:h-[54px] border border-primary rounded-full flex justify-center items-center
        hover:bg-primary focus:bg-primary"
        >
          <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary hover:fill-white focus:fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-arrow-left-svg" />
          </svg>
        </div>
        <div
          class="2xl:w-[54px] 2xl:h-[54px] border border-primary rounded-full flex justify-center items-center
        hover:bg-primary focus:bg-primary"
        >
          <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary hover:fill-white focus:fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-arrow-right-svg" />
          </svg>
        </div>
      </div>
    </div>
    <ul class="flex justify-between ">
      <li v-for="item in listData" :key="item.text" class="2xl:w-[170px] 2xl:h-[274px]">
        <div class="2xl:pb-[18px]">
          <img :src="item.img" :alt="item.text">
        </div>
        <p class="text-center font-medium text-[26px] leading-[1]">{{ item.text }}</p>
      </li>
    </ul>
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
</script>

<style lang="scss"></style>
