<script setup>

import
    PrimaryButton
from '@/common/widgets/PrimaryButton.vue';

import {
    executeLoginUser
} from '@/providers/loginProvider';

</script>

<script>
export default {

    data() {
        return {
            username: '',
            password: '',
            isLoading: false
        };
    },
    methods: {
       signIn(){
        const {username, password} = this;
        this.isLoading = true;
        const loginRes = executeLoginUser({
            username,
            password
        })
        loginRes.then((userDetails)=> console.log(userDetails))
       }
    },
    components: { PrimaryButton }
}
</script>
<template>
    <form @submit.prevent="signIn">
        <input
          name='username'
          v-model='username'
          type='text'
          placeholder='Username'
        >
        <input 
          name='password'
          v-model='password'
          type='password'
          password
          placeholder='Password'
        >
        <PrimaryButton
          type='submit'
          button-title='login'
        />
    </form>

</template>