<template>
  <MainContainer
    class="md:flex pb-4 lg:pb-[50px] justify-between "
  >
    <!--Left wrapper-->
    <div class=" w-[300px] lg:w-[450px] 2xl:w-[577px] mx-auto md:mx-0  mt-[100px] md:mt-[176px]">
      <!--Main title-->
      <h1
        class="font-logo font-bold text-4xl md:text-[42px] lg:text-[74px] 2xl:text-[5.25rem] leading-[1.02]
        md:mb-[14px] lg:mb-[26px]"
      >
        Discover the Best Lovely Places
      </h1>
      <p
        class="text-xs lg:text-base 2xl:text-lg leading-[1.56]  2xl:max-w-[31.25rem] mb-[14px] lg:mb-[44px]
        text-secondary"
      >
        Plan and book your perfect trip with expert advice, travel tips,
        destination information and inspiration from us.
      </p>
      <!--Booking section-->
      <div
        class="flex justify-between md:w-[17.5rem] lg:w-[100%] 2xl:w-[31.25rem] p-[10px] pl-[15px]
        lg:py-[15px] lg:pl-[28px] lg:pr-[20px] bg-white-light rounded-full
        shadow-[0_28px_56px_-6px_rgba(246, 111, 77, 0.05)]"
      >
        <div class="flex items-center gap-2 lg:gap-6 2xl:gap-[34px]">
          <div class="w-[96px] lg:w-[137px]">
            <p class=" font-medium text-xs lg:text-base 2xl:text-lg leading-[0.94]">Where</p>
            <div class="flex items-center truncate">
              <p class="pr-[4px] lg:pr-3 2xl:pr-[26px] text-[10px] lg:text-xs 2xl:text-xs text-[#9498A4] truncate">
                Center Point, London
              </p>
              <svg class="w-[7px] h-[10px] lg:w-[9px] lg:h-[13px] fill-accent">
                <use href="../assets/images/symbol-defs.svg#icon-location-svg" />
              </svg>
            </div>
          </div>
          <!--Vertical devider-->
          <div class="w-[1px] h-[100%] 2xl:h-[47px] bg-[#9498a44d]" />

          <div class="w-[96px] lg:w-[120px] 2xl:w-[137px]">
            <p class=" font-medium text-xs lg:text-base 2xl:text-lg leading-[0.94]">Date</p>
            <div class="flex items-center truncate">
              <p class="pr-[4px] lg:pr-3 2xl:pr-[26px] text-[10px] lg:text-xs 2xl:text-xs text-[#9498A4] truncate">
                09th March,2021
              </p>
              <svg class="w-[10px] h-[10px] lg:w-[13px] lg:h-[13px] fill-accent">
                <use href="../assets/images/symbol-defs.svg#icon-date-svg" />
              </svg>
            </div>
          </div>
        </div>
        <!--Search icon-->
        <div
          class="flex justify-center items-center w-[40px] h-[40px] lg:w-[46px] lg:h-[46px]
        2xl:w-[54px] 2xl:h-[54px]"
        >
          <img src="../assets/images/search-icon.png" alt="serach-button">
        </div>
      </div>
    </div>
    <!--Right wrapper-->
    <div class="relative mx-auto md:mx-0 mt-[10px] md:mt-[112px] w-[300px] lg:w-[29.37rem]">
      <img src="../assets/images/man.png" alt="man-with-phone">
      <img
        src="../assets/images/orion_navigation-map.png" alt="navigation-map" class="absolute top-0 left-0
       lg:top-[43px] lg:left-[39px]"
      >
      <img src="../assets/images/orion_globe.png" alt="globe" class="absolute top-[28px] lg:top-[105px] right-0">

      <!--Inner Img wrapper-->
      <div
        class=" max-w-[83px] max-h-[100px] lg:max-w-[100px] 2xl:max-w-[133px] lg:max-h-[145px]
        rounded-[10px] absolute left-[-24px] bottom-[24px] lg:left-[-18px] lg:bottom-[47px]
        2xl:left-[-57px] 2xl:bottom-[40px]"
      >
        <img src="../assets/images/sky-wild.png" alt="sky-wild">
        <p
          class=" font-medium text-[7px] lg:text-[10px] 2xl:text-xs text-center truncate leading-[1.25] px-[10px]
          2xl:px-[18px] pt-[11px] pb-[24px] 2xl:pb-[31px] bg-white-light rounded-b-[10px] "
        >
          Dubai moruvumi
        </p>
        <div
          class="flex items-center p-[6px] bg-white-light rounded-[5px] absolute top-[12px] right-[-6px]
        2xl:top-[38px] lg:right-[-5px]"
        >
          <svg class="w-[9px] h-[12px] fill-inherit mr-[5px]">
            <use href="../assets/images/symbol-defs.svg#icon-location-svg" />
          </svg>
          <p class="font-medium text-[10px]">Dubai</p>
        </div>
        <div
          class=" absolute left-0 lg:left-[8px] 2xl:left-[23px] bottom-[-16px] w-[87px] h-[33px]"
        >
          <img
            src="../assets/images/group-avatars.png" alt="girl-logo" class="object-cover"
          >
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'

</script>

<style lang="scss"></style>
