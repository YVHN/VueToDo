<template>
    <div class="lists">
        <p class="lists__heading">Списки</p>
        <!-- Стандартные списки -->
        <div class="lists__list">
            <div class="lists__list-item" 
            v-for="list in defaultLists"
            :key="list.id"
            @click="currentList = list.name, sendCurrentListName()"
            :class="{active: currentList === list.name}">
            <!-- <img :src="require(`${list.img}`)" alt="" class="lists__list-item-icon"> -->
            <span class="lists__list-item-text">{{ list.name }}</span></div>
        </div>
        <div class="lists__line"></div>
        <!-- Пользователськие списки -->
        <div class="lists__list">
            <div class="lists__list-item" 
            v-for="list in customLists"
            :key="list.id"
            @click="currentList = list.name, sendCurrentListName()"
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
        props: ['userLists'],
        data(){
            return {
                // получение стандартных списков пользователя
                defaultLists: this.userLists['lists'],
                // получение пользовательских списков
                customLists: this.userLists['userLists'],
                newListName: "",
                currentList: "",
                listId: 2,
            }
        },
        mounted(){
            
        },
        methods: {
            // добавление списка
            addList() {
                if(this.newListName){
                    this.listId += 1;
                    const newList = {
                        id: this.listId,
                        name: this.newListName,
                        tasks: [],
                    }
                    console.log("Снизу список")
                    this.customLists.push(newList);
                    console.log(newList);
                    console.log(this.customLists);
                    this.newListName = "";
                    this.updateListsData();
                }
            },
            // удаление списка
            deleteList(deletedList){
                const filtered = this.customLists.filter(list => list.name != deletedList.name );
                deletedList['tasks'].splice(0, deletedList['tasks'].length);
                this.customLists = filtered;
                this.currentList = "";
            },
            // передача имени списка родителю
            sendCurrentListName(){
                console.log("То, что я отправляю");
                console.log(this.currentList);
                this.$emit('getListName', this.currentList);
            },
            updateListsData(){
                console.log("Новый список отправлен")
                this.$emit('updateLists', this.customLists);
            }
        },
    }
</script>

<style lang="scss">
.lists {
    font-family: 'Roboto';
    background: rgb(53, 53, 53);
    min-height: 91.5vh;
    width: 300px;
    padding: 30px 5px;

    &__heading {
        text-align: center;
        color: rgb(65, 184, 131);
        font-size: 20px;
        font-weight: 700;

    }

    &__list {
        padding: 0px 35px;
        &-item {
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
        height: 1px;
        background: rgb(121, 121, 121);
        
    }
    &__add-list{
        position: absolute;
        bottom: 20px;
        padding: 15px 35px;

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
        color: rgb(65, 184, 131);
        font-weight: 700;
    }
}
</style>