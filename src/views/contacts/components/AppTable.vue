<template>
  <el-table :data="data">
    <el-table-column
      v-for="obj, i in headings" :key="obj.label + i"
      :prop="obj.value"
      :width="obj.width"
      :min-width="obj.minWidth"
      :sortable="obj.sortable || false"
      :fixed="obj.fixed"
    >
      <template #header>
        <slot :name="[obj.label]">
          {{ obj.label }}
        </slot>
      </template>

      <template #default="{row}">
        <slot :name="[obj.value]" :row="row">
          {{ row[obj.value] }}
        </slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
defineProps<{
  data: IContact[]
  headings: any
}>()
</script>
