<template>
  <div class="flex items-center gap-4">
    <slot name="title">
      <h3 v-if="title" class="font-medium m-0">{{ title }}</h3>
    </slot>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="$router.replace({ name: $routeNames.login })"
    >
      Logout
    </el-button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title?: string
}>()

const createNewContact = inject<() => void>('createNewContact')
</script>

<style scoped>

</style>
