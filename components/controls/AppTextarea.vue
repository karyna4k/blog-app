<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <textarea
      :value="value"
      :placeholder="placeholder"
      wrap="soft"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
