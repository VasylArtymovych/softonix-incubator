<template>
  <div class="">
    <div
      class=" py-6  px-6 mx-auto text-primary md:flex justify-between items-center lg:px-[100px] xl:px-[135px]
      2xl:w-[1440px] relative"
    >
      <div class="flex items-center pr-9 lg:pr-[72px]">
        <svg class="w-[42px] h-[35px] fill-inherit mr-[6px]">
          <use href="../assets/images/symbol-defs.svg#icon-logo-svg" />
        </svg>
        <span class=" font-logo text-xl ">Salty</span>
      </div>

      <button class=" absolute md:hidden top-[24px] right-[24px]" @click="()=> isMenuOpen = !isMenuOpen">
        <svg v-show="!isMenuOpen" class="w-[42px] h-[35px] fill-iherit">
          <use href="../assets/images/symbol-defs.svg#icon-burger-svg" />
        </svg>
        <svg v-show="isMenuOpen" class="w-[42px] h-[35px] fill-iherit">
          <use href="../assets/images/symbol-defs.svg#icon-cross-svg" />
        </svg>
      </button>

      <div
        class="md:flex justify-between items-center grow pb-6 md:pb-0 w-full sm:w-6/12 md:w-auto
        absolute md:static top-[83px] duration-300 ease-in"
        :class="[isMenuOpen ? 'right-0' : 'right-[-100%]']"
      >
        <ul class="md:flex gap-9 text-nav">
          <li
            v-for="name in pageNames" :key="name"
            class=" py-3 md:py-0 text-center md:text-left hover:text-accent hover:bg-gray-ultra-light
            hover:bg-transparent"
            @click="()=> activePage = name"
          >
            <a
              href="#" class="relative"
              :class="{
                'before:absolute before:bottom-[-6px] before:left-0 before:w-[12px] before:h-[2px] before:bg-accent':
                  activePage === name }"
            >{{ name }}</a>
          </li>
        </ul>
        <CustomButton
          class="w-[170px] h-[54px] text-accent border-accent hover:bg-accent hover:text-white mt-3 md:mt-0
          mx-auto md:mx-0"
        >
          Book Now
          <svg class="w-[16px] h-[16px] ml-[6px] fill-current hover:fill-white">
            <use href="../assets/images/symbol-defs.svg#icon-send-svg" />
          </svg>
        </CustomButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import CustomButton from '@/components/Button.vue'

const pageNames = ['Home', 'About us', 'Destination', 'Tours', 'Blog']
const activePage = ref('Home')
const isMenuOpen = ref(false)

</script>

<style lang="scss">
</style>
