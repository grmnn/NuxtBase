<template>
  <Story title="Button">
    <Variant title="Sizes">
      <BaseButton size="small">
        Confirm
      </BaseButton>

      <BaseButton>Confirm</BaseButton>

      <BaseButton size="large">
        Confirm
      </BaseButton>
    </Variant>

    <Variant title="Prefix and Suffix">
      <BaseButton prefix="upload">
        Upload
      </BaseButton>

      <BaseButton suffix="upload">
        Upload
      </BaseButton>
      <BaseButton
        prefix="upload"
        suffix="upload"
      >
        Upload
      </BaseButton>
    </Variant>

    <Variant
      title="Alignment"
      variant="col"
    >
      <BaseButton
        align="start"
        prefix="upload"
      >
        Upload
      </BaseButton>

      <BaseButton
        align="start"
        suffix="upload"
      >
        Upload
      </BaseButton>

      <BaseButton
        align="grow"
        prefix="upload"
      >
        Upload
      </BaseButton>

      <BaseButton
        align="grow"
        prefix="upload"
        suffix="upload"
      >
        Upload
      </BaseButton>

      <BaseButton
        align="start"
        prefix="upload"
        suffix="upload"
      >
        Upload
      </BaseButton>
    </Variant>

    <Variant title="Icon Only">
      <BaseButton
        icon="upload"
        size="small"
      />
      <BaseButton
        icon="upload"
      />
      <BaseButton
        icon="upload"
        size="large"
      />
    </Variant>

    <Variant title="Types">
      <BaseButton>Confirm</BaseButton>
      <BaseButton variant="secondary">
        Confirm
      </BaseButton>
      <BaseButton variant="sucess">
        Confirm
      </BaseButton>
      <BaseButton variant="error">
        Confirm
      </BaseButton>
    </Variant>

    <Variant title="Alternative Button">
      <BaseButton alternative>
        Confirm
      </BaseButton>
      <BaseButton
        variant="secondary"
        alternative
      >
        Confirm
      </BaseButton>
      <BaseButton
        variant="sucess"
        alternative
      >
        Confirm
      </BaseButton>
      <BaseButton
        variant="error"
        alternative
      >
        Confirm
      </BaseButton>
    </Variant>

    <Variant title="Loading">
      <BaseButton
        size="small"
        :loading="true"
      >
        Confirm
      </BaseButton>
      <BaseButton :loading="true">
        Confirm
      </BaseButton>
      <BaseButton
        size="large"
        :loading="true"
      >
        Confirm
      </BaseButton>
    </Variant>

    <Variant title="Disabled">
      <BaseButton
        size="small"
        :disabled="true"
      >
        Confirm
      </BaseButton>
      <BaseButton :disabled="true">
        Confirm
      </BaseButton>
      <BaseButton
        size="large"
        :disabled="true"
      >
        Confirm
      </BaseButton>
    </Variant>
  </Story>
</template>
