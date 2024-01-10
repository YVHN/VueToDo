import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            currentListName: "",
            userData: [],
            filters: "",
            completed: "",
            important: "",
        }
    },
    mutations: {
        // Получение массив листов
        chooseList(state, payload){
            state.currentListName = payload;
        },
        // Закидываю фильтр
        setFilterList(state, payload) {
            state.filters = payload;
        },
        // Удаление / добавление списка
        addList(state, payload){
            const clone = state.userData;
            clone.push(payload);
            state.userData = clone;
        },
        deleteList(state, payload){
            if(payload.name == state.currentListName){
                state.currentListName = "";
            }
            const filtered = state.userData.filter(list => list.name != payload.name);
            state.userData = filtered;
        },
        // Удаление / добавление задачи
        addTask(state, payload){
            const list = state.userData.find(list => list.name === state.currentListName);
            list.tasks.push(payload);
        },
        deleteTask(state, payload){
            const list = state.userData.find(list => list.name === state.currentListName);
            const filtered = list.tasks.filter(task => task.id !== payload);
            list.tasks = filtered;
        },
        sendUserData(state, payload){
            state.userData = payload.lists;
        },
        toggleCompleted(state, payload){
           
        },
    },
    getters: {
        getUserData(state){
            return state.userData;
        },
       
        getFiltres(state) {
            return state.filters;
        },

        getList(state){
            const currentList = state.userData.find(userDataItem => userDataItem.name === state.currentListName);
            return currentList || {};
        }
    }
});
export default store;