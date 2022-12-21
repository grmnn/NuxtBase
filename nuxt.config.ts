export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0, user-scalable=0',
      title: 'NuxtBase - Nuxt 3 Starter Template',
      meta: [
        { name: 'description', content: 'NuxtBase - Nuxt 3 Starter Template' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: './favicon.svg',
        },
      ],
    },
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in',
    },
  },
  css: ['@/assets/styles.css', '@/assets/fonts/inter.css'],
  experimental: {
    reactivityTransform: true,
  },
  modules: ['@vueuse/nuxt', '@pinia/nuxt', 'nuxt-icon', './modules/nuxt-story'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
      },
    },
  },
  ssr: false,
  typescript: {
    strict: true,
    shim: false,
  },
})
