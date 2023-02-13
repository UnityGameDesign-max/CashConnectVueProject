
import { 
    createRouter,
    createWebHashHistory 
} from 'vue-router';

import 
AuthIdentity
from '@/ui/auth/AuthIdentity.vue';

import 
    Home
from '@/ui/home/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: AuthIdentity
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})