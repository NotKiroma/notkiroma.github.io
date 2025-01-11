import './assets/main.css'

import { createPinia } from "pinia";
import { createApp } from 'vue'
import App from './App.vue'
const pinia = createPinia()
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
pinia.use(piniaPluginPersistedstate);

createApp(App)
  .use(pinia)
  .mount('#app')
