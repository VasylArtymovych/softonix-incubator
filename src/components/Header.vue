<template>
  <div class="w-full h-20 p-5 bg-black mb-5">
    <nav class="flex gap-5 h-full items-center text-white ">
      <RouterLink
        :to="{name: $routeNames.contacts }"
        class="cursor-pointer"
      >
        Contacts
      </RouterLink>

      <RouterLink
        :to="{name: $routeNames.jobOpenings}"
        class="cursor-pointer"
      >
        Job Openings
      </RouterLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
const { $routeNames } = useGlobalProperties()

</script>

<style scoped>
  .router-link-exact-active {
    color: orange;
  }
</style>
