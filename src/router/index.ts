import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../view/HomeView.vue";
import AuthView from "../view/AuthView.vue";
import Login from "../view/Auth/Login/Login.vue";
import SignUp from "../view/Auth/SignUp/SignUp.vue";
import ForgotPassword from "../view/Auth/ForgotPassword/ForgotPassword.vue";
import VerifyConfirmationCode from "../view/Auth/VerifyConfirmationCode/VerifyConfirmationCode.vue";
import ResetPassword from "../view/Auth/ResetPassword/ResetPassword.vue";

const router = createRouter({
    history: createWebHistory('/'),
    routes: [
        {
            name: 'Home',
            path: '/',
            component: HomeView
        },
        {
            path: '/account',
            redirect: '/auth'
        },
        {
            path: '/auth',
            redirect: '/auth/login'
        },
        {
            name: 'auth',
            path: '/auth',
            component: AuthView,
            children: [
                {
                    path: 'login',
                    component: Login
                },
                {
                    path: 'signup',
                    component: SignUp
                },
                {
                    path: 'forgotPassword',
                    component: ForgotPassword
                },
                {
                    path: 'verifyConfirmationCode',
                    component: VerifyConfirmationCode
                },
                {
                    path: 'resetPassword',
                    component: ResetPassword
                }
            ]
        },
        {
            name: 'team',
            path: '/team',
            component: () => import('../view/TeamView.vue')
        },
        {
            name: 'resume',
            path: '/team/:id',
            component: () => import('../view/ResumeView.vue')
        }
    ],
    scrollBehavior: () => {
        return { left: 0, top: 0 }
    }
})

export default router;