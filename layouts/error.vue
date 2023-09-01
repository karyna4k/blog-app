<template>
  <div class="wrapper-content wrapper-content--fixed">
    <error-content
      :header="notFound ? 404 : ''"
      :title="error.statusCode"
      :details="error.message"
    />
  </div>
</template>

<script>
export default {
  name: 'LayoutsError',
  props: {
    error: {
      type: Object,
      default: () => ({}),
    },
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
    notFound() {
      return this.error.statusCode === 404
    },
  },
}
</script>
