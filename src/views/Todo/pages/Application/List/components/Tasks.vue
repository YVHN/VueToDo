<template>
    <div class="tasks">
        <Transition>
            <span class="tasks__list-name">{{ $store.state.currentListName }}</span>
        </Transition>
        <Transition mode="out-in">
            <div :key="$store.state.currentListName">
                <TransitionGroup class="tasks__list" v-if="getFiltres" tag='div'  mode="out-in">
                    <TaskItem v-for="task in  filteredTasks" :key="task.id" :task="task" />
                </TransitionGroup>
                <TransitionGroup mode="out-in" class="tasks__list" v-else>
                    <TaskItem v-for="task in getList.tasks" :key="task.id" :task="task" @delete="deleteTask" />
                </TransitionGroup>
            </div>
        </Transition>

        <div class="tasks__add-task" v-if="getList.tasks">
            <input type="text" class="tasks__add-task-input" placeholder="Добавить задачу" v-model="newTaskName"
                @keyup.enter="addTask">
            <img src="../assets/icons/add-green.svg" alt="" class="tasks__add-task-button">
        </div>
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
            taskId: 0,
        }
    },
    methods: {
        addTask() {
            const newTask = {
                id: this.taskId + 1,
                name: this.newTaskName,
                important: false,
                completed: false,
            }
            this.$store.commit('addTask', newTask);
            this.newTaskName = "";
        },
        deleteTask(deletedId) {
            console.log(deletedId);
            this.$store.commit('deleteTask', deletedId);
        },
    },
    computed: {
        getList() {
            return this.$store.getters.getList;
        },
        // получение списка всех тасок

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

    &__list-name {
        background-color: rgba(#41b883, 0.8);
        color: rgb(255, 255, 255);
        font-size: 40px;
        font-weight: 700;
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