<template>
  <nuxt-link class="post-preview" :to="`/posts/${post.id}`">
    <div class="post-preview-top">
      <img class="post-preview-img" :src="post.img" :alt="post.title" />
    </div>
    <div class="post-preview-body body">
      <h3 class="body-title" :title="post.title">
        {{ post.title }}
      </h3>
      <p class="body-descr">
        {{ post.descr }}
      </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/utils/mixins' as mixins;

.post-preview {
  @apply rounded-xl overflow-hidden bg-white shadow-xl;
  &-img {
    @apply w-full;
    @include mixins.cover();
    @include mixins.set-height(16rem);
  }
  // &-body {
  //   @apply flex flex-col justify-center items-start gap-4 p-5;
  //   @include mixins.set-height(14rem);
  // }
}
.body {
  @apply flex flex-col justify-center items-start gap-4 p-5;
  @include mixins.set-height(14rem);
  &-title {
    @apply line-clamp-3;
  }
  &-descr {
    @apply text-lg line-clamp-2;
  }
}
</style>
