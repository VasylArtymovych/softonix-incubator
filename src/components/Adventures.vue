<template>
  <MainContainer class="flex justify-between 2xl:pb-[58px] 2xl:pt-[106px]">
    <!--Left wrapper-->
    <div class="relative 2xl:w-[490px] 2xl:h-[562px] 2xl:mt-12">
      <img src="../assets/images/features-man-with-camera.png" alt="man-with-camera" class="block">
      <!--Inner left wrapper-->
      <div
        class="absolute 2xl:left-[-65px] 2xl:bottom-[85px] 2xl:w-[140px] 2xl:h-[218px]  2xl:px-[14px]  2xl:py-[20px]
       bg-white rounded-xl"
      >
        <img
          src="../assets/images/features-location-star.png" alt="location-point" class="block 2xl:w-[80px] 2xl:h-[80px]
        mx-auto 2xl:mb-[30px] \"
        >
        <p class="fon-nav font-semibold 2xl:text-[30px] text-center text-accent mb-2">
          600%
        </p>
        <p class="2xl:text-[19px] text-center text-gray ">
          Destinations
        </p>
      </div>
      <!--Inner bottom wrapper-->
      <div
        class="absolute 2xl:right-[30px] 2xl:bottom-[-22px] 2xl:w-[171px] 2xl:h-[92px] 2xl:p-[20px]
       bg-white rounded-xl"
      >
        <div class="flex items-center mb-[2px] font-nav">
          <svg class="w-[22px] h-[22px] fill-accent mr-3">
            <use href="../assets/images/symbol-defs.svg#icon-signal-svg" />
          </svg>
          <p class=" font-semibold 2xl:text-[28px] leading-[1.07]">
            5000+
          </p>
        </div>
        <p class="2xl:text-xs text-gray-medium text-center">
          Customars
        </p>
      </div>
    </div>
    <!--Right wrapper-->
    <div class="w-[538px] 2xl:mt-[110px]">
      <!--Pre title-->
      <h4 class="font-semibold text-[20px] leading-[1] tracking-widest text-accent 2xl:pb-5">
        Our Experience
      </h4>
      <!--Section title-->
      <SectionTitle class=" 2xl:pb-5">
        Our Stories Have Adventures
      </SectionTitle>
      <p class="text-base leading-[1.62] 2xl:mb-10 2xl:max-w-[460px] text-secondary">
        We are experienced in bringing adventures to stay their journey, with all outdoor destinations
        in the world as our specialties. Start your adventure now! Nature has already called you!
      </p>
      <!--Bottom section-->
      <div class="flex justify-between">
        <div
          v-for="item in bottomText" :key="item.title" class="2xl:w-[166px] 2xl:h-[178px] 2xl:p-[26px] 2xl:pt-[30px]
        rounded-[14px] bg-white"
        >
          <p class="font-semibold 2xl:text-[46px] leading-[1] text-accent 2xl:mb-[18px]">{{ item.title }}</p>
          <p class="2xl:text-[21px] leading-[1.38] text-gray">{{ item.text }}</p>
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'

const bottomText = [
  { title: '12K+', text: 'Succes Journey' },
  { title: '16+', text: 'Awards Winning' },
  { title: '20+', text: 'Years Of Experience' }
]
</script>

<style lang="scss"></style>
