<template>
  <section class="new-post">
    <div class="container">
      <form class="form" @submit.prevent="onSubmit">
        <app-input v-model="post.title" placeholder="Название статьи"
          >Title:</app-input
        >
        <app-input v-model="post.descr" placeholder="Краткое описание статьи"
          >Description:</app-input
        >
        <app-input v-model="post.img" placeholder="https://example/image"
          >Image link:</app-input
        >
        <app-textarea v-model="post.content" placeholder="Текст статьи"
          >Content:</app-textarea
        >
        <app-input v-model="post.author" placeholder="Anonymous"
          >Author:</app-input
        >

        <div class="form-buttons">
          <!-- <div class="btn btn-danger" >Cancel</div> -->
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
  &-buttons {
    @apply gap-4;
    @include mixins.flex-center;
  }
}
</style>
