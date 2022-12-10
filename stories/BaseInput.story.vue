<script lang="ts" setup>
const inputValue = ref('Disabled with value')
</script>

<template>
  <Story title="Input">
    <Variant title="Sizes">
      <BaseInput
        placeholder="Small"
        small
      />
      <BaseInput
        placeholder="Default"
      />
    </Variant>

    <Variant title="Sizes, Prefix and Suffix">
      <BaseInput
        placeholder="Small Prefix"
        small
        prefix="upload"
      />
      <BaseInput
        placeholder="Default Suffix"
        suffix="upload"
      />
      <BaseInput
        placeholder="Default Prefix & Suffix"
        prefix="upload"
        suffix="upload"
      />
    </Variant>

    <Variant title="Disabled">
      <BaseInput
        placeholder="Disabled icon"
        small
        prefix="upload"
        :disabled="true"
      />
      <BaseInput
        placeholder="Disabled no icon"

        :disabled="true"
      />
      <BaseInput
        v-model="inputValue"
        placeholder="Disabled with value"
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
        prefix="upload"
        error-message="Please use a valid e-mail."
      />
    </Variant>
  </Story>
</template>
