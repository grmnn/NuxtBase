<script setup lang="ts">
const isLoading = ref(true)
</script>

<template>
  <Story title="Button">
    <Variant title="Sizes">
      <BaseButton>Default Button</BaseButton>

      <BaseButton small>
        Small Button
      </BaseButton>
    </Variant>

    <Variant title="Prefix and Suffix">
      <BaseButton prefix="upload">
        Prefix Icon
      </BaseButton>

      <BaseButton suffix="upload">
        Suffix Icon
      </BaseButton>
      <BaseButton
        prefix="upload"
        suffix="upload"
      >
        Pre & Suffix Icon
      </BaseButton>
    </Variant>

    <Variant title="Icon Only">
      <BaseButton
        icon="upload"
      />

      <BaseButton
        icon="upload"
        small
      />
    </Variant>

    <Variant title="Types">
      <BaseButton>Primary Button</BaseButton>
      <BaseButton variant="secondary">
        Secondary Button
      </BaseButton>
      <BaseButton variant="error">
        Error Button
      </BaseButton>
    </Variant>

    <Variant title="Alternative Button">
      <BaseButton alternative>
        Alternative Primary Button
      </BaseButton>
      <BaseButton
        variant="secondary"
        alternative
      >
        Alternative Secondary Button
      </BaseButton>
      <BaseButton
        variant="error"
        alternative
      >
        Alternative Error Button
      </BaseButton>
    </Variant>

    <Variant title="Loading">
      <BaseButton
        small
        :loading="isLoading"
        @click="isLoading = !isLoading"
      >
        Confirm
      </BaseButton>
      <BaseButton
        :loading="isLoading"
        @click="isLoading = !isLoading"
      >
        Confirm
      </BaseButton>

      <BaseButton @click="isLoading = !isLoading">
        Toggle
      </BaseButton>
    </Variant>

    <Variant title="Disabled">
      <BaseButton
        small
        :disabled="true"
      >
        Confirm
      </BaseButton>
      <BaseButton :disabled="true">
        Confirm
      </BaseButton>
    </Variant>
  </Story>
</template>
