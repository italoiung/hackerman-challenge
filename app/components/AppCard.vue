<script lang="ts" setup>
type Props = {
  title?: string;
  subtitle?: string;
};
defineProps<Props>();
</script>

<template>
  <div class="card">
    <slot name="icon"></slot>
    <p v-if="title" class="text-h1 mb-2">{{ title }}</p>
    <p v-if="subtitle" class="text-h2 mb-2">{{ subtitle }}</p>
    <slot></slot>
  </div>
</template>

<style lang="postcss" scoped>
.card {
  @apply p-6 rounded-lg;
  @apply bg-dark-600 shadow-strong;
}
</style>