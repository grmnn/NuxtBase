<script setup lang="ts">
const icons = useIcons()
interface IButtonProps {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'primary' | 'secondary' | 'error'
  small?: boolean
  alternative?: boolean
  icon?: keyof typeof icons
  iconSize?: string
  disabled?: boolean
  loading?: boolean

  prefix?: keyof typeof icons
  suffix?: keyof typeof icons

  to?: string
}

const props = withDefaults(defineProps<IButtonProps>(), {
  type: 'submit',
  variant: 'primary',
  small: false,
  disabled: false,
  loading: false,
})

const computedClass = computed(() => {
  const defaults = {
    'transition relative font-semibold inline-flex items-center rounded cursor-pointer': true,
    'disabled:bg-grey-800 disabled:text-grey-300 disabled:border disabled:border-grey-500 disabled:cursor-not-allowed': props.disabled || props.loading,
  }

  const sizing = {
    'h-[32px] text-sm': props.small,
    'h-[40px] text-sm': !props.small,

    'py-0 px-[12px]': !props.icon,
  }

  const iconOnly = {
    'flex items-center justify-center': props.icon,
    'w-[32px]': props.small && props.icon,
    'w-[40px]': !props.small && props.icon,
  }

  const colors = {
    'border': !props.alternative,
    'bg-white text-black border-white hover:bg-transparent hover:text-white': props.variant === 'primary' && !props.alternative,
    'bg-transparent text-grey-100 border-grey-100 hover:border-white hover:text-white': props.variant === 'secondary' && !props.alternative,
    'bg-error text-white border-error hover:bg-transparent hover:text-error': props.variant === 'error' && !props.alternative,

    'text-white hover:bg-white/20': props.variant === 'primary' && props.alternative,
    'text-grey-100 hover:bg-grey-100/20': props.variant === 'secondary' && props.alternative,
    'text-error hover:bg-error/20': props.variant === 'error' && props.alternative,
  }

  return {
    ...defaults,
    ...sizing,
    ...colors,
    ...iconOnly,

  }
})

const computedAlignment = $computed(() => {
  return {
    'mx-auto': !props.prefix && !props.suffix && !props.icon,
    'mx-2': props.prefix && props.suffix,
    'mr-2': !props.prefix && props.suffix,
    'ml-2': props.prefix && !props.suffix,
    'opacity-0': props.loading,
  }
})

const iconOnlySize = $computed(() => {
  if (props.iconSize)
    return props.iconSize

  return props.small ? '20' : '24'
})
</script>

<template>
  <button
    v-if="!to"
    :class="{
      ...computedClass,
    }"
    :disabled="disabled || loading"
  >
    <BaseIcon
      v-if="icon"
      :name="icon"
      :size="iconOnlySize"
    />
    <BaseIcon
      v-if="!loading && prefix"
      :name="prefix"
    />
    <BaseIcon
      v-if="loading"
      class="absolute left-1/2 mr-2 -translate-x-1/2"
      name="loading"
    />
    <span :class="computedAlignment">

      <slot />
    </span>

    <BaseIcon
      v-if="!loading && suffix"
      :name="suffix"
    />
  </button>
  <NuxtLink
    v-else
    :to="to"
    :class="{
      ...computedClass,
    }"
    :disabled="disabled || loading"
  >
    <BaseIcon
      v-if="loading"
      name="loading"
      class="mr-2"
    />
    <BaseIcon
      v-if="icon"
      :name="icon"
      :size="iconOnlySize"
    />
    <BaseIcon
      v-if="!loading && prefix"
      :name="prefix"
    />
    <span :class="computedAlignment">
      <slot />
    </span>
    <BaseIcon
      v-if="!loading && suffix"
      :name="suffix"
    />
  </NuxtLink>
</template>
