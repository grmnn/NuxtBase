<template>
  <div
    id="__default-layout"
    class="flex h-full w-full flex-1 flex-col overflow-x-hidden"
  >
    <header class="relative flex h-16 items-center border-b border-white/10 lg:h-20">
      <nav class="z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/">
          NuxtBase
        </NuxtLink>
        <div class="flex space-x-8">
          <BaseButton
            small
            variant="secondary"
            alternative
            to="/login"
          >
            Login
          </BaseButton>
          <BaseButton
            small
            to="/register"
          >
            Sign up
          </BaseButton>
        </div>
      </nav>
    </header>
    <main class="z-10 flex flex-1 px-4 pt-8">
      <slot />
    </main>
  </div>
</template>
