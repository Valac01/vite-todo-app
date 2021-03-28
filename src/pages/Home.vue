<template>
  <card-container>
    <div>
      <new-task-form @newTask="handleNewTask" />
      <hr />
      <task-list :tasks="state.tasks" @taskDelete="handleDelete" />
    </div>
  </card-container>
</template>

<script setup>
import { reactive } from 'vue'
import CardContainer from '../components/CardContainer.vue'
import NewTaskForm from '../components/NewTaskForm.vue'
import TaskList from '../components/TaskList.vue'

const state = reactive({
  tasks: [],
})

const handleNewTask = (task) => {
  state.tasks.push(task)
}

const handleDelete = (id) => {
  console.log(id)
  state.tasks.forEach((task, idx) => {
    if (task === id) {
      state.tasks.splice(idx, 1)
    }
  })
}
</script>
