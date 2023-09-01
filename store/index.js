import axios from 'axios'

export const state = () => ({
  posts: [],
})

export const getters = {
  getPosts(state) {
    return state.posts
  },
}

export const mutations = {
  setPosts(state, posts) {
    state.posts = posts
  },

  addPost(state, post) {
    state.posts.push(post)
  },
  editPost(state, postEdit) {
    const postIndex = state.posts.findIndex((post) => post.id === postEdit.id)
    state.posts[postIndex] = postEdit
  },
  DELETE_POST(state, id) {
    const posts = state.posts.filter((post) => post.id !== id)
    state.posts = posts
  },
}

export const actions = {
  async initPosts({ commit }, context) {
    try {
      const res = await axios.get(
        'https://blog-nuxt-test-default-rtdb.firebaseio.com/posts.json'
      )
      const postsArray = []

      for (const key in res.data) {
        postsArray.push({ ...res.data[key], id: key })
      }
      commit('setPosts', postsArray)
    } catch (e) {
      // console.log(e);
    }
  },
  async addPost({ commit }, post) {
    try {
      const res = await axios.post(
        'https://blog-nuxt-test-default-rtdb.firebaseio.com/posts.json',
        post
      )
      commit('addPost', { ...post, id: res.data.name })
    } catch (e) {
      console.log(e)
    }
  },
  async editPost({ commit, state }, post) {
    return await axios
      .put(
        `https://blog-nuxt-test-default-rtdb.firebaseio.com/posts/${post.id}.json`,
        post
      )
      .then((res) => {
        commit('editPost', post)
      })
  },
  async deletePost({ commit }, id) {
    try {
      await axios.delete(
        `https://blog-nuxt-test-default-rtdb.firebaseio.com/posts/${id}.json`
      )
      commit('DELETE_POST', id)
    } catch (error) {
      console.log(error)
    }
  },
}
