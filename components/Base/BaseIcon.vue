<script setup lang="ts">
const icons = useIcons()

interface IBaseIcon {
  name: keyof typeof icons
  size?: string
}

withDefaults(defineProps<IBaseIcon>(), {
  size: '20',
})
</script>

<template>
  <Icon
    :name="icons[name]"
    :size="size"
  />
</template>
