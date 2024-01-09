<template>
    <Header></Header>
    <router-view></router-view>
</template>

<script>
import Header from './Header/Header.vue';
import List from './List/List.vue';

export default {
    components: {
        // шапка
        Header,
        //список
        List
    },
    data() {
        return {
            // база данных пользователей
            userId: this.$route.params.id,
            //
            usersData: {
                '1': {
                    lists: [
                        {
                            id: 1,
                            name: 'Работа',
                            tasks: [
                                {
                                    id: 1,
                                    name: "Помочь начальнику",
                                    important: false,
                                    completed: false,
                                },
                                {
                                    id: 2,
                                    name: "Доделать отчёт",
                                    important: false,
                                    completed: false,
                                },
                            ]
                        },
                        {
                            id: 2,
                            name: "Домашние дела",
                            tasks: [
                                {
                                    id: 1,
                                    name: "Помыть полы",
                                    important: false,
                                    completed: false,
                                },
                                {
                                    id: 2,
                                    name: "Погулять с собакой",
                                    important: false,
                                    completed: false,
                                }
                            ]
                        },
                    ]
                },
            },
            userData: "",
        }
    },
    mounted() {
        this.userData = this.usersData[`${this.userId}`];
        this.$store.commit('sendUserData', this.userData);
        console.log(this.$store.state.userData);
    }
}
</script>

<style lang="scss"></style>