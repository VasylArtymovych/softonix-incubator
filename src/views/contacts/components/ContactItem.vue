<template>
  <el-card :body-style="{padding: '0px'}" class="rounded-md">
    <div class="flex p-4 pb-0">
      <div class="flex-grow text-sm truncate" @click.stop>
        <template v-if="editMode">
          <div class="flex flex-wrap gap-[2px]">
            <el-input
              ref="inputRef"
              v-model="localContact.name"
              clearable
              :size="$elComponentSize.small"
            />
            <el-input
              v-model="localContact.description"
              clearable
              :size="$elComponentSize.small"
            />
          </div>
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <el-avatar
        :src="contact.image"
        alt="contact-logo"
        class="ml-2 shrink-0 text-base uppercase"
      >
        {{ createAbbreviation(contact.name) }}
      </el-avatar>
    </div>

    <div class="flex justify-end mt-2 px-4 gap-2">
      <template v-if="editMode">
        <el-button
          link :type="$elComponentType.danger"
          class="font-medium text-xs cursor-pointer hover:underline"
          @click.stop="editMode = false"
        >
          Cancel
        </el-button>

        <el-button
          link :type="$elComponentType.primary"
          class="font-medium text-xs cursor-pointer hover:underline"
          @click.stop="onSave"
        >
          Save
        </el-button>
      </template>

      <template v-else>
        <el-button
          link :type="$elComponentType.primary"
          class="font-medium text-xs cursor-pointer hover:underline"
          @click.stop="triggerEditMode"
        >
          Edit
        </el-button>

        <el-button
          link :type="$elComponentType.danger"
          class="font-medium text-xs cursor-pointer hover:underline"
          @click.stop="$emit('delete', contact)"
        >
          Delete
        </el-button>
      </template>
    </div>

    <div class="flex text-sm font-medium text-gray border-t border-gray-ultra-light" @click.stop>
      <el-button class="w-[50%] h-[52px] border-0 rounded-none peer text-inherit">
        <template #icon> <IconEnvelope class="peer-hover:fill-blue-500" /></template>
        Email
      </el-button>
      <el-button
        class="w-[50%] h-[52px] border-0 border-l rounded-none border-gray-ultra-light
      hover:border-gray-ultra-light text-inherit"
      >
        <template #icon><IconPhone /></template>
        Call
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { createAbbreviation } from '../contacts.helpers'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

</script>

<style lang="scss" scoped>
.el-button + .el-button {
  margin-left: 0;
}
</style>
