<template>
  <div>
    <new-task-form />
    <hr />
    <task-list />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'
</script>
