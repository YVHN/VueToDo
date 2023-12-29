<template>
    <Lists></Lists>
    <div>{{ dataUser }}</div>
</template>

<script>
import Lists from './components/Lists.vue';

export default {
    name: 'List',
    components: {
        Lists
    },
    props: ['param'],
    data(){
        return {
            
        }
    },
    mounted(){
        console.log(this.param);
    }
}

</script>

<style>
    
</style>