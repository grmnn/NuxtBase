<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/de-at'
dayjs.locale('de-at')

interface IDatepickerMonthStepperProps {
  monthLabel?: string
  year?: number
  fullWidth?: boolean
}

defineProps<IDatepickerMonthStepperProps>()

const emits = defineEmits(['previousMonth', 'nextMonth'])

function previousMonth() {
  emits('previousMonth')
}

function nextMonth() {
  emits('nextMonth')
}
</script>

<template>
  <div
    class="mb-4 flex items-center justify-between"
    :class="fullWidth ? 'flex' : 'inline-flex'"
  >
    <BaseButton
      icon="chevron-left"
      icon-size="28"
      small
      alternative
      @click="previousMonth"
    />
    <h1
      class="text-lg font-medium"
      :class="!fullWidth ? 'mx-4' : ''"
    >
      {{ monthLabel }} - {{ year }}
    </h1>
    <BaseButton
      icon="chevron-right"
      icon-size="28"
      small
      alternative
      @click="nextMonth"
    />
  </div>
</template>
