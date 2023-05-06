<template>
  <el-tabs
    :model-value="modelValue"
    :type="type || 'card'"
    :class="{'mt-6': isTopMargin}"
    @tab-click="$emit('update:modelValue', $event.paneName)"
  >
    <el-tab-pane
      v-for="tab in filteredTabs"
      :key="tab.name"
      :class="tabPaneClass"
      lazy
      :label="tab.label"
      :name="tab.name"
    >
      <slot :name="tab.name" :tab="tab" />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tabs: ITab[]
  modelValue: string
  type?: TTabType
  isTopMargin?: boolean
  tabPaneClass?: any
}>(), {
  tabs: () => ([])
})

defineEmits(['update:modelValue'])

const filteredTabs = computed(() => (props.tabs.filter(item => !item.hidden)))
</script>
