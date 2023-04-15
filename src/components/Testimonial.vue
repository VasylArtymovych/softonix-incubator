<template>
  <MainContainer class="md:flex justify-between pb-4 2xl:pb-[58px] pt-[50px] 2xl:pt-[106px]">
    <!--Left wrapper-->
    <div class="mx-auto w-[300px] lg:w-[450px] 2xl:w-[490px] 2xl:h-[562px] 2xl:mt-12">
      <img src="../assets/images/testimonia-man-img.png" alt="man-with-camera" class="block">
    </div>
    <!--Right wrapper-->
    <div class="w-[300px] lg:w-[450px] 2xl:w-[538px] mt-4 md:mt-9 mx-auto md:mx-0 2xl:mt-[110px]">
      <!--Section title-->
      <SectionTitle
        class="title md:mb-[14px] 2xl:mb-5 before:block  before:w-[36px] before:h-1 lg:before:w-[67px] lg:before:h-2
        before:mb-1 lg:before:mb-3 before:bg-gradient-to-b from-[#FFD482] from-13% to-[#FFBE82] to-119% before:rounded"
      >
        A customer said about us:
      </SectionTitle>

      <!--Bottom section-->
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'
</script>

<style lang="scss" scoped>
  // .title::before {
  //   content: " ";
  //   display: block;
  //   width: ;
  // }
</style>
