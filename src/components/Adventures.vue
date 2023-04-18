<template>
  <MainContainer class="md:flex justify-between pb-4 pt-[50px] lg:py-[50px] lg:mt-[58px]">
    <!--Left wrapper-->
    <div class="relative w-[300px] lg:w-[450px] 2xl:w-[490px] 2xl:h-[562px] mx-auto md:mx-[36px] lg:mx-0 mb-5">
      <img src="../assets/images/features-man-with-camera.png" alt="man-with-camera" class="block">
      <!--Inner left wrapper-->
      <div
        class="absolute left-[-40px] bottom-[50px] 2xl:left-[-65px] 2xl:bottom-[85px] 2xl:w-[140px] 2xl:h-[218px]
        px-2 2xl:px-[14px] py-3 2xl:py-[20px] bg-white rounded-xl"
      >
        <img
          src="../assets/images/features-location-star.png" alt="location-point"
          class="block w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] mx-auto mb-3 2xl:mb-[30px]"
        >
        <p class="fon-nav font-semibold text-base lg:text-[30px] text-center text-accent lg:mb-2">
          600%
        </p>
        <p class="text-xs lg:text-[19px] text-center text-gray ">
          Destinations
        </p>
      </div>
      <!--Inner bottom wrapper-->
      <div
        class="absolute right-0 2xl:right-[16px] bottom-0 lg:bottom-[-20px] 2xl:w-[171px] 2xl:h-[92px] p-2 lg:p-[20px]
       bg-white rounded-xl"
      >
        <div class="flex items-center mb-[2px] font-nav">
          <svg class="w-3 lg:w-[22px] h-3 lg:h-[22px] fill-accent mr-2 lg:mr-3">
            <use href="../assets/images/symbol-defs.svg#icon-signal-svg" />
          </svg>
          <p class=" font-semibold text-base lg:text-[28px] leading-[1.07]">
            5000+
          </p>
        </div>
        <p class="text-[8px] lg:text-xs text-gray-medium text-center">
          Customars
        </p>
      </div>
    </div>
    <!--Right wrapper-->
    <div class="w-[300px] lg:w-[450px] 2xl:w-[538px] md:mt-9 lg:mt-[60px] mx-auto md:mx-0 ">
      <!--Pre title-->
      <h4 class="font-semibold text-[14px] lg:text-[20px] leading-[1] tracking-widest text-accent mb-2 2xl:mb-5">
        Our Experience
      </h4>
      <!--Section title-->
      <SectionTitle class="md:mb-[14px] 2xl:mb-5">
        Our Stories Have Adventures
      </SectionTitle>
      <p class=" text-xs lg:text-base leading-[1.62] mb-3 md:mb-[14px] lg:mb-10 2xl:max-w-[460px] text-secondary">
        We are experienced in bringing adventures to stay their journey, with all outdoor destinations
        in the world as our specialties. Start your adventure now! Nature has already called you!
      </p>
      <!--Bottom section-->
      <div class="flex justify-between">
        <div
          v-for="item in bottomText" :key="item.title" class="w-[90px] lg:w-[130px] 2xl:w-[166px]
          2xl:h-[178px] p-3 lg:p-[26px] pt-4 lg:pt-[30px] rounded-[14px] bg-white"
        >
          <p
            class="font-semibold text-[20px] lg:text-[36px] 2xl:text-[46px] leading-[1] text-accent mb-2 lg:mb-3
            2xl:mb-[18px]"
          >
            {{ item.title }}
          </p>
          <p class="text-xs lg:text-base 2xl:text-[21px] leading-[1.38] text-gray">
            {{ item.text }}
          </p>
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
