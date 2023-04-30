<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Contact list">
      <div class="flex items-center gap-4">
        <h3 class="font-medium m-0">Contact list</h3>

        <el-button :type="$elComponentType.primary" class="" @click="createNewContact">
          <template #icon>
            <IconPlus class="w-5 h-5" />
          </template>
          Add Contact
        </el-button>

        <el-button
          class="!ml-0"
          :type="$elComponentType.danger"
          @click="$router.replace({ name: $routeNames.login })"
        >
          Logout
        </el-button>
      </div>

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
    </el-tab-pane>
    <el-tab-pane label="Config">
      <el-table :data="contacts" row-key="id" style="width: 100%">
        <el-table-column label="Image">
          <img src="" alt="">
        </el-table-column>

        <el-table-column v-if="editMode" label="Name" prop="name" sortable />
        <el-table-column v-else>
          <el-input placeholder="User name" />
        </el-table-column>

        <el-table-column label="Description" prop="description" sortable />

        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">
              Edit
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
            >
              Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const editMode = ref(true)
const handleEdit = () => {
  editMode.value = false
}

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}
</script>
