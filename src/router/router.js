import { createRouter, createWebHistory } from "vue-router";
import Home                               from "@/pages/Home.vue";
import HowItWorks                         from "@/pages/HowItWorks.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/how',
        component: HowItWorks
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router