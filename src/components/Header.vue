<template>
  <div class="w-full bg-blue-100 drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)]">
    <div class="max-w-[1440px] mx-auto p-6">
      <nav class="flex gap-5 h-full items-center text-gray font-bold">
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
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
  .router-link-active {
    color: orange;
  }

  .router-link-active::after{
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: orange;
  }
</style>
