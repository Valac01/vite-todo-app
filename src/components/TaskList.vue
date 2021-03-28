<template>
  <div class="mt-2">
    <div v-if="loading" class="mt-6 flex flex-col-reverse">
      <h3 class="text-gray-400 text-center">Wait for it... Still Loading...</h3>
      <h4 class="text-gray-400 text-center text-4xl mb-6">ᕕ( ՞ ᗜ ՞ )ᕗ</h4>
    </div>
    <div v-else>
      <h2 class="text-indigo-900 text-2xl mb-2">List of your tasks</h2>
      <div v-if="isTaskAvailable">
        <task-item
          v-for="task in tasks"
          :key="task"
          :task="task"
          @task-edit="taskEdit(task.id)"
          @task-complete="taskComplete(task.id)"
          @task-delete="taskDelete(task.id)"
        />
      </div>
      <div v-else class="mt-6 flex flex-col-reverse">
        <h3 class="text-gray-400 text-center">
          There is no task available, you can sleep for now.
        </h3>
        <h4 class="text-gray-400 text-center text-4xl mb-6">ლ ( ◕ ᗜ ◕ ) ლ</h4>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { db } from '../firebase'
import TaskItem from './TaskItem.vue'

const taskCollection = db.collection('tasks')
let listener = null

const router = useRouter()

const isTaskAvailable = computed(() => {
  if (tasks.value.length === 0) {
    return false
  } else {
    return true
  }
})

const tasks = ref([])
const loading = ref(true)
const unsubscribe = taskCollection
  .orderBy('createdAt', 'desc')
  .onSnapshot((snapshot) => {
    tasks.value = []
    snapshot.forEach((doc) => {
      tasks.value.push({
        id: doc.id,
        ...doc.data(),
      })
    })
    loading.value = false
  })

onBeforeUnmount(() => {
  unsubscribe()
})

const taskComplete = async (taskId) => {
  try {
    await taskCollection.doc(taskId).update({
      complete: true,
    })
  } catch (error) {
    console.warn(error.message)
  }
}

const taskEdit = (taskId) => {
  router.push(`/edit/${taskId}`)
}

const taskDelete = async (taskId) => {
  try {
    await taskCollection.doc(taskId).delete()
  } catch (error) {
    console.warn(error.message)
  }
}
</script>
