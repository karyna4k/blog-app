<template>
  <section class="post">
    <div class="container">
      <article v-if="post" class="post">
        <div class="post-header">
          <h1 class="post-title">
            {{ post.title }}
          </h1>
          <div class="post-meta meta">
            <time class="meta-date" :datetime="getDateInIso">{{
              getConvertedDate
            }}</time>
            <span v-if="post.author" class="meta-author">{{
              post.author
            }}</span>
          </div>
        </div>
        <div class="post-image">
          <img :src="post.img" :alt="post.title" />
        </div>
        <p class="post-content">
          {{ post.content }}
        </p>
        <div class="post-buttons">
          <app-button btn-class="white" @click="editPost"
            >Редактировать</app-button
          >
          <app-button btn-class="danger" @click="deletePost"
            >Удалить</app-button
          >
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogPost',
  components: {
    AppButton: () => import('@/components/controls/AppButton.vue'),
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    getConvertedDate() {
      return new Date(this.post.created_at).toLocaleDateString()
    },
    getDateInIso() {
      return new Date(this.post.created_at).toISOString()
    },
  },
  methods: {
    editPost() {
      this.$emit('edit')
    },
    deletePost() {
      this.$emit('delete')
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/utils/mixins' as mixins;
.container {
  @apply max-w-4xl px-4;
}
.post {
  &-title {
    @apply mb-6 font-medium text-center;
  }
  &-image {
    @apply relative my-5 py-8;
    &::before {
      @apply absolute inset-y-3 inset-x-1/4 border-4 border-solid border-red-600;
      @include mixins.stretch-x(35%);
      content: '';
    }
    img {
      @apply w-full;
      @include mixins.cover();
      @include mixins.set-height(25rem);
    }
  }
  &-content {
    @apply text-lg whitespace-pre-line;
  }
  &-buttons {
    @apply gap-6 mt-8;
    @include mixins.flex-center;
  }
}
.meta {
  @apply mb-8 text-sm text-center uppercase;

  &-date {
    @apply relative pr-7;
    &::after {
      @apply absolute top-1/2 right-2 bg-slate-400;
      @include mixins.set-size(0.5rem);
      content: '';
      transform: translateY(-50%) rotate(45deg);
    }
  }
}
</style>
