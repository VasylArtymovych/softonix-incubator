<template>
  <SectionTitleAndBtns title="Contacts" class="mb-4" />
  <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick">
    <el-tab-pane label="List" name="first">
      <ContactsList :editContact="editContact" />
    </el-tab-pane>

    <el-tab-pane label="Table" name="second">
      <ContactsTable :editContact="editContact" />
    </el-tab-pane>

    <el-tab-pane label="Empty">
      <el-empty :image-size="200" description="No data yet"/>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import type { TabsPaneContext } from 'element-plus'

const router = useRouter()
const { $routeNames } = useGlobalProperties()

const activeTab = ref<TActiveTab>(localStorage.getItem('activeTab') as TActiveTab || 'first')

const handleTabClick = (tab: TabsPaneContext) => {
  activeTab.value = tab.props.name as TActiveTab
  localStorage.setItem('activeTab', `${tab.props.name}`)
}

const editContact = (contact: IContact) => {
  router.push({ name: $routeNames.upsertContact, params: { contactId: contact.id } })
}

const createNewContact = () => {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

provide('createNewContact', createNewContact)
</script>
