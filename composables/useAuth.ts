import type { Session, SupabaseClient } from '@supabase/supabase-js'
import { defineStore } from 'pinia'

interface UserCredentials {
  email?: string
  password?: string
}

export const useAuth = defineStore('Authentication', () => {
  const supaClient = useSupabase() as SupabaseClient

  const userSession = ref<Session | null>(null)

  const isAuthenticated = computed(() => {
    if (!userSession.value)
      return false

    return !!userSession.value
  })

  const userId = computed(() => {
    if (!userSession.value)
      return null

    return userSession.value.user.id
  })

  async function signIn(credentials: UserCredentials) {
    if (!credentials.email || !credentials.password) {
      console.error('[LOCAL]: Missing credentials')
      return
    }

    const response = await supaClient.auth.signInWithPassword({
      email: credentials.email,
      password: credentials.password,
    })

    if (response.error) {
      console.error(response.error)
      return
    }

    userSession.value = response.data.session
    await navigateTo('/app')
  }

  async function signUp(credentials: UserCredentials) {
    if (!credentials.email || !credentials.password) {
      console.error('[LOCAL]: Missing credentials')
      return
    }

    const response = await supaClient.auth.signUp({
      email: credentials.email,
      password: credentials.password,
    })

    if (response.error) {
      console.error(response.error)
      return
    }

    userSession.value = response.data.session
    await navigateTo('/app')
  }

  async function signOut() {
    await supaClient.auth.signOut()
    userSession.value = null
    await navigateTo('/')
  }

  function syncLocalStorage() {
    const storedSession = localStorage.getItem('supabase.auth.session')

    if (!storedSession) {
      console.log('[Sync Local Storage]: No session found in local storage')
      return
    }

    const parsedSession = JSON.parse(storedSession) as Session

    userSession.value = parsedSession
  }

  return {
    userSession,
    isAuthenticated,
    userId,
    syncLocalStorage,
    signIn,
    signUp,
    signOut,
  }
})
