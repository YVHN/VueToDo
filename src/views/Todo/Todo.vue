<template>
    <Header :userName="$route.params.userName"></Header>
    <router-view v-slot="{Component}">
        <component :is="Component" :param="'pupa'"></component>
    </router-view>
</template>

<!-- <ul>
            <li v-for="task in usersDATA[this.currentUser].tasks" :key="task.id">{{ task.name }}</li>
        </ul> -->

<script>
import Header from '../Todo/components/Header.vue';
import List from './pages/List/List.vue'
export default {
    components: {
        Header,
        List
    },
    data() {
        return {
            currentUser: this.$route.params.userId,
            usersDATA: {
                '1': {
                    lists: [
                        "Домашние дела",
                    ],
                    tasks: [
                        {
                            id: 1,
                            name: "Сходить к бабушке",
                            status: false,
                        },
                        {
                            id: 2,
                            name: "Помыть полы",
                            status: false,
                        }
                    ]
                },
                '2': {
                    lists: [
                        "Дела Максима",

                    ],
                    tasks: [
                        {
                            id: 1,
                            name: "Сходить нахуй",
                            status: false,
                        },
                        {
                            id: 2,
                            name: "Помыть член",
                            status: false,
                        }
                    ]
                },
            }
        }
    },
    mounted(){
        
    }
}
</script>

<style lang="scss"></style>