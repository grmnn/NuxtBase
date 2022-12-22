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
    const resolver = createResolver(import.meta.url)

    const componentsDir = fileURLToPath(new URL('./components', import.meta.url))

    await addComponentsDir({
      path: resolver.resolve(componentsDir),
      pathPrefix: false,
      pattern: '**/*.vue',
      transpile: true,
    })

    const layoutsDir = fileURLToPath(new URL('./layouts', import.meta.url))
    const layoutTemplate = addTemplate({
      src: resolver.resolve(layoutsDir, 'story-layout.vue'),
      write: true,
    })
    addLayout(layoutTemplate, 'story-layout')

    const pagesDir = fileURLToPath(new URL('./pages', import.meta.url))
    extendPages((pages) => {
      pages.push({
        name: 'Story',
        path: '/story',
        file: resolver.resolve(pagesDir, 'story.vue'),
      })
    })
  },
})
