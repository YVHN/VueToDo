<template>
    <div class="lists">
        <!-- Фильтры -->
        <p class="lists__heading">Фильтры</p>
        <div class="lists__list">
            <div class="lists__list-item" 
            v-for="filter in filterList"
            :key="filter.id"
            @click="currentList = filter.name, chooseList(currentList), addFilter(filter.id)"
            :class="{active: currentList === filter.name}">
            <span class="lists__list-item-text">{{ filter.name }}</span></div>
        </div>
        <div class="lists__line"></div>
        <!-- Списки -->
        <p class="lists__heading">Списки</p>
        <div class="lists__list">
            <div class="lists__list-item" 
            v-for="list in getUserData"
            :key="list.id"
            @click="currentList = list.name, chooseList(list.name), addFilter('')"
            :class="{active: currentList === list.name}"><span class="lists__list-item-text">{{ list.name }}</span>
            <img src="../assets/icons/cancel.svg" alt="" 
            class="lists__list-item-delete"
            @click.stop="deleteList(list)"></div>
        </div>
        <!-- Добавление пользовательского списка -->
        <p class="lists__add-list">
            <input type="text" class="lists__add-list-input" 
            placeholder="Добавить список" 
            v-model="newListName"
            @keyup.enter="addList">
            <img src="../assets/icons/add.svg" alt="" class="lists__add-list-button"
            @click="addList">
        </p>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                // получение пользовательских списков
                newListName: "",
                currentList: "",
                firstlistId: 2,
                //Список фильтров
                filterList: [
                    {
                        name: "Все задачи",
                        id: 'ALL',
                    },
                    {
                        name: "Сделанное",
                        id: 'completed'
                    },
                    {
                        name: "Важное",
                        id: 'important'
                    },
                ],
            }
        },
        methods: {
            // добавление списка
            addList() {
                if(this.newListName){
                    this.firstlistId += 1;
                    const newList = {
                        id: this.firstlistId,
                        name: this.newListName,
                        tasks: [],
                    }
                    this.$store.commit('addList', newList);
                    this.newListName = "";
                }
            },
            // удаление списка
            deleteList(deletedList){
                deletedList.tasks.splice(0, deletedList.length)
                this.$store.commit('deleteList', deletedList);
                this.currentList = "";
            },
            addFilter(filter) {
                this.$store.commit('setFilterList', filter);
            },
            chooseList(list){
                this.$store.commit('chooseList', list);
            },
        },
        computed: {
            getUserData(){
                return this.$store.getters.getUserData;
            }
        },
        
    }
</script>

<style lang="scss">
.lists {
    font-family: 'Roboto';
    background: rgb(0, 78, 83);
    min-height: 91.2vh;
    min-width: 300px;
    max-width: 300px;
    padding: 30px 5px;
    border-right: 5px solid rgb(0, 52, 73);
    display: flex;
    flex-direction: column;

    &__heading {
        text-align: center;
        color: rgb(0, 255, 200);
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__list {
        padding: 0px 35px;
        &-item {
            cursor: pointer;
            font-size: 16px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            color: white;
            padding: 20px 25px 20px 0px;
            position: relative;

            &-icon {
                width: 18px;
                height: 18px;
                margin-right: 15px;
                position: relative;
                bottom: 2px;
            }
            &-delete {
                width: 18px;
                height: 18px;
                transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                cursor: pointer;
                position: absolute;
                top: 20px;
                right: 5px;
                &:hover{
                    transform: scale(1.15);
                }
            }
        }
        
    }

    &__line {
        margin: 10px 0px 20px 0px;
        height: 2px;
        background: rgb(255, 255, 255);
    }
    &__add-list{
        position: absolute;
        bottom: 20px;
        padding: 15px 35px;
        left: 0px;

        &-input {
            color: white;
            padding-left: 25px;
            background: none;
            font-size: 16px;
            &::placeholder{
                color: rgb(255, 255, 255);
            }
        }
        &-button{
            position: absolute;
            top: 32%;
            left: 35px;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
            &:hover{
                transform: scale(1.2);
            }
        }
    }
    .active {
        color: rgb(0, 255, 200);
    }
}
</style>