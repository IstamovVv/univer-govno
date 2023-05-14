import { createRouter, createWebHistory } from "vue-router";
import Home                               from "@/pages/Home.vue";
import HowItWorks                         from "@/pages/HowItWorks.vue";
import Meals                              from "@/pages/Meals.vue";

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/how',
        component: HowItWorks
    },
    {
        path: '/meals',
        component: Meals
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router