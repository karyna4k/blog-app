<template>
  <div class="wrapper-content wrapper-content--fixed">
    <app-promo />

    <blog-post-list :posts="postsLoaded">
      <h2>Последние добавленные</h2>
    </blog-post-list>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {
    AppPromo: () => import('~/components/AppPromo.vue'),
    BlogPostList: () => import('~/components/blog/PostList.vue'),
  },

  head() {
    const title = 'My blog'
    const descr = 'My blog with Nuxt.js!'
    const type = 'site'

    return {
      title,
      meta: [
        { hid: 'og: title', name: 'og: title', content: title },
        { hid: 'description', name: 'description', content: descr },
        { hid: 'og:description', name: 'og:description', content: descr },
        { hid: 'og:type', name: 'og:type', content: type },
      ],
    }
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPosts
    },
  },
  created() {
    this.$store.dispatch('initPosts')
  },
}
</script>

<style lang="scss" scoped>
.wrapper-content {
  @apply space-y-14;
}
</style>
