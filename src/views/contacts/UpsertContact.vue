<template>
  <div class="flex justify-center">
    <el-card class="w-[350px]">
      <template #header>
        <h2 class="font-semibold">{{ cardTitle }}</h2>
      </template>

      <div class="space-y-4">
        <el-input v-model="contactForm.name" placeholder="Name" clearable autofocus />
        <el-input
          v-model="contactForm.description"
          :min="10"
          placeholder="Please input"
          clearable
        />
        <el-input v-model.trim="contactForm.image" placeholder="Image Link" />
      </div>

      <div class="mt-4 flex">
        <el-button :type="$elComponentType.primary" class="flex-auto" @click="$router.back">
          Cancel
        </el-button>
        <el-button v-if="currentContact" :type="$elComponentType.primary" class="flex-auto" @click="onDelete">
          Delete
        </el-button>
        <el-button :type="$elComponentType.primary" class="flex-auto" :disabled="!isFormValid" @click="onSave">
          <template #icon>
            <IconPlus class="w-5 h-5" />
          </template>
          Save
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter()
const route = useRoute()

const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { addContact, updateContact, deleteContact } = contactsStore

const currentContact = computed(() => contacts.value.find(c => c.id === +route.params.contactId))

const cardTitle = computed(() => {
  return currentContact.value ? 'Edit Contact' : 'New Contact'
})

const contactForm = reactive<IContact>(currentContact.value
  ? { ...currentContact.value }
  : {
    id: contacts.value.length + 1,
    name: '',
    description: '',
    image: ''
  })

const isFormValid = computed(() => {
  const { image, ...contact } = contactForm
  return Object.values(contact).every(c => !!c)
})

function onDelete () {
  deleteContact(currentContact.value as IContact)
  router.replace({ name: $routeNames.contacts })
}

function onSave () {
  if (currentContact.value) {
    updateContact(contactForm)
  } else {
    addContact(contactForm)
  }
  router.push({ name: $routeNames.contacts })
}
</script>
