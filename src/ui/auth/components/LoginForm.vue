<script setup>

import
    PrimaryButton
from '@/common/widgets/PrimaryButton.vue';

import {
    executeLoginUser
} from '@/providers/loginProvider';

import { 
    authStore
} from '@/common/provider/auth.store';


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
        async signIn (){
        const {username, password} = this;
        this.isLoading = true;
        const loginRes = await executeLoginUser({
            username,
            password
        })
        this.isLoading = true;
        if(!loginRes.status){
            this.isLoading = false;
            this.$toast.error(
                loginRes, 
            );
        }else{
            authStore.addDbCredentials(loginRes.response)
            this.$router.push(
                {path: '/home'}
            )
        }
       }
    },
    components: { PrimaryButton }
}
</script>
<template>
    <form @submit.prevent="signIn">
        <div class='loginForm__container'>
            <h1>Welcome Back</h1>
            <p>Enter your credentials to access your account</p>
            <input
              name='username'
              size='46'
              v-model='username'
              type='text'
              placeholder='Username'
            >
            <input 
              name='password'
              v-model='password'
              type='password'
              size="46"
              placeholder='Password'
            >
            <PrimaryButton
                :disabled = 'isLoading'
                type='submit'
                button-title='Sign In'
            />
        </div>
    </form>
</template>

<style scoped>

h1{
    color: var(--DarkGrey);
    margin-bottom: 1px;
}
p{
    color: var(--LightGrey);
    margin-bottom: 40px;
}
.loginForm__container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
input{
    border: 0.5px solid var(--LightGrey);
    height: 40px;
    border-radius: 5px;
    margin-bottom: 2vh;
}
input:focus{
    outline: none;
    border-color: var(--WeatherBlue);
    box-shadow: 0 0 3px var(--WeatherBlue);
}
</style>