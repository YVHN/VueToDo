<template>
  <div class="tasks__list-item">
    <div class="tasks__list-item-wrapper">
        <input type="checkbox" name="" id="" class="tasks__list-item-status" @click="task.completed = !task.completed">
        <p class="tasks__list-item-text">{{ task.name }}</p>
    </div>
    <img src="../assets/icons/cancel.svg" alt="" class="tasks__list-item-delete" @click="deleteTask(task)">
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  }
}
</script>