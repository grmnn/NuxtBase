import type { SupabaseClient } from '@supabase/supabase-js'
import { createClient } from '@supabase/supabase-js'

import { useNuxtApp, useRuntimeConfig } from '#imports'

export const useSupabase = (): SupabaseClient | null => {
  const nuxtApp = useNuxtApp()
  const cfg = useRuntimeConfig()

  if (!cfg.public.supabase.key || !cfg.public.supabase.url) {
    console.error('Missing Supabase key or url in runtime config')
    return null
  }

  if (!nuxtApp._supabaseClient) {
    nuxtApp._supabaseClient = createClient(
      cfg.public.supabase.url,
      cfg.public.supabase.key,
      {
        auth: {
          storageKey: 'supabase.auth.session',
        },
      },

    )
  }

  return nuxtApp._supabaseClient
}
