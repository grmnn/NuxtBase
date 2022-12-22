<script setup lang="ts">
interface IAuthProps {
  type: 'login' | 'register'
}

interface IAuthFormData {
  email: {
    data: string
    error: string
  }
  password: {
    data: string
    error: string
  }
  confirmPassword: {
    data: string
    error: string
  }
}

const props = defineProps<IAuthProps>()
const authStore = useAuth()

const isLogin = $computed(() => props.type === 'login')

const formData = $ref<IAuthFormData>({
  email: {
    data: '',
    error: '',
  },
  password: {
    data: '',
    error: '',
  },
  confirmPassword: {
    data: '',
    error: '',
  },
})
let isLoading = $ref(false)

function validateEmail(email: string) {
  if (!email) {
    formData.email.error = 'Please enter your email.'
    return false
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    formData.email.error = 'Please enter a valid email.'
    return false
  }

  return true
}

function validatePassword(password: string) {
  if (!password) {
    formData.password.error = 'Please enter a password.'
    return false
  }

  if (password.length < 6) {
    formData.password.error = 'Please use atleast 6 characters.'
    return false
  }

  return true
}

function validateConfirmPassword(password: string, confirmPassword: string) {
  if (!confirmPassword) {
    formData.confirmPassword.error = 'Please enter a password again.'
    return false
  }

  if (confirmPassword.length < 6) {
    formData.confirmPassword.error = 'Please use atleast 6 characters.'
    return false
  }

  if (password !== confirmPassword) {
    formData.confirmPassword.error = 'Please make sure your passwords match.'
    return false
  }

  return true
}

async function handleLogin() {
  const email = formData.email.data
  const password = formData.password.data

  const validEmail = validateEmail(email)
  const validPassword = validatePassword(password)

  if (validEmail && validPassword) {
    await authStore.signIn({ email, password })
  }
}

async function handleRegister() {
  const email = formData.email.data
  const password = formData.password.data
  const confirmPassword = formData.confirmPassword.data

  const validEmail = validateEmail(email)
  const validPassword = validatePassword(password)
  const validConfirmPassword = validateConfirmPassword(password, confirmPassword)

  if (validEmail && validPassword && validConfirmPassword) {
    formData.email.error = ''
    formData.password.error = ''
    formData.confirmPassword.error = ''
    authStore.signUp({ email, password })
  }
}

async function onSubmit() {
  isLoading = true

  if (isLogin) {
    await handleLogin()
  } else {
    await handleRegister()
  }
  isLoading = false
}

function onChange(errorKey: keyof IAuthFormData) {
  if (errorKey === 'password' || errorKey === 'confirmPassword') {
    formData.password.error = ''
    formData.confirmPassword.error = ''
  }
  if (formData[errorKey].error) {
    formData[errorKey].error = ''
  }
}
</script>

<template>
  <div class="w-full lg:mx-auto lg:max-w-md">
    <div class="mb-6 rounded-xl bg-grey-900 py-8 px-6 backdrop-blur-lg lg:py-10 lg:px-8">
      <h1
        class="mb-8 text-2xl font-semibold"
      >
        {{ isLogin ? 'Sign in to your account' : 'Create your account' }}
      </h1>

      <form
        class="flex flex-col"
        novalidate
        @submit.prevent="onSubmit"
      >
        <TransitionGroup name="list">
          <BaseInput
            key="email"
            v-model="formData.email.data"
            class="mb-4"
            type="email"
            prefix="email"
            label="E-Mail"
            placeholder="E-Mail Adress"
            :error-message="formData.email.error"
            @change="onChange('email')"
          />
          <BaseInput
            key="password"
            v-model="formData.password.data"
            :class="isLogin ? 'mb-12' : 'mb-4'"
            type="password"
            prefix="password"
            label="Password"
            placeholder="Password"
            :error-message="formData.password.error"
            @change="onChange('password')"
          />
          <BaseInput
            v-if="!isLogin"
            key="password"
            v-model="formData.confirmPassword.data"
            class="mb-12"
            type="password"
            prefix="password"
            label="Confirm Password"
            placeholder="Password repeat"
            :error-message="formData.confirmPassword.error"
            @change="onChange('confirmPassword')"
          />

          <BaseButton
            key="button"
            type="submit"

            :loading="isLoading"
          >
            {{ isLogin ? 'Continue' : 'Create Account' }}
          </BaseButton>
        </TransitionGroup>
      </form>
    </div>
    <div class="text-center">
      <p
        v-if="isLogin"
        class="text-grey-100"
      >
        Don't have an account?
        <NuxtLink
          to="/register"
          class="text-white"
        >
          Sign up
        </NuxtLink>
      </p>
      <p
        v-else
        class="text-grey-100"
      >
        Have an account?
        <NuxtLink
          to="/login"
          class="text-white"
        >
          Sign in
        </NuxtLink>
      </p>
    </div>
  </div>
</template>

<style>
.list-move {
  transition: all 0.333s ease;
}
</style>
