<template>
  <div class="mt-2">
    <h2 class="text-indigo-900 text-2xl mb-2">List of your tasks</h2>
    <div v-if="isTaskAvailable">
      <task-item
        v-for="task in tasks"
        :key="task"
        :task="task"
        @task-edit="taskEdit"
        @task-complete="taskComplete"
        @task-delete="taskDelete(task)"
      />
    </div>
    <div v-else class="mt-6 flex flex-col-reverse">
      <h3 class="text-gray-400 text-center">
        There is no task available, you can sleep for now.
      </h3>
      <h4 class="text-gray-400 text-center text-4xl mb-6">ლ ( ◕ ᗜ ◕ ) ლ</h4>
    </div>
  </div>
</template>

<script setup>
import { defineEmit, defineProps, computed } from '@vue/runtime-core'
import TaskItem from './TaskItem.vue'

const props = defineProps({
  tasks: Array,
})

const isTaskAvailable = computed(() => {
  if (props.tasks.length === 0) {
    return false
  } else {
    return true
  }
})

const emits = defineEmit(['taskDelete'])

const taskComplete = () => {
  console.log('Complete')
}
const taskEdit = () => {
  console.log('Editing...')
}
const taskDelete = (taskId) => {
  emits('taskDelete', taskId)
}
</script>
