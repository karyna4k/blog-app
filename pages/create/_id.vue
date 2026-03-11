<template>
  <div class="wrapper-content wrapper-content--fixed">
    <blog-new-post :post-edit="post" @submit="onSubmit" />
  </div>
</template>

<script setup>
import axios from 'axios'
import { computed } from 'vue'
import { useAsyncData, useHead, useRoute, useRouter } from '#imports'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
const router = useRouter()
const route = useRoute()

const { data } = await useAsyncData(async () => {
  const res = await axios.get(
    `https://blog-nuxt-test-default-rtdb.firebaseio.com/posts/${route.params.id}.json`,
  )
  return { ...res.data, id: route.params.id }
})

const post = computed(() => data.value)

useHead(() => {
  const p = post.value || {}
  const title = p.title
  const descr = p.descr
  const img = p.img
  const type = 'article'

  return {
    title,
    meta: [
      { hid: 'og: title', name: 'og: title', content: title },
      { hid: 'description', name: 'description', content: descr },
      { hid: 'og:description', name: 'og:description', content: descr },
      { hid: 'og:type', name: 'og:type', content: type },
      { hid: 'og:img', name: 'og:img', content: img },
    ],
  }
})

async function onSubmit(postPayload) {
  await postsStore.editPost(postPayload)
  await router.push(`/posts/${postPayload.id}`)
}
</script>

<style lang="scss" scoped></style>
