
<script setup>

import { 
    authStore 
} from '@/common/provider/auth.store';





</script>

<template>
    <h1>Home has a dbData {{ authStore.dbCredentials.response.name }}</h1>
</template>
