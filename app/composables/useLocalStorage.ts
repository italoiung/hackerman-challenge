export const useLocalStorage = (key: string) => {
  const state = useState<string | null>(key, () => null);
  const setState = (value: string) => {
    state.value = value;
    localStorage.setItem(key, value);
  }

  onMounted(() => {
    state.value = localStorage.getItem(key);
  });

  return computed({
    get: () => state.value || '',
    set: setState 
  });
}
