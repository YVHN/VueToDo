<template>
    <div class="tasks">
        <div class="tasks__list-name">{{ getList.name }}</div>
        <div class="tasks__list">
            <div class="tasks__list-item" v-for="task in this.$store.state.allTasks" :key="task.id">
                <div class="tasks__list-item-wrapper">
                    <input type="checkbox" name="" id="" class="tasks__list-item-status" @click="task.completed = !task.completed">
                    <p class="tasks__list-item-text">{{ task.name }}</p>
                </div>
                <img src="../assets/icons/cancel.svg" alt="" class="tasks__list-item-delete" @click="deleteTask(task)">
            </div>
        </div>
        <div class="tasks__list">
            <div class="tasks__list-item" v-for="task in getList.tasks" :key="task.id">
                <div class="tasks__list-item-wrapper">
                    <input type="checkbox" name="" id="" class="tasks__list-item-status" @click="task.completed = !task.completed">
                    <p class="tasks__list-item-text">{{ task.name }}</p>
                </div>
                <img src="../assets/icons/cancel.svg" alt="" class="tasks__list-item-delete" @click="deleteTask(task)">
            </div>
        </div>
        <div class="tasks__add-task">
            <input type="text" class="tasks__add-task-input" placeholder="Добавить задачу" v-model="newTaskName"
                @keyup.enter="addTask">
            <img src="../assets/icons/add-green.svg" alt="" class="tasks__add-task-button">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTaskName: "",
            tasks: "",
            taskId : 0,
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
        deleteTask(deleted) {
            this.$store.commit('deleteTask', deleted);
        },
    },
    computed: {
        getList(){
            return this.$store.getters.getList;
        }
    },

}
</script>

<style lang="scss">
.tasks {
    font-family: 'Roboto';
    padding: 50px;
    border-right: 5px solid black;
    border-left: 5px solid black;
    background: url('../assets/img/background.jpg') no-repeat;
    background-size: cover;
    height: auto;
    width: 100%;

    &__list-name {
        color: rgb(65, 184, 131);
        font-size: 40px;
        font-weight: 700;
    }

    &__list {
        margin-top: 40px;

        &-item {
            margin-bottom: 10px;
            border-radius: 15px;
            color: white;
            padding: 20px;
            width: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: space-between;

            &-wrapper {
                display: flex;
            }

            &-status {
                margin-right: 10px;
                width: 30px;
            }

            &-text {
                font-size: 22px;
            }

            &-delete {
                align-items: end;
                width: 22px;
                height: 22px;
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;

                &:hover {
                    transform: scale(1.15);
                }
            }
        }
    }

    &__add-task {
        border-radius: 20px;
        position: absolute;
        bottom: 20px;
        background: black;
        padding: 15px 15px;

        &-input {
            color: rgb(65, 184, 131);
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
</style>