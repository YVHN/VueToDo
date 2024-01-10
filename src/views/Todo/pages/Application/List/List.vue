<template>
    <template class="container">
        <Lists />
        <Tasks />
    </template>
</template>

<script>
import Lists from './components/Lists.vue';
import Tasks from './components/Tasks.vue';

export default {
    name: 'List',
    components: {
        Lists,
        Tasks,
    },
    data(){
        return {
            
        }
    },
    
    computed : {
        getUserData(){
            return this.$store.getters.getUserData;
        }
    },
}

</script>

<style lang="scss">
    .container{
        display: flex;
    }
</style>