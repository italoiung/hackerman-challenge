<script lang="ts" setup>
const { params } = useRoute();
const { data: character, status } = await useFetch<Record<string, string | string[]>>(
  `http://swapi.dev/api/people/${params.id}`,
  { lazy: true }
);

type Resource =
  | {
      name: string;
      title?: never;
    }
  | {
      name?: never;
      title: string;
    };

const references = ref<Record<string, Resource[]>>({});
const loading = ref(false);

watch(
  character,
  async (value) => {
    if (!value) return;

    loading.value = true;

    for (const [key, prop] of Object.entries(value)) {
      if (Array.isArray(prop)) {
        references.value[key] = await Promise.all(
          prop.map(async (ref) => await $fetch<Resource>(ref))
        );
      }
    }

    loading.value = false
  },
  { immediate: true }
);

const info = computed(() => ({
  Filmes: references.value.films,
  Naves: references.value.starships,
  Veículos: references.value.vehicles,
  Espécie: references.value.species,
  // 'Planeta': references.value.homeworld,
}));

definePageMeta({
  middleware: ['is-auth'],
});
</script>

<template>
  <AppCard v-if="status === 'pending' || loading" subtitle="Carregando..." class="text-center">
    <template #icon>
      <NuxtImg src="/assets/IconeStormTrooper.png" class="inline-block mb-6 animate-pulse" />
    </template>
  </AppCard>
  <AppCard v-else-if="status === 'error'" title="Opa, houve um erro!" subtitle="O personagem não foi encontrado" class="text-center">
    <template #icon>
      <NuxtImg src="/assets/IconeStormTrooper.png" class="inline-block mb-6" />
    </template>
  </AppCard>
  <AppCard v-else :title="`Informações sobre ${character?.name}:`">
    <template v-for="(ref, label) in info">
      <p class="mt-4">{{ label }}</p>
      <div class="mt-2 flex flex-wrap gap-2">
        <AppBadge v-if="!ref || ref.length === 0" />
        <AppBadge v-else v-for="res in ref" :item="res" />
      </div>
    </template>
  </AppCard>
</template>
