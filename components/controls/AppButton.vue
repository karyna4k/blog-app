<template>
  <button class="button" :class="btnClass" v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    btnClass: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style lang="scss" scoped>
@use '@/assets/scss/utils/mixins' as mixins;
.button {
  @apply px-4 py-2 rounded-3xl cursor-pointer border border-solid bg-white;
  @include mixins.flex-center;
  transition: all 0.3s linear;
  &.primary {
    @apply text-violet-500 border-violet-500;
    &:hover {
      @apply text-white bg-violet-500;
    }
  }
  &.danger {
    @apply text-red-500 border-red-500;
    &:hover {
      @apply text-white bg-red-500;
    }
  }

  &.white {
    @apply text-slate-500 border-slate-500;
    &:hover {
      @apply text-white bg-slate-500;
    }
  }
}
</style>
