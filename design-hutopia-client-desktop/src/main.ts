import './assets/base.css'

import { createApp } from "vue";
import { createPinia } from 'pinia'
import App from "./App.vue";
import router from "./router/index.js"

createApp(App)
    .use(router)
    .use(createPinia())
    .mount("#app");
