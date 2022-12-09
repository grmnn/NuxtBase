<script setup lang="ts">
import { computed, defineAsyncComponent, definePageMeta, onMounted, ref, useRoute, useRouter } from '#imports'

definePageMeta({
  layout: 'story-layout',
})

interface IStory {
  title: string
  path: string
}

const showMenu = ref(false)

const computedMenuClass = computed(() => {
  return {
    'translate-x-0': showMenu.value,
    '-translate-x-full lg:translate-x-0': !showMenu.value,
  }
})

const storyModules = await import.meta.glob('/stories/*.story.vue')

const stories = ref<IStory[]>([])
for (const story in storyModules) {
  const storyPath = story

  const storyTitle = story.split('/').slice(-1)[0].split('.')[0]
  stories.value.push({
    title: storyTitle,
    path: storyPath,
  })
}

const selectedStory = ref<IStory>()

const computedStoryComponent = computed(() => {
  if (!selectedStory.value) {
    return
  }
  const storyComponent = defineAsyncComponent(storyModules[selectedStory.value.path])
  return storyComponent
})

const router = useRouter()
const route = useRoute()
function setComponent(story: IStory) {
  selectedStory.value = story
  router.push(`?component=${story.title}`)
  showMenu.value = false
}

onMounted(() => {
  const story = stories.value.find(story => story.title === route.query.component)

  if (story) {
    setComponent(story)
    return
  }

  setComponent(stories.value[0])
})
</script>

<template>
  <main class="mx-auto flex w-full max-w-7xl flex-col pt-4 lg:flex-row">
    <button
      class="
      fixed
      bottom-6
      right-6 z-10 flex
      h-10 w-10 items-center
      justify-center
      rounded
      border-2
      border-black
      bg-white
      text-xl
      text-black
      lg:hidden"

      @click="showMenu = !showMenu"
    >
      <Icon
        name="radix-icons:component-1"
        size="24"
      />
    </button>
    <aside
      class="
      fixed
      inset-y-0 left-0
      z-10 w-full
     bg-black
      pl-4
      transition
      lg:inset-y-auto lg:left-auto
      lg:w-48
      lg:bg-transparent lg:pl-0
      "
      :class="computedMenuClass"
    >
      <ul class="flex flex-col space-y-2 text-lg">
        <button
          v-for="story of stories"
          :key="story.title"
          class="text-left "
          :class="route.query.component === story.title ? 'text-white hover:text-white' : 'text-grey-600 hover:text-grey-500'"
          @click="setComponent(story)"
        >
          {{ story.title.replace('Base', '') }}
        </button>
      </ul>
    </aside>
    <section class="h-full w-full pb-24 lg:ml-48">
      <component
        :is="computedStoryComponent"
        v-if="computedStoryComponent"
      />
    </section>
  </main>
</template>
