<template>
  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  editContact: (contact: IContact) => void
}>()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

</script>
