<template>
    <div class="container">
        <Lists :userLists="userData" @getListName="getActiveListName" @updateLists="updateListsData"></Lists>
        <Tasks :userTasks="updateAndSendChosenList" @addTaskToCompleted="updateCompletedList"></Tasks>
        <Suggestions></Suggestions>
    </div>
</template>

<script>
import Lists from './components/Lists.vue';
import Tasks from './components/Tasks.vue';
import Suggestions from './components/Suggestions.vue';

export default {
    name: 'List',
    components: {
        Lists,
        Tasks,
        Suggestions
    },
    props: ['data'],
    data(){
        return {
            // получение данных пользователя
            userData: this.data,
            currentListName: "",
        }
    },
    methods: {
        //получаю текущий активный список
        getActiveListName(name) {
            this.currentListName = name;
        },
        updateListsData(newData){
            console.log("Новый список cписков");
            this.data['userLists'] = newData;
            console.log(this.data['userLists']);
        },
        updateCompletedList(task){
            
        }
    },
    computed : {
        // Отправляю обновлённые данные выбранного списка
        updateAndSendChosenList(){
            console.log("Список получен");
            if(this.currentListName){
                const filtered = this.userData['userLists'].filter((list) => list.name == this.currentListName)[0];
                console.log(`Текущий список ${this.currentListName} найден и передан в задачи`);
                return filtered;
            } else {
                return "";
            }
        },
    },
    mounted(){
        console.log("Это в листе");
    }
}

</script>

<style lang="scss">
    .container{
        display: flex;
    }
</style>