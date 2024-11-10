<script lang="ts" setup>
const email = useLocalStorage('email');

const login = useDebounce((event: InputEvent) => {
  const target = event.target as HTMLInputElement | null;
  if (target?.value) email.value = target.value;
}) 

const inputAttrs = computed(() => {
  if (!email.value) return {};
  return email.value.length > 3 && email.value.includes('@')
    ? { status: 'success' } as const
    : { status: 'error', helpText: 'Email inválido' } as const
});

const navigate = async () => {
  await navigateTo(`/search`);
}
</script>

<template>
  <AppCard title="Olá!">
    <p class="mb-6">Para começar seu teste, digite um e-mail:</p>
    <AppInput placeholder="exemplo@email.com" :value="email" @keyup="login" v-bind="inputAttrs" />
    <AppButton :disabled="inputAttrs.status !== 'success'" @click="navigate">Próximo</AppButton>
  </AppCard>
</template>