<template>
  <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick">
    <Transition mode="out-in">
      <el-tab-pane label="Contacts list" name="first">
        <ContactsList />
      </el-tab-pane>
    </Transition>

    <Transition mode="out-in">
      <el-tab-pane label="Contacts table" name="second">
        <ContactsTable />
      </el-tab-pane>
    </Transition>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const activeTab = ref<TActiveTab>(localStorage.getItem('activeTab') as TActiveTab || 'first')

const handleTabClick = (tab: TabsPaneContext) => {
  activeTab.value = tab.props.name as TActiveTab
  localStorage.setItem('activeTab', `${tab.props.name}`)
}
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-active {
  transition-delay: 0.55s;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
