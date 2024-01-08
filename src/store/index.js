import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            currentList: "Задачи",
            currentListName: "Задачи",
            userData: [],
            allTasks: "",
            completed: "",
            important: "",
        }
    },
    mutations: {
        // Получение массив листов
        chooseList(state, payload){
            state.currentListName = payload;
        },
        // Удаление / добавление списка
        addList(state, payload){
            const clone = Object.assign({}, state.userData)
            clone.push(payload);
            state.userData = clone;
        },
        deleteList(state, payload){
            const filtered = state.userData.filter(list => list.name != payload.name);
            state.userData = filtered;
        },
        // Удаление / добавление задачи
        addTask(state, payload){
            state.currentList.tasks.push(payload); 
        },
        sendUserData(state, payload){
            state.userData = payload.lists;
        },
        setAllTasks(state){
            let tasks = [];
            state.userData.forEach(list => {
                list.tasks.forEach(task => {
                    tasks.push(task);
                })
            });
            const filtered = state.userData.filter(list => list.name == "Задачи");
            filtered.tasks = tasks;
        },
    },
    getters: {
        getUserData(state){
            return state.userData;
        },
        getList(state){
            const currentList = state.userData.find(userDataItem => userDataItem.name === state.currentListName);
            return currentList || {};
        }
    }
});
export default store;