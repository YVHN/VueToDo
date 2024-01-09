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
                    // defaultLists: {
                    //     allTasks: {
                    //         id: 1,
                    //         name: "Задачи",
                    //         img: "../assets/icons/completed.svg",
                    //         tasks: []
                    //     }
                    // },
                    lists: [
                        {
                            id: 1,
                            name: "Задачи",
                            img: "../assets/icons/completed.svg",
                            tasks: [
                            {
                                    id: 1,
                                    name: "Помочь начальнику",
                                    important: true,
                                    completed: false,
                                },
                            ]
                        },
                        {
                            id: 2,
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
                                    important: true,
                                    completed: false,
                                },
                            ]
                        },
                        {
                            id: 3,
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
                                    important: true,
                                    completed: true,
                                }
                            ]
                        },
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
            },
            userData: "",
        }
    },
    mounted() {
        this.userData = this.usersData[`${this.userId}`];
        this.$store.commit('sendUserData', this.userData);
    }
}
</script>

<style lang="scss"></style>