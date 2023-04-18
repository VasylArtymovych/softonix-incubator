<template>
  <MainContainer
    class="pt-[50px] pb-4 lg:py-[46px] lg:mt-[28px]"
  >
    <div class="py-[45px] lg:py-[75px] bg-[#FFD482] bg-[url('@/assets/images/news-bg-lines-img.png')] rounded-[30px]">
      <h3
        class="mb-2 lg:mb-4 font-semibold text-[20px] text lg:text-[40px] leading-[1] tracking-[0.0015rem]
          text-center"
      >
        Sign up to our newsletter
      </h3>
      <p
        class="w-[300px] lg:w-[415px] mb-2 lg:mb-[40px] text-[12px] lg:text-[16px] leading-[1.62] text-center mx-auto
        text-secondary "
      >
        Reciev latest news, update, and many other things every week.
      </p>
      <div class="relative w-[300px] lg:w-[450px] mx-auto">
        <input
          type="email"
          placeholder="Enter Your email address"
          class="w-full h-[40px] lg:h-[60px] pl-3 lg:pl-[26px] text-xs lg:text-[16px] bg-white rounded-[12px]
          placeholder:text-[12px] lg:placeholder:text-[14px] placeholder:text-secondary"
        >
        <div
          class="absolute top-[5px] right-[5px] lg:top-[10px] lg:right-3 flex justify-center items-center w-[30px]
          h-[30px] lg:w-[40px] lg:h-[40px] lg:p-3 bg-accent rounded-xl cursor-pointer"
        >
          <svg class="w-[6px] h-[6px] lg:w-[16px] lg:h-[17px] fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-send-svg" />
          </svg>
        </div>
      </div>
    </div>
  </MainContainer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'

</script>

<style lang="scss" scoped>

</style>
