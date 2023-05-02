<template>
  <Header />
  <div class="max-w-[1440px] mx-auto px-6 app-container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
  .app-container{
    min-height: calc(100vh - 73px);
  }
</style>
