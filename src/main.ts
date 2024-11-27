
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "@/assets/base.css";
import "@/assets/theme.css";
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import piniaPersist from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
const pinia =createPinia()
pinia.use(piniaPersist)
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ArcoVue)

app.mount('#app')
