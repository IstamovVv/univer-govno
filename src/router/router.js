import { createRouter, createWebHistory } from "vue-router";
import Home                               from "@/pages/Home.vue";
import HowItWorks                         from "@/pages/HowItWorks.vue";
import Meals                              from "@/pages/Meals.vue";
import Testimonals                        from "@/pages/Testimonals.vue";
import Pricing                            from "@/pages/Pricing.vue";
import Contacts                           from "@/pages/Contacts.vue";

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'How',
        path: '/how',
        component: HowItWorks
    },
    {
        name: 'Meals',
        path: '/meals',
        component: Meals
    },
    {
        name: 'Testimonials',
        path: '/testimonials',
        component: Testimonals
    },
    {
        name: 'Pricing',
        path: '/pricing',
        component: Pricing
    },
    {
        name: 'Contacts',
        path: '/contacts',
        component: Contacts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router