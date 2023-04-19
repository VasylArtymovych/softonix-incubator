<template>
  <MainContainer class="pt-[50px] pb-4 lg:py-[37px] lg:mt-[53px]">
    <!--Top title and btns wrapper-->
    <div class="flex flex-col items-center w-[300px] md:w-[390px] lg:w-[527px] mx-auto mb-2 md:mb-4 lg:mb-[51px]">
      <SectionTitle class="mb-2 lg:mb-4 leading-[1.18]">
        Top Destinations
      </SectionTitle>
      <p class="text-xs lg:text-[16px] leading-[1] text-secondary mb-3 lg:mb-7 text-center">
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

    <ul class="img-list">
      <li v-for="(img, i) in images" :key="img" class="img-list__item rounded-[20px] overflow-hidden">
        <img :src="img" :alt="'picture' + i" class="w-full h-full object-fill ">
      </li>
    </ul>
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
.img-list {
  display: grid;
  grid-template-columns: 120px 160px;
  grid-template-rows: 100px 100px 130px 140px;
  column-gap: 20px;
  row-gap: 10px;
  width: 300px;
  margin: 0 auto;
}
.img-list__item:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
}
.img-list__item:nth-child(3) {
    grid-column: 1 / 3;
    grid-row: 3 / 3;
}
.img-list__item:nth-child(4) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}
.img-list__item:nth-child(5) {
    grid-column: 1 / 2;
    grid-row: 4;
}
.img-list__item:nth-child(6) {
    grid-column: 2 / 3;
    grid-row: 4;
}
.img-list__item {
  transition: transform 0.3s ease-in-out;
}
.img-list__item:hover {
  transform: perspective(400px) rotateY(7deg)
}
// .img-list__item {
//   animation: rotateY 3000ms infinite alternate backwards ease-in-out 1000ms;
// }

@media (min-width: 768px) {
  .img-list {
    grid-template-columns:  1fr 2fr 1fr 1fr;
    grid-template-rows: repeat(2, 150px);
    width: 100%;
    margin: 0;
  }
  .img-list__item:nth-child(3) {
    grid-column: 3 / 5;
    grid-row: 1;
  }
  .img-list__item:nth-child(5) {
    grid-column: 3 / 4;
    grid-row: 2;
  }
  .img-list__item:nth-child(6) {
    grid-column: 4 / 5;
    grid-row: 2;
  }
}

@media (min-width: 1024px) {
  .img-list {
    grid-template-rows: repeat(2, 250px);
  }
}

@media (min-width: 1440px) {
  .img-list {
    grid-template-columns: 270px 370px 170px 270px;
    grid-template-rows: repeat(2, 250px);
    column-gap: 30px;
    row-gap: 26px;
  }
  .img-list__item:nth-child(2) {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  .img-list__item:nth-child(3) {
    grid-column: 3 / 5;
  }
  .img-list__item:nth-child(5),
  .img-list__item:nth-child(6) {
    height: 263px;
    position: relative;
    top: -13px;
  }
}

@keyframes rotateY {
  0% {
    transform: perspective(400px) rotateY(7deg);
  }

  100% {
    transform: perspective(400px) rotateY(-7deg);
  }
}

</style>
