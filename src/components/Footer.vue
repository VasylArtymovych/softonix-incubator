<template>
  <footer>
    <MainContainer class="md:flex justify-between pt-[50px] pb-4 lg:py-[79px] lg:mt-[15px]">
      <!--Left side wrapper-->
      <div class="flex justify-between mb-2 md:block">
        <Logo class="lg:mb-7" />
        <div>
          <p
            class="md:w-[100px] lg:w-[141px] mb-1 md:mb-2 lg:mb-[40px] text-[10px] leading-3 lg:text-[16px]
            lg:leading-[1.62] text-secondary"
          >
            Enjoy the touring with Salty
          </p>
          <ul class="flex justify-end md:justify-start gap-2 lg:gap-[14px]">
            <li
              v-for="btn in socialBtns" :key="btn.name"
              class="group w-5 h-5 lg:w-8 lg:h-8 border flex justify-center items-center border-secondary
              hover:border-accent rounded-full cursor-pointer"
            >
              <svg class="w-[12px] h-[12px] fill-secondary group-hover:fill-accent group-focus:fill-accent">
                <use :href="getSvgUrl(btn.name)" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
      <!--Right side wrapper-->
      <ul class="flex md:gap-[56px] 2xl:gap-[113px] justify-between">
        <li v-for="item in listData" :key="item.title">
          <h4 class="mb-1 md:mb-3 lg:mb-[22px] text-[12px] lg:text-[18px] leading-[1] font-medium">
            {{ item.title }}
          </h4>
          <p
            v-for="val, i in item.text" :key="i"
            class="text-[9px] md:text-[11px] lg:text-[14px] leading-3 md:leading-4 lg:leading-[2.43] text-footerText"
          >
            {{ val }}
          </p>
        </li>
      </ul>
    </MainContainer>
  </footer>
</template>

<script lang="ts" setup>
import MainContainer from '@/components/Container.vue'
import Logo from './Logo.vue'
import svgSprite from '@/assets/images/symbol-defs.svg'

const socialBtns = [
  { name: 'facebook' },
  { name: 'instagram' },
  { name: 'twitter' }
]

const listData = [
  { title: 'Resources', text: ['Download ', 'Help Center', 'Guide Book', 'App Directory'] },
  { title: 'Travellers', text: ['Why Travellers', 'Enterprice', 'Customer Stories', 'Instagram post'] },
  { title: 'Company', text: ['Travelling', 'About Locato', 'Success', 'Information'] },
  { title: 'Get App', text: ['App Store', 'Google Play Store', '', ''] }

]

const getSvgUrl = (name: string) => {
  return (`${svgSprite}#icon-${name}-svg`)
}
</script>

<style lang="scss" scoped>

</style>
