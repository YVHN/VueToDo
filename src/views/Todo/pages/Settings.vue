<template>
    <div class="div">Я НАСТРОЙКИ</div>
</template>

<script>
    export default {
        props: ['param'],
        mounted(){
            console.log(this.param);
        }
    }
</script>