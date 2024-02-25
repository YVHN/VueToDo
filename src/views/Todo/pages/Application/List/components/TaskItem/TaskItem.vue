<template>
  <div class="tasks__list-item">
    <div class="tasks__list-item-wrapper">
      <input type="checkbox" :checked="task.completed" class="tasks__list-item-status"
        @click="() => task.completed = !task.completed">
      <p class="tasks__list-item-text">{{ task.name }}</p>
    </div>
    <div class="tasks__list-item-actions">
      <ImportantButton :class="{ important: task.important }" @click.stop="() => task.important = !task.important"
        class="tasks__list-item-actions-important"></ImportantButton>
      <img src="../../assets/icons/cancel.svg" alt="" class="tasks__list-item-actions-delete"
        @click="deleteTask(task.id)">
    </div>
  </div>
</template>

<script>
import ImportantButton from "./components/ImportantButton.vue"

export default {
  components: {
    ImportantButton
  },
  props: {
    task: Object,
  },
  methods: {
    deleteTask(deletedId) {
      this.$emit('delete', deletedId);
    },
    toggleCompleted(task) {
      this.$store.commit('toggleCompleted', task);
    }
  }
}
</script>

<style lang="scss">
.tasks__list {
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

    &-actions {
      user-select: none;
      display: flex;

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

      &-important {
        align-items: end;
        width: 22px;
        height: 22px;
        transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        cursor: pointer;
        margin-right: 30px;

        &:hover {
          transform: scale(1.15);
        }
      }
    }
  }
  .important {
    fill: rgb(214, 230, 0);
  }
}
</style>
