<template>
  <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick">
    <el-tab-pane label="Contacts list" name="first">
      <ContactsList />
    </el-tab-pane>

    <el-tab-pane label="Contacts table" name="second">
      <ContactsTable />
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const activeTab = ref<TActiveTab>(localStorage.getItem('currTab') as TActiveTab || 'first')

const handleTabClick = (tab: TabsPaneContext) => {
  activeTab.value = tab.props.name as TActiveTab
  localStorage.setItem('currTab', `${tab.props.name}`)
}
</script>
