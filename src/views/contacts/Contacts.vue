<template>
  <SectionTitleAndBtns title="Contacts" class="mb-4" />

  <AppTabs
    v-model="activeTab"
    type="border-card"
    :tabs="tabs"
    isTopMargin
    @update:model-value="handleTabClick"
  >
    <template #cards>
      <ContactsList :editContact="editContact" />
    </template>

    <template #table>
      <ContactsTable :editContact="editContact" />
    </template>

    <template #empty>
      <el-empty :image-size="200" description="No data yet" />
    </template>
  </AppTabs>
</template>

<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const tabs = [
  { name: 'cards', label: 'Cards' },
  { name: 'table', label: 'Table' },
  { name: 'empty', label: 'Empty' },
  { name: 'test', label: 'Test', hidden: true }
]

const activeTab = ref<TActiveTab>(localStorage.getItem('activeTab') as TActiveTab || 'cards')

const handleTabClick = (tab: TActiveTab) => {
  activeTab.value = tab
  localStorage.setItem('activeTab', `${tab}`)
}

const editContact = (contact: IContact) => {
  router.push({ name: $routeNames.upsertContact, params: { contactId: contact.id } })
}

const createNewContact = () => {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

provide('createNewContact', createNewContact)
</script>
