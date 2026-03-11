<template>
  <div class="wrapper-content wrapper-content--fixed">
    <blog-new-post @submit="onSubmit" />
  </div>
</template>

<script setup>
import { useRouter } from '#imports'
import { usePostsStore } from '@/stores/posts'

const postsStore = usePostsStore()
const router = useRouter()

async function onSubmit(post) {
  await postsStore.addPost(post)
  await router.push('/')
}
</script>

<style lang="scss" scoped></style>
