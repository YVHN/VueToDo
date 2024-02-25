<template>
    <div class="tasks">
        <Transition>
            <span class="tasks__list-name" v-show="!getSearchData">{{ getListName }}</span>
        </Transition>
        <Transition mode="out-in">
            <div :key="$store.state.currentListName">
                <!-- Результат поиска -->
                <TransitionGroup class="tasks__list" v-if="getSearchData" tag='div' mode="out-in">
                    <TaskItem v-for="task in searchTasks" :class="{completedTask: task.completed}" :key="task.id" :task="task" @delete="deleteTask"/>
                </TransitionGroup>
                <Transition tag="div" v-if="!getSearchData" mode="out-in">
                    <!-- Отфильтрованные задачи -->
                    <TransitionGroup class="tasks__list" v-if="getFiltres" tag='div' mode="out-in">
                        <TaskItem v-for="task in  filteredTasks" :class="{completedTask: task.completed}" :key="task.id" :task="task"/>
                    </TransitionGroup>
                    <TransitionGroup tag='div' class="tasks__list" v-else mode="out-in">
                        <!-- Задачи списка -->
                        <TaskItem v-for="task in listTasks" :class="{completedTask: task.completed}" :key="task.id" :task="task" @delete="deleteTask" />
                        <!-- Сделанные задачи -->
                        <div class="tasks__list-completed" v-if="$store.state.currentListName">
                            <TransitionGroup tag="div" class="tasks__list-completed-list">
                                <p class="tasks__list-completed-heading" v-if="completedTasks.length">{{ `Сделанные задачи
                                    ${completedTasks.length} шт.` }}</p>
                                <TaskItem :class="{completedTask: task.completed}" v-for="task in completedTasks" :key="task.id" :task="task" @delete="deleteTask" />
                            </TransitionGroup>
                        </div>
                    </TransitionGroup>
                </Transition>
            </div>
        </Transition>
        <Transition>
            <div class="tasks__add-task" v-if="getList.tasks">
                <input type="text" class="tasks__add-task-input" placeholder="Добавить задачу" v-model="newTaskName"
                    @keyup.enter="addTask">
                <img src="../assets/icons/add-green.svg" alt="" class="tasks__add-task-button">
            </div>
        </Transition>
    </div>
</template>

<script>
import TaskItem from './TaskItem/TaskItem.vue'
export default {
    components: {
        TaskItem,
    },
    data() {
        return {
            newTaskName: "",
            taskId: 20,
        }
    },
    methods: {
        addTask() {
            this.taskId++;
            const newTask = {
                id: this.taskId,
                name: this.newTaskName,
                important: false,
                completed: false,
            }
            this.$store.commit('addTask', newTask);
            this.newTaskName = "";
        },
        // передаю Id таски
        deleteTask(deletedId) {
            console.log(deletedId);
            this.$store.commit('deleteTask', deletedId);
        }
    },
    computed: {
        getListName(){
            return this.$store.getters.getListName;
        },
        getSearchData() {
            return this.$store.getters.getSearchData;
        },
        searchTasks() {
            const filtered = this.allTasks.filter(task => task.name.toLowerCase().includes(this.getSearchData.toLowerCase()));
            return filtered;
        },
        getList() {
            return this.$store.getters.getList;
        },
        // получение списка всех тасок
        completedTasks() {
            if (Object.keys(this.getList).length) {
                const filtered = this.getList.tasks.filter(task => task.completed);
                return filtered;
            }
        },
        listTasks() {
            if (Object.keys(this.getList).length) {
                const filtered = this.getList.tasks.filter(task => !task.completed);
                return filtered;
            }
        },
        allTasks() {
            let list = [];
            this.getUserData.forEach(element => {
                list = [...list, ...element.tasks]
            });
            return list;
        },
        filteredTasks() {
            if (this.getFiltres === 'ALL') {
                return this.allTasks;
            }
            const result = this.allTasks;
            return result.filter(item => item[this.getFiltres])
        },
        // Принимаю фильтр
        getFiltres() {
            return this.$store.getters.getFiltres;
        },
        getUserData() {
            return this.$store.getters.getUserData;
        },
    },

}
</script>

<style lang="scss">
.colors {
    color: #41B883;
    background: rgb(0, 121, 129);
    color: rgb(0, 255, 200);
    background: #00364b;
    background: rgb(0, 93, 129);
}

.tasks {
    font-family: 'Roboto';
    padding: 50px;
    background: url('../assets/img/background.jpg') no-repeat;
    background-size: cover;
    height: auto;
    width: 100%;
    max-height: 91.2vh;

    &__list {
        padding: 0px 40px;
        margin-top: 40px;
        max-height: 71vh;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(0, 206, 161);
            border-radius: 20px;
            border: 4px solid #00364b;
        }

        &::-webkit-scrollbar-track {
            background-color: #00364b;
            border-radius: 20px;
        }

        &-name {
            background-color: rgba(#41b883, 0.8);
            color: rgb(255, 255, 255);
            font-size: 40px;
            font-weight: 700;
        }
    }

    &__list-completed {
        padding: 0px 60px;
        margin-top: 40px;
        max-height: 71vh;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-thumb {
            background: rgb(0, 206, 161);
            border-radius: 20px;
            border: 4px solid #00364b;
        }

        &::-webkit-scrollbar-track {
            background-color: #00364b;
            border-radius: 20px;
        }

        &-heading {
            text-align: center;
            border-radius: 20px;
            padding: 10px 0px;
            margin-bottom: 20px;
            background: rgba(black, 0.6);
            color: rgb(255, 255, 255);
            font-size: 28px;
            font-weight: 700;
        }
    }

    &__add-task {
        border-radius: 20px;
        position: absolute;
        bottom: 20px;
        background: rgba(0, 0, 0, 0.8);
        padding: 15px 15px;

        &-input {
            color: rgb(0, 255, 200);
            padding-left: 20px;
            background: none;
            font-size: 16px;
            width: 300px;

            &::placeholder {
                color: inherit;
            }
        }

        &-button {
            position: absolute;
            top: 35%;
            left: 10px;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;

            &:hover {
                transform: scale(1.2);
            }
        }
    }
    .completedTask{
        background-color: #00532e;
        opacity: 0.7;
        text-decoration: line-through;
        .tasks__list-item-actions{
            display: none;
        }
    }
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>