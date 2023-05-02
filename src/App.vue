<template>
  <Header />
  <div class="max-w-[1440px] mx-auto px-6 app-container">
    <RouterView #default="{Component}">
      <Transition name="app">
        <component :is="Component" :key="$route.path.split('/')[0]" />
      </Transition>
    </RouterView>
  </div>
</template>

<style lang="scss" scoped>
  .app-container{
    min-height: calc(100vh - 73px);
  }

.app-enter-active,
.app-leave-active {
  transition: opacity 0.5s ease;
}
.app-enter-from,
.app-leave-to {
  opacity: 0;
}
</style>
