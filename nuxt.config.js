import axios from 'axios'

export default {
  target: 'static',
  ssr: false,

  loading: {
    color: '#9234eb',
    failedColor: '#FF392B',
    height: '2px',
  },
  loadingIndicator: '~/loading.html',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Blog',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [({ isLegacy }) => isLegacy && 'axios'],
    extractCSS: true,
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  router: {
    linkActiveClass: 'active',
    linkExactActiveClass: 'active-exact',
  },

  generate: {
    routes() {
      return axios
        .get('https://blog-nuxt-test-default-rtdb.firebaseio.com/posts.json')
        .then((res) => {
          // Get id
          const postsArray = []
          for (const key in res.data) {
            postsArray.push({ ...res.data[key], id: key })
          }
          // Routes
          return postsArray.map((post) => {
            return '/posts/' + post.id, '/create/' + post.id
          })
        })
    },
  },
}
