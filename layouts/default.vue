<template>
  <div
    id="__default-layout"
    class="flex h-full w-full flex-1 flex-col overflow-x-hidden"
  >
    <header class="radial-gradient relative flex h-16 items-center border-b border-white/10 lg:h-20">
      <nav class="z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <NuxtLink to="/">
          NuxtBase
        </NuxtLink>
        <div class="flex space-x-8">
          <BaseButton
            size="small"
            variant="secondary"
            alternative
            to="/login"
          >
            Login
          </BaseButton>
          <BaseButton
            size="small"
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

<style scoped>
.radial-gradient:before {
  content: '';
  position: absolute;
  inset: 10% -20% 0 30%;
  background-image: radial-gradient(ellipse at bottom, #1d1d1d 0%, #000 50%);
  opacity: .4;
}

#__default-layout:before {
    content: '';
    position: fixed;
    inset: 70% -50% 0 -50%;
    background-image: radial-gradient(ellipse at bottom, #282828 0%, #000 70%);
    opacity: 0.5;
}

@media (min-width: 1280px) {
  #__default-layout:before{
    inset: 30% -10% 0 30%;
  }
}
</style>
