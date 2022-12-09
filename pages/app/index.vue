<script setup lang="ts">
const authStore = useAuth()
definePageMeta({
  layout: 'app',
})
</script>

<template>
  <article class="px-4">
    <h1>Hello {{ authStore.userSession?.user.email }}</h1>
  </article>
</template>
