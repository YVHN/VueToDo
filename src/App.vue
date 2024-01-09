<template>
  <transition>
    <router-view></router-view>
  </transition>
  
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
@import "./views/Todo/Todo.scss";

.v-enter-active,
.v-leave-active {
  transition: opacity 0.6s ease-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

