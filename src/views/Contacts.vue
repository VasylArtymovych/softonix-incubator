<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>
  </div>

  <div class="flex gap-4 mt-4">
    <AppSelect
      v-model="optToSort"
      :options="sortOptions"
      :defaultOpt="'Sort by name'"
    />
    <AppInput
      v-model="searchQuery" placeholder="search"
    />
    <AppSelect
      v-model="selectedRole"
      :options="roles"
      :defaultOpt="'Select role'"
    />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in searchedSelectedSortedContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useContactsStore } from '@/store'
import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import AppInput from '@/components/AppInput.vue'
import AppSelect from '@/components/AppSelect.vue'

const router = useRouter()

const contactsStore = useContactsStore()

const {
  searchQuery, selectedRole, roles, optToSort,
  sortOptions, searchedSelectedSortedContacts
} = storeToRefs(contactsStore)

const { updateContact, deleteContact } = contactsStore

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
