<template>
  <button class="button"><slot></slot></button>
</template>

<style lang="postcss" scoped>
.button {
  @apply w-full py-2 mt-8 rounded-lg;
  @apply text-small font-bold text-secondary;
  @apply border border-primary;
  @apply bg-primary shadow-weak;
  @apply transition-all;

  &:disabled {
    @apply text-light-100/30;
    @apply border-light-100/10;
    @apply bg-[transparent];
    @apply pointer-events-none;
  }

  &:focus {
    @apply outline-none;
    @apply border-dark-400;
  }

  &:hover,
  &:focus {
    @apply shadow-medium;
  }
}
</style>