
<template>
  <div class="absolute inset-0 font-body bg-dark-800/90 flex">
    <NuxtImg loading="lazy" src="/assets/StarWarsBackground.png" class="absolute w-full h-full object-cover opacity-20"/>
    <div class="relative m-auto p-4 max-w-md w-full">
      <div class="p-6 rounded-lg bg-dark-600 shadow-strong">
        <p class="text-h1 text-light-200 mb-2">Olá!</p>
        <p class="text-regular text-light-200 mb-6">Para começar seu teste, digite um e-mail:</p>
        <input type="email" placeholder="exemplo@email.com" class="w-full p-2 rounded-md text-tiny border bg-dark-400 border-primary/30 shadow-medium placeholder:text-light-100/30" />
        <button class="w-full py-1 mt-8 text-small font-bold border border-light-100/10 text-light-100/30">Próximo</button>
      </div>
    </div>
  </div>
</template>
