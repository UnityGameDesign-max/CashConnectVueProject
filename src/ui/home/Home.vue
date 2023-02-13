
<script setup>

import { 
    onMounted
} from 'vue';

import { 
    authStore 
} from '@/common/provider/auth.store';

import { 
    splitRemoteUri 
} from '@/common/helpers/splitRemoteUriHelper';

import 
    Header 
from '@/ui/home/components/Header.vue';

onMounted(async() => {
}) 

</script>


<template>
    <Header :user='authStore.dbCredentials.name'/>
</template>
