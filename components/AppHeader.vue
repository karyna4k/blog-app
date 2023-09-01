<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <nuxt-link class="logo h1" :to="{ name: 'index' }">
            WorldSteps
          </nuxt-link>
          <ul class="navbar-list">
            <li v-for="link in links" :key="link.title" class="navbar-item">
              <nuxt-link
                class="navbar-link"
                :title="link.title"
                :to="{ name: link.name }"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      links: [
        { title: 'Главная', name: 'index' },
        { title: 'Все посты', name: 'posts' },
        { title: 'Создать пост', name: 'create' },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
@use '@/assets/scss/utils/mixins' as mixins;
.navbar {
  @apply fixed inset-x-0 z-50 bg-white shadow-md;
  @include mixins.py(1.3rem);
  &-content {
    @apply flex justify-between items-center;
  }
  .logo {
    @apply text-3xl font-bold tracking-wider text-violet-700;
  }
  &-list {
    @apply space-x-8;
    @include mixins.flex-center;
  }
  &-link {
    @apply relative font-semibold text-violet-300;
    @apply before:hover:block before:hover:absolute before:hover:-bottom-2 before:hover:w-full before:hover:h-0.5 before:hover:bg-violet-300;
    &.active {
      @apply text-violet-500 before:hover:hidden;
    }
  }
}
</style>
