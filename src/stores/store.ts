import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'gvbStore',
  () => {
    const someState = ref('hello pinia')
    const theme = ref(true) //true for light them e
    const themeString = computed(() => (theme.value ? 'light' : 'dark'))
    function toggleTheme(localTheme?: boolean) {
      if (localTheme !== undefined) {
        theme.value = localTheme
      } else {
        theme.value = !theme.value
      }

      document.documentElement.style.colorScheme = themeString.value
      document.body.setAttribute('arco-theme', themeString.value)
    }

    return { theme, themeString, toggleTheme ,someState}
  },
  {
    persist: true,
  },
)
