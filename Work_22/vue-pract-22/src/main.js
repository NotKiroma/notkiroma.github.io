import './assets/main.css'

import { createPinia } from "pinia";
import { createApp } from 'vue'
import App from './App.vue'
const pinia = createPinia()

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
pinia.use(piniaPluginPersistedstate);
import router from '@/router/index.js';

createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')
