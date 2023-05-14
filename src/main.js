import { createApp } from 'vue'
import App    from './App.vue'
import router from "@/router/router.js";

import '@/assets/styles/general.css'
import '@/assets/styles/styles.css'
import '@/assets/styles/queries.css'

const app = createApp(App);

app.use(router).mount('#app')
