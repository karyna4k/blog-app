<template>
  <div class="wrapper-content wrapper-content--fixed">
    <blog-new-post @submit="onSubmit" />
  </div>
</template>

<script>
export default {
  name: 'BlogCreate',
  components: {
    BlogNewPost: () => import('~/components/blog/NewPost.vue'),
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('addPost', post).then(() => {
        this.$router.push('/')
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
