<template>
    <div class="lists">
        <!-- Фильтры -->
        <div class="lists__wrapper">
            <p class="lists__heading">Фильтры</p>
            <div class="lists__list">
                <div class="lists__list-item" v-for="filter in filterList" :key="filter.id"
                    @click="currentList = filter.name, chooseList(currentList), addFilter(filter.id)"
                    :class="{ active: currentList === filter.name }">
                    <span class="lists__list-item-text">{{ filter.name }}</span>
                </div>
            </div>
            <div class="lists__line"></div>
            <!-- Списки -->
            <p class="lists__heading">Списки</p>
            <div class="lists__list">
                <div class="lists__list-item" v-for="list in getUserData" :key="list.id"
                    @click="currentList = list.name, chooseList(list.name), addFilter('')"
                    :class="{ active: currentList === list.name }"><span class="lists__list-item-text">{{ list.name
                    }}</span>
                    <img src="../assets/icons/cancel.svg" alt="" class="lists__list-item-delete"
                        @click.stop="deleteList(list)">
                </div>
            </div>
        </div>
        <!-- Добавление пользовательского списка -->
        <p class="lists__add-list">
        <p class="lists__add-list-heading">Добавить список</p>
        <input type="text" class="lists__add-list-input" placeholder="Название списка" v-model="newListName"
            @keyup.enter="addList($event)" ref="addInput">
        <img src="../assets/icons/add.svg" alt="" class="lists__add-list-button" @click="addList">
        </p>
    </div>
</template>

<script>
export default {
    data() {
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
        addList(e) {
            this.$refs.addInput.blur();
            if (this.newListName) {
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
        deleteList(deletedList) {
            deletedList.tasks.splice(0, deletedList.length)
            this.$store.commit('deleteList', deletedList);
            this.currentList = "";
        },
        addFilter(filter) {
            this.$store.commit('setFilterList', filter);
        },
        chooseList(list) {
            this.$store.commit('chooseList', list);
        }
    },
    computed: {
        getUserData() {
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
    justify-content: space-between;

    &__heading {
        text-align: center;
        color: rgb(0, 255, 200);
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 10px;
    }

    &__list {
        padding: 0px 35px;
        max-height: 450px;
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

                &:hover {
                    transform: scale(1.15);
                }
            }
        }

    }

    &__line {
        margin: 0px 0px 20px 0px;
        height: 3px;
        border-radius: 40px;
        background: rgba(255, 255, 255, 0.8);
    }

    &__add-list {
        position: relative;
        bottom: 20px;
        padding: 0px 35px;
        left: 0px;
        color: white;

        &-heading {
            font-size: 14px;
            margin-bottom: 4px;
        }

        &-input {
            padding: 8px 0px;
            color: inherit;
            cursor: pointer;
            padding-left: 25px;
            background: none;
            font-size: 16px;
            transition: background 0.3s ease-in-out;
            border-radius: 10px;

            &::placeholder {
                color: rgb(255, 255, 255);
            }

            &:focus,
            &:hover {
                background: rgba(0, 255, 200, 0.1);
            }
        }

        &-button {
            position: absolute;
            bottom: 10px;
            left: 40px;
            transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;

            &:hover {
                transform: scale(1.2);
            }
        }
    }

    .active {
        color: rgb(0, 255, 200);
    }
}
</style>