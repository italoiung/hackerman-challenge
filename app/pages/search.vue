<script lang="ts" setup>
type Response = {
  count: number;
  results: { url: string; }[];
} | null;

const response = ref<Response>(null);
const loading = ref(false);

const search = useDebounce(async (event: InputEvent) => {
  loading.value = true;
  const target = event.target as HTMLInputElement | null;
  response.value = await $fetch(`http://swapi.dev/api/people?search=${target?.value}`);
  loading.value = false;
});

const inputAttrs = computed(() => {
  if (!response.value || loading.value) return {};
  return response.value.count === 1
    ? { status: 'success' } as const
    : { status: 'error', helpText: 'Personagem inválido' } as const
});

const navigate = async () => {
  const responseResultUrl = response.value?.results[0]?.url;
  if (!responseResultUrl) return;

  const { pathname } = new URL(responseResultUrl);
  const id = pathname.split('/').at(-2);

  await navigateTo(`/characters/${id}`);
}

definePageMeta({
  middleware: ['is-auth'],
});
</script>

<template>
  <AppCard>
    <p class="mb-6">Agora, digite seu personagem favorito de Star Wars</p>
    <AppInput placeholder="Darth Vader" @keyup="search" v-bind="inputAttrs" />
    <AppButton :disabled="inputAttrs.status !== 'success'" @click="navigate">
      {{ loading ? 'Carregando...' : 'Próximo' }}
    </AppButton>
  </AppCard>
</template>