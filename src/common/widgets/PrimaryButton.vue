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
     @click="clicked"
    >
        {{ buttonTitle }}
    </button>
</template>

<style scoped>

</style>