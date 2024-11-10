<script lang="ts" setup>
type Props = {
  status?: 'error' | 'success';
  helpText?: string;
};
defineProps<Props>();
defineOptions({ inheritAttrs: false });
</script>

<template>
  <div class="input" :class="{
    'input--error': status === 'error',
    'input--success': status === 'success',
  }">
    <input v-bind="$attrs" />
    <span v-if="helpText" class="input__help-text">{{ helpText }}</span>
  </div>
</template>

<style lang="postcss" scoped>
.input {
  @apply relative;

  input {
    @apply w-full p-2 rounded-md;
    @apply text-tiny text-light-400;
    @apply border border-primary/30;
    @apply bg-dark-400;
    @apply transition-all;
  
    &:placeholder {
      @apply text-light-100/30;
    }
  
    &:focus {
      @apply outline-none;
      @apply border-primary;
    }
  }

  &--error input {
    @apply border-error;
  }

  &--success input {
    @apply border-success;
  }

  &__help-text {
    @apply absolute w-full top-full left-0 pt-1;
    @apply text-tiny;
  }

  &--error &__help-text {
    @apply text-error;
  }
}
</style>