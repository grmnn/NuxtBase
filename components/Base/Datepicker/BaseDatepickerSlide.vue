<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/de-at'
dayjs.locale('de-at')

interface IDatepickerProps {
  modelValue: string
}
const props = defineProps<IDatepickerProps>()
const emits = defineEmits(['update:modelValue'])
const { date, daysInMonth, dayLabels, monthLabels, getDateViaDay, nextMonth, previousMonth, month, year } = useDatepicker(dayjs(props.modelValue))

const dateSlider = ref<HTMLElement>()

onMounted(() => {
  dateSlider.value?.querySelector('[data-active="true"]')?.scrollIntoView({
    behavior: 'auto',
    block: 'start',
    inline: 'start',
  })
})

function getDayLabel(day: number) {
  return dayLabels[date.value.date(day).weekday()].slice(0, 3)
}

function setDate(day: number) {
  emits('update:modelValue', getDateViaDay(day).format('YYYY-MM-DD'))
}

function onNextMonth() {
  nextMonth()
  setDate(1)
  // on nextTick slide to first day of month

  nextTick(() => {
    dateSlider.value?.querySelector('[data-active="true"]')?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'start',
    })
  })
}

function onPreviousMonth() {
  previousMonth()
  setDate(1)
  nextTick(() => {
    dateSlider.value?.querySelector('[data-active="true"]')?.scrollIntoView({
      behavior: 'auto',
      block: 'start',
      inline: 'start',
    })
  })
}
</script>

<template>
  <div class="w-full overflow-hidden">
    <div class="flex w-full">
      <div class="ml-auto">
        <slot
          name="month-stepper"
          :next-month="onNextMonth"
          :previous-month="onPreviousMonth"
          :month-label="monthLabels[month]"
          :year="year"
        />
      </div>
    </div>
    <div
      ref="dateSlider"
      class="hidden-scrollbar flex w-full gap-3 overflow-x-auto"
    >
      <div
        v-for="day in daysInMonth"
        :key="day"
        :data-active="getDateViaDay(day).isSame(props.modelValue, 'day')"
        :class="getDateViaDay(day).isSame(props.modelValue, 'day') ? 'bg-error' : 'bg-grey-600'"
        class="flex h-[64px] w-[48px] shrink-0 cursor-pointer flex-col items-center rounded  pt-2 text-xs"
        @click="setDate(day)"
      >
        <span class="mb-3 font-bold">{{ getDayLabel(day) }}</span>
        <span>{{ day }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hidden-scrollbar::-webkit-scrollbar {
  display: none;
}

.hidden-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>
