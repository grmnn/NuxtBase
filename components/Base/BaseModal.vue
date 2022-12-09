<script setup lang="ts">
interface IBaseModalProps {
  modelValue: boolean
  showClose?: boolean
  fullHeight?: boolean
}

const props = withDefaults(
  defineProps<IBaseModalProps>(),
  {
    showClose: false,
    fullHeight: false,
  },
)

const emits = defineEmits(['update:modelValue'])

const computedModalClass = computed(() => {
  const defaults = {
    'rounded-lg': !props.fullHeight,
  }

  const sizing = {
    'inset-0 ': props.fullHeight,
    'lg:top-12 lg:bottom-12 lg:left-1/2 lg:-translate-x-1/2': props.fullHeight,
    'bottom-4 left-4 right-4': !props.fullHeight,
    'lg:bottom-auto lg:right-auto lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2': !props.fullHeight,
  }

  return {
    ...defaults,
    ...sizing,
  }
})

const slots = useSlots()

function closeModal() {
  emits('update:modelValue', false)
}
</script>

<template>
  <Teleport to="body">
    <div
      v-if="modelValue"
      class="fixed inset-0 z-50 bg-black/70"
      @click="closeModal"
    />
    <Transition
      appear
      name="fade"
    >
      <div
        v-if="modelValue"
        :class="computedModalClass"
        class="
        fixed
        z-50 flex
        flex-col bg-grey-900
        text-white
        lg:w-full
        lg:max-w-2xl lg:rounded-lg"
      >
        <header
          v-if="showClose || slots.header"
          class="flex w-full items-center justify-between space-x-4 border-b border-b-white/20 p-6"
        >
          <slot name="header" />

          <BaseButton
            v-if="showClose"
            variant="secondary"
            alternative
            size="small"
            icon="close"
            @click="closeModal"
          />
        </header>
        <main
          class="p-6 lg:pb-8"
          :class="fullHeight ? 'flex-1 overflow-y-auto' : ''"
        >
          <slot />
        </main>
        <footer
          class="
          flex flex-col space-y-4
          bg-grey-800/50
          px-6 py-4
          lg:flex-row
          lg:justify-end lg:space-x-4
          lg:space-y-0
          "
        >
          <slot name="footer" />
        </footer>
      </div>
    </Transition>
  </Teleport>
</template>

