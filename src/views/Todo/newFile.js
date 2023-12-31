export default (await import('vue')).defineComponent({
components: {
Header,
List
},
data() {
return {
// пользователь
currentUser: this.$route.params.userId,

usersDATA: {
'1': {
lists: [
{
name: 'Важное',
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
};
},
computed: {
sendingData() {
const bindData = {
list: this.usersDATA[this.currentUser],
settings: {
name: "Марк",
age: 41,
}
};
const pathName = this.$route.name;
return bindData[pathName];
},
},
});
