<script setup lang="ts">
const icons = useIcons()
interface IButtonProps {
  type?: 'submit' | 'button' | 'reset'
  variant?: 'primary' | 'secondary' | 'sucess' | 'error'
  size?: 'small' | 'default' | 'large'
  alternative?: boolean
  icon?: keyof typeof icons
  disabled?: boolean
  loading?: boolean

  prefix?: keyof typeof icons
  suffix?: keyof typeof icons

  to?: string
}

const props = withDefaults(defineProps<IButtonProps>(), {
  type: 'submit',
  variant: 'primary',
  size: 'default',
  disabled: false,
  loading: false,
})

const computedClass = computed(() => {
  const defaults = {
    'font-semibold inline-flex items-center rounded cursor-pointer': true,
    'disabled:bg-grey-800 disabled:text-grey-300 disabled:border disabled:border-grey-500 disabled:cursor-not-allowed': props.disabled || props.loading,
  }

  const sizing = {
    'h-[32px] text-sm': props.size === 'small',
    'h-[40px] text-sm': props.size === 'default',
    'h-[48px] text-base': props.size === 'large',

    'py-0 px-[12px]': !props.icon,
  }

  const iconOnly = {
    'flex items-center justify-center': props.icon,
    'w-[32px]': props.size === 'small' && props.icon,
    'w-[40px]': props.size === 'default' && props.icon,
    'w-[48px]': props.size === 'large' && props.icon,
  }

  const colors = {
    'border': !props.alternative,
    'bg-white text-black border-white hover:bg-transparent hover:text-white': props.variant === 'primary' && !props.alternative,
    'bg-transparent text-grey-100 border-grey-100 hover:border-white hover:text-white': props.variant === 'secondary' && !props.alternative,
    'bg-primary text-black border-primary hover:bg-transparent hover:text-primary': props.variant === 'sucess' && !props.alternative,
    'bg-error text-white border-error hover:bg-transparent hover:text-error': props.variant === 'error' && !props.alternative,

    'text-white hover:bg-white/20': props.variant === 'primary' && props.alternative,
    'text-grey-100 hover:bg-grey-100/20': props.variant === 'secondary' && props.alternative,
    'text-primary hover:bg-primary/20': props.variant === 'sucess' && props.alternative,
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
  }
})

const iconOnlySize = $computed(() => {
  if (props.size === 'small') {
    return '20'
  } else if (props.size === 'large') {
    return '28'
  } else {
    return '24'
  }
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
    <Transition
      name="fade"
      mode="out-in"
    >
      <BaseIcon
        v-if="loading"
        class="mx-auto"
        name="loading"
      />
      <span
        v-else
        :class="computedAlignment"
      ><slot /></span>
    </Transition>
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
    <span :class="computedAlignment"><slot /></span>
    <BaseIcon
      v-if="!loading && suffix"
      :name="suffix"
    />
  </NuxtLink>
</template>
