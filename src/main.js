import { 
    createApp
} from 'vue'

import 
    App 
from './App.vue'

import 
    Toaster
from '@meforma/vue-toaster'

import { 
    router 
} from '@/router/routes'


createApp(App).use(
    Toaster,
    {position: 'top'}
).use(router)
.mount('#app')
