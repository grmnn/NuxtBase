<script lang="ts" setup>
const inputValue = ref('Disabled with value')
</script>

<template>
  <Story title="Input">
    <Variant title="Sizes">
      <BaseInput
        placeholder="Small"
        size="small"
      />
      <BaseInput
        placeholder="Default"
        size="default"
      />
      <BaseInput
        placeholder="Large"
        size="large"
      />
    </Variant>

    <Variant title="Sizes, Prefix and Suffix">
      <BaseInput
        placeholder="Small"
        size="small"
        prefix="upload"
      />
      <BaseInput
        placeholder="Default"
        size="default"
        suffix="upload"
      />
      <BaseInput
        placeholder="Large"
        size="large"
        prefix="upload"
        suffix="upload"
      />
    </Variant>

    <Variant title="Disabled">
      <BaseInput
        placeholder="Disabled icon"
        size="small"
        prefix="upload"
        :disabled="true"
      />
      <BaseInput
        placeholder="Disabled no icon"
        size="default"

        :disabled="true"
      />
      <BaseInput
        v-model="inputValue"
        placeholder="Disabled with value"
        size="large"
        prefix="upload"
        suffix="upload"
        :disabled="true"
      />
    </Variant>

    <Variant
      title="Error"
      type="col"
    >
      <BaseInput
        placeholder="E-Mail"
        size="small"
        prefix="upload"
        error-message="Please use a valid e-mail."
      />
    </Variant>
  </Story>
</template>
