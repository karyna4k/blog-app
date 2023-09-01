<template>
  <section class="posts">
    <div class="container">
      <slot />
      <div class="posts-list">
        <post-preview v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPostList',
  components: {
    PostPreview: () => import('~/components/blog/PostPreview.vue'),
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.posts {
  &-list {
    @apply grid gap-6 my-4;
    grid-template-columns: repeat(auto-fill, minmax(17rem, 1fr));
  }
}
</style>
