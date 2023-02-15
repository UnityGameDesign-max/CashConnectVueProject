
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

onMounted(() => {
    
}) 

</script>


<template>
    <Header :user='authStore.dbCredentials.name'/>
</template>
