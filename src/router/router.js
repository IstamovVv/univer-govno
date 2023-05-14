import { createRouter, createWebHistory } from "vue-router";
import Home                               from "@/pages/Home.vue";
import HowItWorks                         from "@/pages/HowItWorks.vue";
import Meals                              from "@/pages/Meals.vue";
import Testimonals                        from "@/pages/Testimonals.vue";
import Pricing                            from "@/pages/Pricing.vue";
import Contacts                           from "@/pages/Contacts.vue";

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
    },
    {
        path: '/testimonals',
        component: Testimonals
    },
    {
        path: '/pricing',
        component: Pricing
    },
    {
        path: '/contacts',
        component: Contacts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router