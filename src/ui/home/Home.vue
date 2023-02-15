
<script setup>

import { 
    onMounted
} from 'vue';

import { 
    authStore 
} from '@/common/provider/auth.store';

import 
    Header 
from '@/ui/home/components/Header.vue';

import{
    synchronizationProvider
} from '@/providers'

onMounted(async () => {
    let syncProviderInstance = new synchronizationProvider(
        authStore.dbCredentials.db
    );

}) 

</script>

<template>
    <p>{{ authStore.dbCredentials.db }}</p>
    <Header :user='authStore.dbCredentials.name'/>
</template>
