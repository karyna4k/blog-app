import { defineStore } from 'pinia'

type Post = {
  id: string
  title?: string
  descr?: string
  img?: string
  [key: string]: unknown
}

const BASE_URL = 'https://blog-nuxt-test-default-rtdb.firebaseio.com'

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [] as Post[],
  }),
  getters: {
    getPosts: (state) => state.posts,
  },
  actions: {
    async initPosts() {
      const data = await $fetch<Record<string, Omit<Post, 'id'>> | null>(
        `${BASE_URL}/posts.json`,
      )

      const postsArray: Post[] = []
      if (data) {
        for (const key of Object.keys(data)) {
          postsArray.push({ ...(data[key] as object), id: key } as Post)
        }
      }
      this.posts = postsArray
    },

    async addPost(post: Omit<Post, 'id'>) {
      const res = await $fetch<{ name: string }>(`${BASE_URL}/posts.json`, {
        method: 'POST',
        body: post,
      })
      this.posts.push({ ...(post as object), id: res.name } as Post)
    },

    async editPost(postEdit: Post) {
      await $fetch(`${BASE_URL}/posts/${postEdit.id}.json`, {
        method: 'PUT',
        body: postEdit,
      })
      const idx = this.posts.findIndex((p) => p.id === postEdit.id)
      if (idx !== -1) this.posts[idx] = postEdit
    },

    async deletePost(id: string) {
      await $fetch(`${BASE_URL}/posts/${id}.json`, { method: 'DELETE' })
      this.posts = this.posts.filter((p) => p.id !== id)
    },
  },
})
