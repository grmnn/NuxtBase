<script setup lang="ts">
import { computed } from '#imports'
interface IVariant {
  title: string
  type?: 'col' | 'row' | 'full'
}
const props = withDefaults(defineProps<IVariant>(), {
  type: 'row',
})

const computedClass = computed(() => ({
  'rounded border border-grey-700 p-4 lg:flex lg:justify-between lg:p-8': props.type !== 'full',
  'border-b border-b-grey-700 pb-12': props.type === 'full',
  'flex-col space-y-4 lg:space-x-12 lg:space-y-0 lg:flex-row': props.type === 'row',
  'flex-col space-y-4': props.type === 'col',
}))
</script>

<template>
  <div>
    <h2 class="mb-4 text-2xl font-semibold">
      {{ title }}
    </h2>
    <div
      class="w-full"
      :class="computedClass"
    >
      <slot />
    </div>
  </div>
</template>
