<template>
  <span class="text-xs text-gray">Table border:</span> <el-switch v-model="tableBorder" />
  <el-table
    :data="filteredContacts" stripe style="width: 100%"
    :border="tableBorder"
    @current-change="editContact"
  >
    <el-table-column type="index" width="30" />

    <el-table-column label="Image" width="100">
      <template #default="{row}">
        <el-avatar
          :src="row.image"
          :alt="`${row.name.replace(/\s/g, '-')}-logo`"
          class="shrink-0 text-base uppercase"
        >
          {{ createAbbreviation(row.name) }}
        </el-avatar>
      </template>
    </el-table-column>

    <el-table-column label="Name" prop="name" sortable min-width="180">
      <template #default="{row}">
        <div v-if="editIdArr.has(row.id)" @click.stop>
          <el-input
            ref="inputRef"
            v-model="editableContacts.get(row.id)!.name"
            clearable
            placeholder="User name"
          />
        </div>
        <p v-else>{{ row.name }}</p>
      </template>
    </el-table-column>

    <el-table-column label="Description" prop="description" sortable show-overflow-tooltip min-width="250">
      <template #default="{row}">
        <div v-if="editIdArr.has(row.id)" @click.stop>
          <el-input
            v-model="editableContacts.get(row.id)!.description"
            clearable
            placeholder="User description"
          />
        </div>
        <p v-else class="truncate">{{ row.description }}</p>
      </template>
    </el-table-column>

    <el-table-column label="Actions" width="210">
      <template #default>
        <el-button-group @click.stop>
          <el-button class="">
            <template #icon><IconEnvelope /></template>
            Email
          </el-button>
          <el-button class="phone">
            <template #icon><IconPhone /></template>
            Phone
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>

    <el-table-column fixed="right" width="200" align="right">
      <template #header>
        <el-input v-model="searchName" :size="$elComponentSize.small" clearable placeholder="Search by name" />
      </template>

      <template #default="{row}">
        <template v-if="editIdArr.has(row.id)">
          <el-button size="small" :type="$elComponentType.danger" @click.stop="handleCancel(row)">
            Cancel
          </el-button>

          <el-button size="small" @click.stop="handleSave(row)">
            Save
          </el-button>
        </template>
        <template v-else>
          <el-button size="small" @click.stop="handleEdit(row)">
            Edit
          </el-button>

          <el-button size="small" :type="$elComponentType.danger" @click.stop="deleteContact(row)">
            Delete
          </el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { createAbbreviation } from '../contacts.helpers'

defineProps<{
  editContact: (contact: IContact) => void
}>()

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const inputRef = ref<HTMLInputElement | null>(null)
const searchName = ref('')
const tableBorder = ref(false)

//* * Used this data structures for a multiple edit mode */
const editIdArr = ref(new Set<number>())
const editableContacts = ref(new Map<number, IContact>())

const filteredContacts = computed(() => (
  contacts.value.filter(c => !searchName.value ||
  c.name.toLowerCase().includes(searchName.value.toLowerCase()))
))

const handleEdit = (row: IContact) => {
  editIdArr.value.add(row.id)
  editableContacts.value.set(row.id, { ...row })
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const handleCancel = (row: IContact) => {
  editIdArr.value.delete(row.id)
  editableContacts.value.delete(row.id)
}

const handleSave = (row: IContact) => {
  updateContact(editableContacts.value.get(row.id) as IContact)
  editIdArr.value.delete(row.id)
  editableContacts.value.delete(row.id)
}
</script>
