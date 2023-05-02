<template>
  <el-table
    :data="filteredContacts" stripe row-key="id" style="width: 100%"
    :default-sort="{ prop: 'name', order: 'ascending' }"
    highlight-current-row
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

    <el-table-column label="Name" prop="name" sortable width="180">
      <template #default="{row}">
        <div v-if="editIdArr.has(row.id)" @click.stop>
          <el-input
            ref="inputRef"
            v-model="row.name"
            clearable
            placeholder="User name"
          />
        </div>
        <p v-else>{{ row.name }}</p>
      </template>
    </el-table-column>

    <el-table-column label="Description" prop="description" sortable show-overflow-tooltip width="350">
      <template #default="{row}">
        <div v-if="editIdArr.has(row.id)" @click.stop>
          <el-input
            v-model="row.description"
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
      <template #default="scope">
        <template v-if="editIdArr.has(scope.row.id)">
          <el-button size="small" :type="$elComponentType.danger" @click.stop="handleCancel(scope.row)">
            Cancel
          </el-button>

          <el-button size="small" @click.stop="handleSave(scope.row)">
            Save
          </el-button>
        </template>
        <template v-else>
          <el-button size="small" @click.stop="handleEdit(scope.row)">
            Edit
          </el-button>

          <el-button size="small" :type="$elComponentType.danger" @click.stop="deleteContact(scope.row)">
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
const editIdArr = ref(new Set<number>())
const searchName = ref('')

const filteredContacts = computed(() => (
  contacts.value.filter(c => !searchName.value ||
  c.name.toLowerCase().includes(searchName.value.toLowerCase()))
))

const handleEdit = (row: IContact) => {
  editIdArr.value.add(row.id)
  nextTick(() => {
    inputRef.value?.focus()
  })
}

const handleCancel = (row: IContact) => {
  editIdArr.value.delete(row.id)
}

const handleSave = (row: IContact) => {
  updateContact(row)
  editIdArr.value.delete(row.id)
}
</script>
