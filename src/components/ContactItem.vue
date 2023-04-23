<template>
  <Card v-if="isEmptyContact">
    <div class="space-y-2 text-sm ">
      <AppInput
        v-model="localContact.name"
        v-focus
        placeholder="User name"
        class="border-b-[1px] border-gray font-medium text-gray"
      />
      <AppInput
        v-model="localContact.description"
        placeholder="User description"
        class="border-b-[1px] border-gray text-gray"
      />
      <AppInput
        v-model="localContact.image"
        placeholder="User image URL"
        class="border-b-[1px] border-gray text-gray"
      />
    </div>

    <template #footer>
      <CardButtons>
        <template #left>
          <span class="text-red-500" @click="$emit('delete')">
            Cancel
          </span>
        </template>

        <template #right>
          <span :class="[!isValidEditFields ? 'text-gray' : 'text-blue-500']" @click="onCreate">
            Create
          </span>
        </template>
      </CardButtons>
    </template>
  </Card>

  <Card v-else>
    <div class="flex">
      <div class="flex-grow text-sm truncate">
        <template v-if="editMode">
          <AppInput v-model="localContact.name" v-focus class="font-medium" />
          <AppInput v-model="localContact.description" class="mt-1 text-gray" />
        </template>

        <template v-else>
          <p class="font-medium">
            {{ contact.name }}
          </p>
          <p class="text-gray mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <div
        class="w-[40px] h-[40px] ml-2 flex justify-center items-center shrink-0 rounded-full border border-gray-medium
        bg-gray-light overflow-hidden"
      >
        <span v-if="imageHasError" class="uppercase">
          {{ imageAbrav }}
        </span>
        <img
          v-else
          class="object-cover"
          :src="contact.image" alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        >
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click="editMode = false"
        >Cancel</span>

        <span
          class=" font-medium text-xs cursor-pointer hover:underline"
          :class="[!isValidEditFields ? 'text-gray' : 'text-blue-500']"
          @click="onSave"
        >Save</span>
      </template>

      <template v-else>
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click="triggerEditMode"
        >Edit</span>

        <span
          class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
          @click="$emit('delete')"
        >Delete</span>
      </template>
    </div>

    <template #footer>
      <CardButtons>
        <template #left>
          <IconEnvelope />
          <span class="ml-3">Email</span>
        </template>

        <template #right>
          <IconPhone />
          <span class="ml-3">Call</span>
        </template>
      </CardButtons>
    </template>
  </Card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'
import Card from '@/components/Card.vue'
import AppInput from '@/components/AppInput.vue'
import CardButtons from '@/components/CardButtons.vue'
import type { IContact } from '@/types'
import vFocus from '@/directives/V.Focus'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save', 'create'])

const localContact = ref<IContact>({
  id: props.contact.id,
  name: '',
  description: '',
  image: ''
})

const isEmptyContact = computed(() => {
  return props.contact.name === '' && props.contact.description === '' && props.contact.image === ''
})

const editMode = ref(false)

const isValidEditFields: ComputedRef<boolean> = computed(() => {
  return localContact.value.name.length > 0 && localContact.value.description.length > 0
})

const imageHasError = ref(false)

const imageAbrav = computed(() => {
  return props.contact.name.trim().split(' ').reduce((acc, el) => {
    if (acc.length < 2 && !!el) acc = acc + el[0]
    return acc
  }, '')
})

function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
}

function onSave () {
  if (isValidEditFields.value) {
    emit('save', localContact.value)
    editMode.value = false
  }
}

function onCreate () {
  if (isValidEditFields.value) {
    emit('create', localContact.value)
  }
}
</script>
