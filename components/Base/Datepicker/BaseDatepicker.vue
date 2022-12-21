<script setup lang="ts">
import dayjs from 'dayjs'
import 'dayjs/locale/de-at'

dayjs.locale('de-at')

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

const {
  dayLabels,
  monthLabels,
  date,
  month,
  year,
  daysInMonth,
  nextMonth,
  previousMonth,
  getDateViaDay,
  isFutureDate,
} = useDatepicker(dayjs(props.modelValue))

let dateValue = $ref(dayjs(props.modelValue))
const firstDayOfMonthIndex = computed(() => date.value.startOf('month').weekday())
const lastDayOfPreviousMonth = computed(() => date.value.subtract(1, 'month').daysInMonth())
const lastDayOfMonth = computed(() => date.value.endOf('month').day())

function getDayClasses(day: number) {
  const isSelected = getDateViaDay(day).isSame(props.modelValue, 'day')
  const isToday = getDateViaDay(day).isSame(dayjs(), 'day')
  const isDisabled = props.disableFutureDates && isFutureDate(day)

  return {
    'bg-white text-grey-900 m-[2px]': isSelected,
    'border-2 border-white m-[2px]': isToday,
    'text-grey-200 cursor-default': isDisabled,
    'hover:bg-white/10 m-[2px]': !isSelected && !isToday && !isDisabled,
  }
}

const computedDisplayValue = computed(() => {
  return dateValue.format('DD.MM.YYYY')
})

function setDate(day: number) {
  if (isFutureDate(day) && props.disableFutureDates)
    return

  dateValue = date.value.date(day)
  emits('update:modelValue', dateValue.format('YYYY-MM-DD'))
}

const datepicker = ref<HTMLElement>()
let showDatepicker = $ref(false)
onClickOutside(datepicker, () => {
  date.value = dayjs(props.modelValue)
  showDatepicker = false
})
</script>

<template>
  <div ref="datepicker">
    <BaseInput
      v-model="computedDisplayValue"
      :readonly="true"
      class="mb-4"
      prefix="calendar"
      @click="showDatepicker = !showDatepicker"
    />
    <Transition name="fade">
      <div
        v-if="showDatepicker"
        class="absolute inset-x-0 z-50 mx-4 rounded bg-grey-800 p-3 pt-4 sm:inset-x-auto sm:w-full sm:max-w-xs"
      >
        <BaseDatepickerMonthStepper
          :month-label="monthLabels[month]"
          :year="year"
          :full-width="true"
          @next-month="nextMonth"
          @previous-month="previousMonth"
        />
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
            class="flex aspect-square cursor-pointer items-center justify-center rounded-full "
            :class="getDayClasses(day)"
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
