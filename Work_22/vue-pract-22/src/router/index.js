import { createWebHistory, createRouter } from "vue-router";

import Main_view from "@/views/Main_view.vue"
import Album_view from "@/views/Album_view.vue";

const routes = [
  { path: '/', component: Main_view },
  { path: '/album/:id', component: Album_view },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
