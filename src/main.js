import { 
    createApp
} from 'vue';

import 
    App 
from './App.vue';

import 
    Toaster
from '@meforma/vue-toaster';

import { 
    router 
} from '@/navigation/routes';

const app = createApp(App);

app.use(Toaster, {position: 'top'});
app.use(router);
app.mount('#app');

