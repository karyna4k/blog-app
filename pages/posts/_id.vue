<template>
  <div class="wrapper-content wrapper-content--fixed">
    <blog-post :post="post" @edit="editPost" @delete="deletePost" />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PostPage',
  components: {
    BlogPost: () => import('@/components/blog/Post.vue'),
  },
  props: {
    id: String,
  },
  async asyncData({ params }) {
    const post = await axios.get(
      `https://blog-nuxt-test-default-rtdb.firebaseio.com/posts/${params.id}.json`
    )
    return {
      post: post.data,
    }
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
    editPost() {
      this.$router.push({ name: 'create-id', props: {} })
    },
    deletePost() {
      this.$store.dispatch('deletePost', this.post.id)
      this.$router.push('/')
    },
  },
}
</script>
