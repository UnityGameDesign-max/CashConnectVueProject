
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

import {
    getAccountTransactions
} from '@/providers/homeProvider';


onMounted(async() => {
    const homeRes = await getAccountTransactions(
        authStore.dbCredentials.db
    );
    console.log(homeRes);
}) 

</script>


<template>
  
    <Header :user='authStore.dbCredentials.name'/>
</template>
