<script>
export default {
    props: {
        buttonTitle: String,
        loginClick: Function
    },

    clicked(){
        this.$emit('clicked')
    }
}
</script>

<template>
    <button
    class='primary-btn'
     @click="clicked"
    >
        {{ buttonTitle }}
    </button>
</template>

<style scoped>
    button{
        border: none;
        padding: 2vh 156px;
        border-radius: 5px;
        color: var(--White);
        cursor: pointer;
        background-color: var(--WeatherBlue);
    }
    button:hover{
        background-color: var(--DarkWeatherBlue);
    }
</style>