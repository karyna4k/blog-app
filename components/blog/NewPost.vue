<template>
  <section class="new-post">
    <div class="container">
      <h1>Создать новый пост</h1>
      <form class="form" @submit.prevent="onSubmit">
        <div class="form-controls">
          <app-input v-model="post.title" placeholder="Название статьи"
            >Title:</app-input
          >
          <app-input v-model="post.descr" placeholder="Краткое описание статьи"
            >Description:</app-input
          >
          <app-input v-model="post.img" placeholder="https://example/image"
            >Image link:</app-input
          >
          <app-input v-model="post.author" placeholder="Anonymous"
            >Author:</app-input
          >
          <app-textarea
            v-model="post.content"
            class="form-controls-full"
            placeholder="Текст статьи"
            >Content:</app-textarea
          >
        </div>
        <div class="form-buttons">
          <app-button btn-class="danger" @click="cancel">Отменить</app-button>
          <app-button>Сохранить</app-button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogNewPost',
  components: {
    AppInput: () => import('~/components/controls/AppInput.vue'),
    AppTextarea: () => import('~/components/controls/AppTextarea.vue'),
    AppButton: () => import('~/components/controls/AppButton.vue'),
  },
  props: {
    postEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.postEdit
        ? { ...this.postEdit }
        : {
            title: '',
            descr: '',
            img: '',
            content: '',
            author: '',
            created_at: Date.now(),
          },
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.post)
    },
    cancel() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/utils/mixins' as mixins;
.form {
  &-controls {
    @apply grid md:grid-cols-[repeat(2,_1fr)] gap-4;
    &-full {
      @apply col-span-2;
    }
  }
  &-buttons {
    @apply gap-4 mt-6;
    @include mixins.flex-center;
  }
}
</style>
