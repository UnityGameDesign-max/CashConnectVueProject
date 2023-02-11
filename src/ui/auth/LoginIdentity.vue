<script setup>

import 
    LoginForm 
from './components/LoginForm.vue';

</script>


<template>
    <div class='identity__card'>
        <LoginForm />
    </div>
    
</template>

<style scoped>
.identity__card{
    background-color: var(--White);
    box-shadow: 0 4px 8px 0 var(--Transparent);
    transition: 0.3s;
    border-radius: 4px;
    width: 90%;
    max-width: 600px;
    padding-block: 30px;
    margin: 70px auto;
}
.identity__card:hover{
    box-shadow: 0 8px 16px 0 var(--Transparent);
}
</style>