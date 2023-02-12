<script>
import Spinner from './Spinner.vue';


export default {
    props: {
        buttonTitle: {
            type: String,
            required: true
        },
        loading: {
            type: Boolean,
            required: false
        }
    },
    clicked() {
        this.$emit("clicked");
    },
    components: { Spinner }
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