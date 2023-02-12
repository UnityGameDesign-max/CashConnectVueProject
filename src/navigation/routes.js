
import { 
    createRouter,
    createWebHashHistory 
} from 'vue-router';

import 
    LoginIdentity
from '@/ui/auth/LoginIdentity.vue';

import 
    Home
from '@/ui/home/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginIdentity
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