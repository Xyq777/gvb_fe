import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore(
  'gvbStore',
  () => {

    const theme = ref(true) //true for light them e
    const collapsed =ref(false)   //侧边栏收缩状态，默认不收缩

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
    function setCollapsed(localCollapsed :boolean) {
      collapsed.value=localCollapsed

    }

    return { theme, themeString, toggleTheme ,collapsed,setCollapsed}
  },
  {
    persist: true,
  },
)
