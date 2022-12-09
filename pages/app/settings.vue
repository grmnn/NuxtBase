<script setup lang="ts">
const authStore = useAuth()
definePageMeta({
  layout: 'app',
})
</script>

<template>
  <article class="flex flex-1 flex-col px-4">
    <h1 class="text-xl font-medium">
      Settings
    </h1>
    <BaseButton
      class="mt-auto mb-4"
      variant="error"
      @click="authStore.signOut"
    >
      Log Out
    </BaseButton>
  </article>
</template>
