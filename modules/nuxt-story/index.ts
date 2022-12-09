import { fileURLToPath } from 'url'
import {
  addComponentsDir,
  addLayout,
  addTemplate,
  createResolver,
  defineNuxtModule,
  extendPages,
} from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: 'nuxt-story',
  },
  async setup(options, nuxt) {
    if (!nuxt.options.dev)
      return
    const { resolve } = createResolver(import.meta.url)

    const componentsDir = fileURLToPath(new URL('./components', import.meta.url))

    await addComponentsDir({
      path: resolve(componentsDir),
      pathPrefix: false,
      pattern: '**/*.vue',
      transpile: true,
    })

    const layoutsDir = fileURLToPath(new URL('./layouts', import.meta.url))
    const layoutTemplate = addTemplate({
      src: resolve(layoutsDir, 'story-layout.vue'),
      write: true,
    })
    addLayout(layoutTemplate, 'story-layout')

    const pagesDir = fileURLToPath(new URL('./pages', import.meta.url))
    extendPages((pages) => {
      pages.push({
        name: 'Story',
        path: '/story',
        file: resolve(pagesDir, 'story.vue'),
      })
    })
  },
})
