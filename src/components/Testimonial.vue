<template>
  <MainContainer class="md:flex justify-between items-center pt-[50px] pb-4 lg:py-[66px] lg:mt-[37px]">
    <!--Left wrapper-->
    <div class="mx-auto md:mx-0 w-[300px] lg:w-[450px] 2xl:w-[490px] 2xl:h-[562px] 2xl:mt-12">
      <img src="../assets/images/testimonia-man-img.png" alt="man-with-camera" class="block">
    </div>
    <!--Right wrapper-->
    <div class="w-[300px] md:w-[350px]  lg:w-[450px] 2xl:w-[538px] mx-auto md:mx-0">
      <!--Section title-->
      <SectionTitle
        class="md:pr-3 mb-2 md:mb-[14px] 2xl:mb-[26px] before:block  before:w-[36px] before:h-1 lg:before:w-[67px]
        lg:before:h-2 before:mb-1 lg:before:mb-3 before:bg-gradient-to-b from-[#FFD482] from-13% to-[#FFBE82] to-119%
        before:rounded"
      >
        A customer said about us:
      </SectionTitle>
      <!--Section card container-->
      <div
        ref="container"
        class="card-container w-full flex gap-1 overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        <!--Section feedbacks card-->
        <div
          v-for="data in cardMetaData" :key="data.author"
          class="w-full p-3 lg:p-[30px] bg-white rounded-[14px] shrink-0 snap-start"
        >
          <p class="text-[10px] md:text-[12px] lg:text-[18px] leading-[1.67] mb-3 lg:mb-[26px]">
            {{ data.text }}
          </p>
          <div class="flex justify-between items-end">
            <div>
              <div class="flex gap-1 mb-2 lg:mb-[17px]">
                <svg v-for="el in 5" :key="el" class="w-[10px] h-[10px] lg:w-[18px] lg:h-[18px]">
                  <use href="../assets/images/symbol-defs.svg#icon-star-svg" />
                </svg>
              </div>
              <h4 class="font-medium text-[14px] lg:text-[20px] leading-[1] pb-2">
                {{ data.author }}
              </h4>
              <h6 class="text-[8px] md:text-[10px] lg:text-[12px] leading-[1] text-secondary">
                {{ data.position }}
              </h6>
            </div>
            <div class="flex gap-2 lg:gap-4 mb-3 md:mb-0">
              <div
                v-for="btn in btns" :key="btn.arrow"
                class="group w-6 h-6 lg:w-[40px] lg:h-[40px] border border-primary rounded-full
                flex justify-center items-center hover:bg-primary focus:bg-primary cursor-pointer"
                @click="btn.handler"
              >
                <svg class="w-[4.5px] h-[9px] fill-primary group-hover:fill-white group-focus:fill-white">
                  <use :href="getSvgUrl(btn.arrow)" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'
import svgSprite from '@/assets/images/symbol-defs.svg'
import { useScrollCarouselState } from '@/hooks/scrollCarouselState'
import { useWindowWidth } from '@/hooks/windowWidth'

const { type } = useWindowWidth()
const { container, previous, next } = useScrollCarouselState(type)

const btns = [
  { arrow: 'left', handler: previous },
  { arrow: 'right', handler: next }
]

const cardMetaData = [
  {
    text: 'Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.',
    author: 'Andrew Sarma',
    position: 'Enterpreneur'
  },
  {
    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad quasi aut atque earum ullam dolores quas itaque delectus excepturi? Natus dolorum laudantium inventore amet voluptatum aut voluptas ducimus.',
    author: 'Brad Bishap',
    position: 'Developer'
  },
  {
    text: 'Repellat, nulla expedita, accusamus tenetur, fugit debitis! Accusantium facilis deleniti molestiae perferendis ratione incidunt quia vero repellat dolores amet cum minima corporis pariatur nam laborum blanditiis.',
    author: 'Don Baker',
    position: 'Lawyer'
  }
]

const getSvgUrl = (name: string) => {
  return (`${svgSprite}#icon-arrow-${name}-svg`)
}
</script>

<style lang="scss" scoped>
  .card-container {
    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
