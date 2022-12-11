<script setup lang="ts">
const icons = useIcons()
interface IInputProps {
  label?: string
  modelValue?: string | number
  placeholder?: string
  type?: string
  disabled?: boolean
  errorMessage?: string
  readonly?: boolean
  small?: boolean
  prefix?: keyof typeof icons
  suffix?: keyof typeof icons
}

const props = withDefaults(defineProps<IInputProps>(), {
  type: 'text',
  small: false,
  readonly: false,
})

const emits = defineEmits(['update:modelValue', 'change'])

const hasFocus = $ref(false)

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
  emits('change')
}

const computedInputClass = $computed(() => {
  const sizing = {
    'h-[32px] leading-[32px] text-sm px-2': props.small,
    'h-[40px] leading-[40px] text-base px-3': !props.small,
  }
  const noFix = !props.prefix && !props.suffix
  const border = {
    'border border-grey-500 focus:border-grey-200 rounded': noFix,
  }

  const fixBorder = {
    'border-l border-l-grey-500': props.prefix,
    'border-l-grey-200': props.prefix && hasFocus,
    'border-r border-r-grey-500': props.suffix,
    'border-r-grey-200': props.suffix && hasFocus,
  }

  return {
    ...fixBorder,
    ...border,
    ...sizing,
  }
})

const computedWrapperClass = $computed(() => {
  const hasFix = props.prefix || props.suffix

  return {
    'border border-grey-500 overflow-hidden rounded': hasFix,
    'border-grey-500': !hasFocus,
    'border-grey-200': hasFocus,
  }
})

const computedIconClass = $computed(() => {
  const defaults = {
    'flex items-center justify-center bg-grey-900 text-grey-300': true,
  }

  const size = {
    'w-[32px]': props.small,
    'w-[40px]': !props.small,
  }

  return {
    ...defaults,
    ...size,
  }
})
</script>

<template>
  <label class="block">
    <span
      v-if="label"
      class="mb-2 inline-block text-sm "
    >{{ label }}</span>
    <div
      class="relative flex"
      :class="computedWrapperClass"
    >
      <div
        v-if="prefix"
        :class="computedIconClass"
      >
        <BaseIcon
          :name="prefix"
          size="20"
        />
      </div>
      <input
        class="
          w-full flex-1 bg-transparent outline-none placeholder:text-grey-500
        disabled:bg-grey-900 disabled:text-grey-700
        disabled:placeholder:text-grey-700
        "
        :class="computedInputClass"
        :type="type"
        :placeholder="placeholder"
        :value="modelValue"
        :disabled="disabled"
        :readonly="readonly"
        @focusin="hasFocus = true"
        @focusout="hasFocus = false"
        @input="onInput"
      >
      <div
        v-if="suffix"
        :class="computedIconClass"
      >
        <BaseIcon
          :name="suffix"
          size="20"
        />
      </div>
    </div>
    <p
      v-if="errorMessage"
      class="mt-2 flex items-center space-x-2 text-xs text-error"
    >
      <BaseIcon
        name="error"
        size="18"
      />
      <span> {{ errorMessage }}</span>
    </p>
  </label>
</template>
