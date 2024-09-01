import ViewPort from "@/components/ViewPort.vue";
import SettingsView from "@/views/settings/SettingsView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        component: SettingsView
      },
      {
        path: '/settings',
        name: 'settings',
        component: SettingsView
      }
    ]
})

export default router;