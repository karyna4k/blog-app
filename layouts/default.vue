<template>
  <div class="wrapper">
    <app-header />
    <NuxtPage />
  </div>
</template>

<script>
export default {
  components: {
    AppHeader: () => import('~/components/AppHeader.vue'),
  },
}
</script>
