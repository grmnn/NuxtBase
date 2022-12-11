<script setup lang="ts">
const date = ref('2022-12-20')
const date2 = ref('2022-12-11')
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
  </Story>
</template>
