import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import AuthView from "../view/AuthView.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomeView
        },
        {
            name: 'Account',
            path: '/account',
            redirect: '/login'
        },
        {
            name: 'Login',
            path: '/login',
            component: AuthView
        },
        {
            name: 'signup',
            path: '/signup',
            component: AuthView
        },
        {
            name: 'team',
            path: '/team',
            component: ()=>import('../view/TeamView.vue')
        }
    ]
})

export default router;