<template>
    <Header :userName="$route.params.userName"></Header>
    <!-- Список или настройки -->
    <router-view v-slot="{ Component }">
        <component :is="Component"
        :data="sendingData"></component>
    </router-view>
</template>

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
            // пользователь
            currentUser: this.$route.params.userId,
            // база данных пользователей
            usersDATA: {
                '1': {
                    lists: [
                        {
                            name: 'Важное',
                            img: "../assets/icons/completed.svg",
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
                                },
                            ]
                        },
                        {
                            name: 'Сделанное',
                            img: "../assets/icons/completed.svg",
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
                                },
                            ]
                        },
                        {
                            name: 'Задачи',
                            img: "../assets/icons/completed.svg",
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
                                },
                            ]
                        },
                    ],
                    userLists: [
                        {
                            id: 1,
                            name: 'Работа',
                            tasks: [
                                {
                                    id: 1,
                                    name: "Помочь начальнику",
                                    status: false,
                                },
                                {
                                    id: 2,
                                    name: "Закончить отчёт",
                                    status: false,
                                },
                            ]
                        },
                        {
                            id: 2,
                            name: 'Домашние дела',
                            tasks: [
                                {
                                    id: 1,
                                    name: "Помыть полы",
                                    status: false,
                                },
                                {
                                    id: 2,
                                    name: "Убрать коробки",
                                    status: false,
                                },
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
            }
        }
    },
    computed: {
        // передача данных конкретного пользователя
        sendingData() {
            const bindData = {
                // получение данных
                list: this.usersDATA[this.currentUser],
                settings: {
                    name: "Марк",
                    age: 41,
                }
            }
            // получение пути роутера
            const pathName = this.$route.name;
            // выборка данных в зависимости от пути
            return bindData[pathName];
        },

    },
}
</script>

<style lang="scss"></style>