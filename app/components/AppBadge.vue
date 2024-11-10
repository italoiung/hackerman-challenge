<script lang="ts" setup>
type Props = {
  item?: {
    name: string;
    title?: never;
  } | {
    name?: never;
    title: string;
  };
};
defineProps<Props>();
</script>

<template>
  <span class="badge" :class="{ 'badge--empty': !item }">{{ item?.name || item?.title || 'N/A' }}</span>
</template>

<style lang="postcss" scoped>
.badge {
  @apply inline-block px-2 rounded-md;
  @apply text-small text-light-400;
  @apply border border-dark-400;
  @apply bg-dark-400;

  &--empty {
    @apply text-light-100/30 border-light-100/10 bg-[transparent];
  }
}
</style>