import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
dayjs.extend(weekday)
export const useDatepicker = (initialDate: dayjs.Dayjs) => {
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
  const date = ref(initialDate)
  const month = computed(() => date.value.month())
  const year = computed(() => date.value.year())
  const daysInMonth = computed(() => date.value.daysInMonth())

  function updateDate(updatedDate: dayjs.Dayjs) {
    date.value = updatedDate
  }
  function previousMonth() {
    date.value = date.value.subtract(1, 'month')
  }

  function nextMonth() {
    date.value = date.value.add(1, 'month')
  }

  function getDateViaDay(day: number) {
    return dayjs(`${year.value}-${month.value + 1}-${day}`)
  }
  function isFutureDate(day: number) {
    return getDateViaDay(day).isAfter(dayjs())
  }

  return {
    date,
    monthLabels,
    dayLabels,
    month,
    year,
    daysInMonth,
    previousMonth,
    nextMonth,
    updateDate,
    getDateViaDay,
    isFutureDate,
  }
}
