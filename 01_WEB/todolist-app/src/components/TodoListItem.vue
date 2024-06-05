<template>
  <li
    class="list-group-item"
    :class="{ 'list-group-item-dark': todoItem.completed }"
    @click="emit('toggle-completed', todoItem.id)"
  >
    <span class="pointer" :class="{ 'todo-done': todoItem.completed }">
      {{ todoItem.todo }} {{ todoItem.completed ? '(완료)' : '' }}
    </span>
    <span
      class="float-end badge bg-secondary btn"
      @click.stop="emit('delete-todo', todoItem.id)"
      >삭제</span
    >
  </li>
</template>

<script setup>
const props = defineProps({
  todoItem: { type: Object, required: true },
});
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
