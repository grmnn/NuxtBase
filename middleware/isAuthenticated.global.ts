export default defineNuxtRouteMiddleware((to) => {
  const authStore = useAuth()
  authStore.syncLocalStorage()

  if (authStore.isAuthenticated && to.path === '/')
    return navigateTo('/app')

  if (!authStore.isAuthenticated && to.path.includes('/app'))
    return navigateTo('/')
})
