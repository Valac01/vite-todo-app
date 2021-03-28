<template>
  <div class="mb-6">
    <h2 class="text-indigo-900 text-2xl mb-2">Create new task</h2>
    <form @submit.prevent="handleSubmit" class="flex">
      <label for="New Task" class="block flex-grow mr-3">
        <input
          v-model="newTaskField"
          type="text"
          name="New Task"
          class="mt-1 block w-full rounded-md bg-purple-100 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
          placeholder="New task name"
        />
      </label>
      <button
        type="submit"
        class="bg-green-300 text-gray-800 px-4 py-2 my-1 rounded-lg uppercase tracking-wider shadow-md"
      >
        Create
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { db } from '../firebase'

const taskCollection = db.collection('tasks')

const newTaskField = ref('')

const handleSubmit = async () => {
  try {
    taskCollection.add({
      discription: newTaskField.value,
      createdAt: Date.now(),
      complete: false,
    })
    newTaskField.value = ''
  } catch (error) {
    console.warn(error.message)
  }
}
</script>
