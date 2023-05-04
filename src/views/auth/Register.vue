<template>
  <div class="max-w-[500px] mx-auto">
    <el-card v-loading="loading">
      <template #header>
        <p class="font-semibold text-xl">Registration</p>
      </template>

      <el-form
        ref="regFormRef"
        :model="regForm"
        :rules="regFormRules"
        label-position="top"
        @submit.prevent="submit"
      >
        <el-form-item label="User email" prop="email">
          <el-input v-model="regForm.email" />
        </el-form-item>

        <el-form-item label="User password" prop="password">
          <el-input v-model="regForm.password" />
        </el-form-item>

        <el-button native-type="submit" :type="$elComponentType.primary">
          SUBMIT
        </el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElNotification } from 'element-plus'
const router = useRouter()
const { $routeNames } = useGlobalProperties()

const regFormRef = useElFormRef()

const regForm = useElFormModel({
  email: '',
  password: ''
})

const regFormRules = useElFormRules({
  email: [useRequiredRule(), useEmailRule()],
  password: [useRequiredRule(), useMinLenRule(6)]
})

const loading = ref(false)

const submit = () => {
  regFormRef.value?.validate((valid) => {
    if (valid) {
      loading.value = true

      authService.register(regForm)
        .then(() => {
          ElNotification({
            title: 'Success',
            message: 'Confirmation link was sent to your email',
            type: 'success'
          })
          router.push({ name: $routeNames.login })
        })
        .finally(() => (loading.value = false))
    }
  })
}
</script>
