<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="w-full px-2 lg:px-12">
    <h1 class="mb-12 text-3xl font-semibold">
      {{ title }}
    </h1>
    <div class="space-y-16">
      <slot />
    </div>
  </div>
</template>
