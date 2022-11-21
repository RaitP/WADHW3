import { createRouter, createWebHashHistory } from 'vue-router'
import Main from '../views/main.vue'
import Signup from '../views/signup.vue'

const routes = [{
    path: '/',
    name: 'main',
    component: Main
    },
    {
        path: '/signup',
        name: 'signup',
        component: Signup
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router