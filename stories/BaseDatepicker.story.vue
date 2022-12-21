<script setup lang="ts">
const date = ref('2022-12-11')
const date2 = ref('2022-12-11')
const date3 = ref('2022-12-30')
</script>

<template>
  <Story title="Datepicker">
    <Variant title="Base">
      <BaseDatepicker
        v-model="date"
      />
    </Variant>
    <Variant title="Future Dates Disabled">
      <BaseDatepicker
        v-model="date2"
        :disable-future-dates="true"
      />
    </Variant>
    <Variant title="Dateslider">
      <BaseDatepickerSlide
        v-model="date3"
      >
        <template #month-stepper="{ nextMonth, previousMonth, monthLabel, year }">
          <BaseDatepickerMonthStepper
            :month-label="monthLabel"
            :year="year"
            @next-month="nextMonth"
            @previous-month="previousMonth"
          />
        </template>
      </BaseDatepickerSlide>
    </Variant>
  </Story>
</template>
