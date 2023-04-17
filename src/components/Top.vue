<template>
  <MainContainer class="pt-[50px] pb-4 lg:py-[37px] lg:mt-[53px]">
    <!--Top title and btns wrapper-->
    <div class="w-[300px] md:w-[390px] mx-auto lg:mb-[51px]">
      <SectionTitle class="mb-2 lg:mb-4">
        Top Destinations
      </SectionTitle>
      <p class="text-xs lg:text-[16px] leading-[1] text-secondary mb-3 lg:mb-7">
        Sost Brilliant reasons Entrada should be your one-stop-shop!
      </p>
      <div class="flex gap-1 md:gap-[14px]">
        <CustomButton
          v-for="text in btnTexts" :key="text" class="py-1  md:py-[10px] px-2 md:px-5 text-[10px] md:text-[14px]
          leading-[1] font-nav hover:bg-primary hover:text-white focus:bg-primary focus:text-white"
        >
          {{ text }}
        </CustomButton>
      </div>
    </div>

    <!-- <ul class="flex flex-wrap">
      <li v-for="(img, i ) in images" :key="img" class="shrink-0">
        <img :src="img" :alt="'picture' + i" class="">
      </li>
    </ul> -->
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import CustomButton from '@/components/Button.vue'
import img1 from '@/assets/images/top-img-1.png'
import img2 from '@/assets/images/top-img-2.png'
import img3 from '@/assets/images/top-img-3.png'
import img4 from '@/assets/images/top-img-4.png'
import img5 from '@/assets/images/top-img-5.png'
import img6 from '@/assets/images/top-img-6.png'

const btnTexts = ['London', 'Bangkok', 'England', 'Singapore', 'Italy']
const images = [img1, img2, img3, img4, img5, img6]
</script>

<style lang="scss" scoped>
 .container{

 }
</style>
