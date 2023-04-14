<template>
  <Container>
    <div>
      <SectionTitle>
        sdf
      </SectionTitle>
      <p>sdfsdf</p>
      <div>
        <CustomButton v-for="text in btnTexts" :key="text">{{ text }}</CustomButton>
      </div>
    </div>
  </Container>
</template>

<script lang="ts" setup>
import Container from '@/components/Container.vue'
import SectionTitle from './SectionTitle.vue'
import CustomButton from '@/components/Button.vue'

const btnTexts = ['London', 'Bangkok', 'England', 'Singapore', 'Italy']
</script>

<style lang="scss" scoped>

</style>
