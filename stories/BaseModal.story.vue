<script setup lang="ts">
let defaultModalOpen = $ref(false)
let fullHeightModalOpen = $ref(false)

function onConfirmDefaultModal() {
  console.log('modal confirmed')
  defaultModalOpen = false
}
function onConfirmfullHeightModalOpen() {
  console.log('modal confirmed')
  fullHeightModalOpen = false
}
</script>

<template>
  <Story title="Modal">
    <Variant title="Default">
      <BaseButton
        variant="primary"
        @click="defaultModalOpen = true"
      >
        Deactivate Account
      </BaseButton>
      <BaseModal
        v-model="defaultModalOpen"
      >
        <template #header>
          <h1 class="text-lg font-semibold lg:text-xl">
            Deactivate your account
          </h1>
        </template>

        <template #default>
          <main class="flex-1">
            <p>
              Are you sure you want to deactivate your account? All of your data will be permanently removed.
              <span class="font-semibold">This action cannot be undone.</span>
            </p>
          </main>
        </template>

        <template #footer>
          <BaseButton
            variant="error"
            @click="onConfirmDefaultModal"
          >
            Deactivate
          </BaseButton>
          <BaseButton
            variant="secondary"
            @click="defaultModalOpen = false"
          >
            Cancel
          </BaseButton>
        </template>
      </BaseModal>
    </Variant>
    <Variant title="Full Height">
      <BaseButton
        variant="primary"
        @click="fullHeightModalOpen = true"
      >
        Confirm
      </BaseButton>
      <BaseModal
        v-model="fullHeightModalOpen"
        :full-height="true"
        :show-close="true"
      >
        <template #header>
          <h1 class="text-lg font-semibold lg:text-xl">
            Deactivate your account
          </h1>
        </template>

        <template #default>
          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores veritatis unde culpa eius dolor excepturi dicta dolore. Placeat tempora eaque veritatis? Voluptates sapiente harum nisi possimus aut repellendus libero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores veritatis unde culpa eius dolor excepturi dicta dolore. Placeat tempora eaque veritatis? Voluptates sapiente harum nisi possimus aut repellendus libero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores veritatis unde culpa eius dolor excepturi dicta dolore. Placeat tempora eaque veritatis? Voluptates sapiente harum nisi possimus aut repellendus libero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, asperiores veritatis unde culpa eius dolor excepturi dicta dolore. Placeat tempora eaque veritatis? Voluptates sapiente harum nisi possimus aut repellendus libero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
          <p class="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam perspiciatis dolorem dolore id esse! Cum, autem, reprehenderit qui saepe inventore incidunt earum eius, fugit fugiat voluptatibus doloremque voluptatem nostrum alias.
          </p>
        </template>

        <template #footer>
          <BaseButton
            variant="primary"
            @click="onConfirmfullHeightModalOpen"
          >
            Confirm
          </BaseButton>
        </template>
      </BaseModal>
    </Variant>
  </Story>
</template>
