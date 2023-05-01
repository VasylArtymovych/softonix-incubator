<template>
  <el-table
    :data="contacts" stripe row-key="id" style="width: 100%"
    :default-sort="{ prop: 'name', order: 'ascending' }"
  >
    <el-table-column type="index" width="30" />

    <el-table-column label="Image" width="100">
      <template #default="{row}">
        <el-avatar
          :src="row.image"
          :alt="`${row.name.replace(/\s/g, '-')}-logo`"
          class="shrink-0 text-base uppercase"
        >
          {{ nameAbbrv(row) }}
        </el-avatar>
      </template>
    </el-table-column>

    <el-table-column label="Name" prop="name" sortable width="180">
      <template #default="{row}">
        <el-input
          v-if="editIdArr.has(row.id)"
          ref="inputRef"
          v-model="row.name"
          clearable
          placeholder="User name"
        />
        <p v-else>{{ row.name }}</p>
      </template>
    </el-table-column>

    <el-table-column label="Description" prop="description" sortable show-overflow-tooltip width="350">
      <template #default="{row}">
        <el-input
          v-if="editIdArr.has(row.id)"
          v-model="row.description"
          clearable
          placeholder="User description"
        />
        <p v-else class="truncate">{{ row.description }}</p>
      </template>
    </el-table-column>

    <el-table-column label="Operations" width="210">
      <template #default>
        <el-button-group>
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

    <el-table-column label="Actions" align="right" width="200">
      <template #default="scope">
        <template v-if="editIdArr.has(scope.row.id)">
          <el-button size="small" :type="$elComponentType.danger" @click="handleCancel(scope.row)">
            Cancel
          </el-button>

          <el-button size="small" @click="handleSave(scope.row)">
            Save
          </el-button>
        </template>
        <template v-else>
          <el-button size="small" @click="handleEdit(scope.row)">
            Edit
          </el-button>

          <el-button size="small" :type="$elComponentType.danger" @click="deleteContact(scope.row)">
            Delete
          </el-button>
        </template>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)
const { updateContact, deleteContact } = contactsStore

const inputRef = ref<HTMLInputElement | null>(null)
const editIdArr = ref(new Set<number>())

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

const nameAbbrv = (contact: IContact) => {
  return contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}
</script>
