<template>
  <div class="control">
    <label>
      <slot />
    </label>
    <input
      v-bind="$attrs"
      :value="value"
      :required="required"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    required: {
      type: Boolean,
      default: true,
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped></style>
