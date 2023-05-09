<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="logout"
    >
      Logout
    </el-button>
  </div>

  <AsyncExample v-if="!loading" />

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
  <div>
    <div v-for="item in 3" :key="item" class="w-[350px] h-[220px] bg-slate-300 mb-3">{{ item }}</div>
    <LazyImg
      src="	https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
      alt="image"
      class="w-full h-full"
    />
    <div v-for="item in 3" :key="item" class="w-[350px] h-[220px] bg-slate-300 mb-3">{{ item }}</div>

    <div v-for="item in 3" :key="item" class="w-[350px] h-[220px] bg-slate-300 mb-3">
      <LazyImg
        src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
        alt="image"
        class="w-full h-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const AsyncExample = defineAsyncComponent(() => import('./components/AsyncExample.vue'))

const { $routeNames } = useGlobalProperties()

const router = useRouter()
const { logout } = useAuthStore()
const contactsStore = useContactsStore()
const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)
const loading = ref(true)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

onMounted(() => {
  // get data for the page
  getContacts()
    .finally(() => (loading.value = false))
})
</script>
