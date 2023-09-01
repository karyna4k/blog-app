<template>
  <div class="wrapper">
    <app-header />
    <nuxt />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/AppHeader.vue'),
  },
}
</script>
