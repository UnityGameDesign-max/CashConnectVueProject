<script setup>

import 
PrimaryButton 
from '../../common/widgets/PrimaryButton.vue';

</script>

<script>
export default{
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        sigIn() {
        }
    },
    components: { PrimaryButton }
}
</script>
<template>

    <input
      name='username'
      v-model='username'
      type='text'
      placeholder='Username'
    >
    <input 
      name='password'
      v-mode='password'
      type='password'
      placeholder='Password'
    >

    <PrimaryButton button-title='LogIn' onClickM/>
</template>