<script>

export default{
    props: {
        user: {
            type: String,
            required: true,
        }
    }
}

</script>

<template>
    <div class='header'>
        <p class='header__user'>
            Welcome 
            <span class='header__username'>
                {{ user }}
            </span>
        </p>
    </div>
</template>

<style scoped>
    .header{
        padding: 2vh 3vw;
        box-shadow: 0 3px 8px 0 var(--Transparent);
        transition: 0.3s;
        background-color: var(--CharcoalBlack);
    }
    .header__user{
        color: var(--White);
    }
    .header__username{
        font-weight: 600;
        color: var(--LightGrey);
    }
</style>