import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Blog',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  css: [
    '@/assets/css/main.css',
    '@/assets/css/fonts.css',
    '@/assets/scss/main.scss',
  ],

  modules: ['@pinia/nuxt'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active-exact',
    },
  },

  nitro: {
    preset: 'static',
  },
})
