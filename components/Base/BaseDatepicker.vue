<script setup lang="ts">
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import 'dayjs/locale/de-at'
dayjs.locale('de-at')
dayjs.extend(weekday)

interface IDatepickerProps {
  modelValue: string
  disableFutureDates?: boolean
}
const props = withDefaults(
  defineProps<IDatepickerProps>(),
  {
    disableFutureDates: false,
  },
)

const emits = defineEmits(['update:modelValue'])

const monthLabels = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const dayLabels = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

let dateValue = $ref(dayjs(props.modelValue))
let date = $ref(dayjs(props.modelValue))
const month = $computed(() => date.month())
const year = $computed(() => date.year())
const daysInMonth = computed(() => date.daysInMonth())
const firstDayOfMonthIndex = computed(() => date.startOf('month').weekday())
const lastDayOfPreviousMonth = computed(() => date.subtract(1, 'month').daysInMonth())
const lastDayOfMonth = computed(() => date.endOf('month').day())

const computedDisplayValue = computed(() => {
  return dateValue.format('DD.MM.YYYY')
})

function previousMonth() {
  date = date.subtract(1, 'month')
}

function nextMonth() {
  date = date.add(1, 'month')
}

function getDateViaDay(day: number) {
  return dayjs(`${year}-${month + 1}-${day}`)
}

function isFutureDate(day: number) {
  return getDateViaDay(day).isAfter(dayjs())
}

function setDate(day: number) {
  if (isFutureDate(day) && props.disableFutureDates)
    return

  dateValue = date.date(day)
  emits('update:modelValue', dateValue.format('YYYY-MM-DD'))
}

let showDatepicker = $ref(false)

function onMouseenter() {
  showDatepicker = true
}
function onMouseleave() {
  showDatepicker = false
  date = dayjs(props.modelValue)
}
</script>

<template>
  <div
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <BaseInput
      v-model="computedDisplayValue"
      :readonly="true"
      class="mb-4"
      prefix="calendar"
    />
    <Transition name="fade">
      <div
        v-if="showDatepicker"
        class="absolute inset-x-0 z-50 mx-4 rounded bg-grey-800 p-3 pt-4 lg:inset-x-auto lg:w-full lg:max-w-xs"
      >
        <div class="mb-4 flex items-center justify-between ">
          <BaseButton
            icon="chevron-left"
            alternative
            small
            @click="previousMonth"
          />
          <h1 class="text-lg font-medium">
            {{ monthLabels[month] }} - {{ year }}
          </h1>
          <BaseButton
            icon="chevron-right"
            alternative
            small
            @click="nextMonth"
          />
        </div>
        <div
          id="weekdays"
          class="grid grid-cols-7"
        >
          <div
            v-for="dayLabel in dayLabels"
            :key="dayLabel"
            class="text-center text-xs font-medium text-grey-200"
          >
            {{ dayLabel.slice(0, 3) }}
          </div>
        </div>
        <div
          class="my-4 grid grid-cols-7"
        >
          <div
            v-for="pastDay in firstDayOfMonthIndex"
            :key="pastDay"
            class="flex aspect-square items-center justify-center text-grey-200"
          >
            {{ lastDayOfPreviousMonth - (firstDayOfMonthIndex - pastDay) }}
          </div>
          <div
            v-for="day in daysInMonth"
            :key="day"
            class="flex aspect-square cursor-pointer items-center justify-center rounded-full"
            :class="{
              'bg-white text-grey-900': getDateViaDay(day).isSame(modelValue, 'day'),
              'border-2 border-white': getDateViaDay(day).isSame(dayjs(), 'day'),
              'text-grey-200 cursor-default': disableFutureDates && isFutureDate(day),
            }"
            @click="setDate(day)"
          >
            {{ day }}
          </div>
          <div
            v-for="nextMonthDay in (7 - lastDayOfMonth)"
            :key="nextMonthDay"
            class="flex aspect-square items-center justify-center text-grey-200"
          >
            {{ nextMonthDay }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>
