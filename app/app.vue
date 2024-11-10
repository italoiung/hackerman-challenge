
<template>
  <div class="absolute w-full min-h-full font-body text-regular text-light-200 bg-dark-800/90">
    <NuxtImg loading="lazy" src="/assets/StarWarsBackground.png" class="absolute w-full h-full object-cover opacity-20"/>
    <div class="relative p-4 mx-auto max-w-md w-full h-[50vh] min-h-[466px] flex flex-col gap-2">
      <NuxtImg v-if="$route.path === '/'" class="[@media(min-height:768px)]:translate-y-1/2 mt-auto" src="/assets/LogoStarWars.png" />
      <div class="[@media(min-height:768px)]:translate-y-1/2 mt-auto">
        <NuxtLayout>
          <NuxtPage/>
        </NuxtLayout>
      </div>
    </div>
  </div>
</template>
