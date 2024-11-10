export default defineNuxtRouteMiddleware(() => {
  if (!import.meta.client) return;
  const email = localStorage.getItem('email');
  if (!email || email.length <= 3 && !email.includes('@')) return navigateTo('/');
})