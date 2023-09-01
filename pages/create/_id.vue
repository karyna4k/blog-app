<template>
  <div class="wrapper-content wrapper-content--fixed">
    <blog-new-post :post-edit="post" @submit="onSubmit" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BlogEdit',
  components: {
    BlogNewPost: () => import('~/components/blog/NewPost.vue'),
  },
  asyncData({ params }) {
    return axios
      .get(
        `https://blog-nuxt-test-default-rtdb.firebaseio.com/posts/${params.id}.json`
      )
      .then((res) => {
        return {
          post: { ...res.data, id: params.id },
        }
      })
      .catch((error) => console.error(error))
  },
  head() {
    const title = this.post.title
    const descr = this.post.descr
    const img = this.post.img
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
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post).then(() => {
        this.$router.push(`/posts/${post.id}`)
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
