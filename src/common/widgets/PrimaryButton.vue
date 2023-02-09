<script>
export default {
    props: {
        onClickMethod: Function,
        buttonTitle: String
    }
}
</script>

<template>
    <button 
      @click='onClickMethod'
    >
        {{ buttonTitle }}
    </button>
</template>

<style scoped>

</style>