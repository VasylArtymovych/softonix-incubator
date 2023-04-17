<template>
  <MainContainer class=" pt-[50px] pb-4 lg:py-[50px] lg:mt-8">
    <!--Popular title and btns wrapper-->
    <div class="md:flex justify-between items-center w-[300px] md:w-full  mx-auto md:mx-0 mb-3 lg:mb-6 2xl:mb-[35px]">
      <SectionTitle class="md:w-[300px] lg:w-[400px]">
        Find Popular Destination
      </SectionTitle>
      <!--Popular btns wrapper-->
      <div class="flex justify-end gap-2 lg:gap-4">
        <div
          v-for="btn in btns" :key="btn.arrow"
          class=" w-6 h-6 lg:w-[54px] lg:h-[54px] border border-primary rounded-full
                flex justify-center items-center hover:bg-primary focus:bg-primary"
          @click="btn.handler"
        >
          <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-primary hover:fill-white focus:fill-white">
            <use :href="getSvgUrl(btn.arrow)" />
          </svg>
        </div>
      </div>
    </div>
    <ul class="flex gap-[26px] 2xl:gap-[30px] overflow-hidden w-[300px] md:w-auto mx-auto md:mx-0">
      <li
        v-for="card in cardsData" :key="card.title" class="w-[300px] 2xl:w-[386px] 2xl:h-[440px] p-3 shrink-0 bg-white
      rounded-2xl"
      >
        <img :src="card.img" :alt="card.title" class="mb-3 lg:mb-6">
        <div class="p-1 lg:p-3">
          <h4 class="font-semibold text-[18px] 2xl:text-[24px] 2xl:leading-[1] 2xl:mb-[14px] truncate">
            {{ card.title }}
          </h4>
          <p class="text-[10px] lg:text-[14px] 2xl:leading-[1] mb-3 2xl:mb-[15px] text-secondary truncate">
            {{ card.text }}
          </p>
          <div class=" flex justify-between items-center 2xl:py-3">
            <p class="text-[12px] lg:text-[16px] leading-[1.25] text-secondary">
              <span class="font-semibold text-[16px] lg:text-[24px] leading-[1] text-primary">
                {{ card.price }}
              </span>
              /Person
            </p>
            <CustomButton
              class="text-[10px] lg:text-[14px] leading-[1] border py-3 px-4 hover:bg-primary hover:text-white
            focus:bg-primary focus:text-white"
            >
              Book Now
            </CustomButton>
          </div>
        </div>
      </li>
    </ul>
  </MainContainer>
</template>

<script setup lang="ts">
import MainContainer from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'
import CustomButton from '@/components/Button.vue'
import img1 from '@/assets/images/popular-img-1.png'
import img2 from '@/assets/images/popular-img-2.png'
import img3 from '@/assets/images/popular-img-3.png'
import svgSprite from '@/assets/images/symbol-defs.svg'

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

const cardsData = [
  {
    img: img1,
    title: 'Mountain Hiking Tour',
    text: 'Mountain Hiking Tour',
    price: '$89'
  },
  {
    img: img2,
    title: 'Machu Picchu, Peru',
    text: 'Machu Picchu, Peru',
    price: '$99'
  },
  {
    img: img3,
    title: 'The Grand Canyon, Arizona',
    text: 'Mountain Hiking Tour',
    price: '$70'
  },
  {
    img: img1,
    title: 'Some title of Card 4',
    text: 'Mountain Hiking Tour',
    price: '$89'
  },
  {
    img: img2,
    title: 'Some title of Card 5',
    text: 'Machu Picchu, Peru',
    price: '$99'
  },
  {
    img: img3,
    title: 'Some title of Card 6',
    text: 'Mountain Hiking Tour',
    price: '$70'
  }
]
</script>

<style lang="scss" scoped>

</style>
