<template>
    <template class="container">
        <div>{{ this.$store.state.userData }}</div>
        <Lists></Lists>
        <Tasks></Tasks>
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
    methods: {
    },
    watch: {
        getUserData: {
            handler(val) {
                console.log(val)
            },
            deep: true,
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