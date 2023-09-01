<template>
  <section class="page">
    <div class="container">
      <div class="error">
        <!-- <div class="error-symbol">
          <h1 class="error-symbol-text digits">
            {{ header || $t('errors.oh') }}
          </h1>
        </div> -->
        <div class="error-body">
          <h1 class="error-body-title">
            {{ title }}
          </h1>
          <p class="error-body-description">
            {{ details }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ErrorContent',
  props: {
    title: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    header: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss">
@use 'sass:math';
@use '@/assets/scss/utils/mixins';

.page {
  @apply flex-1 md:items-center py-20;
  @include mixins.flex-x-center;
}
.error {
  @apply flex-wrap space-x-10 pb-6;
  @include mixins.flex-center;
  &-body {
    max-width: 32rem;
    @apply space-y-4 flex-1;
    &-title {
      @apply text-teal-500;
      // color: themify("c-error-title");
    }
    &-description {
      @apply text-lg;
      // color: themify("c-error-description");
    }
  }
  // @media (max-width: $md) {
  //   @include my(2rem);
  // }
  // @media (max-width: $sm) {
  //   @apply space-x-0 space-y-10 text-center;
  //   @include my(3rem);
  //   &-body {
  //     max-width: 100%;
  //   }
  // }
  // @media (max-width: $xs) {
  //   .error-body-title {
  //     font-size: 2rem;
  //   }
  // }
}
</style>
