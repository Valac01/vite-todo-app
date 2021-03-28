<template>
  <div>
    <h2 class="text-indigo-900 text-2xl mb-6">Edit task</h2>
    <div v-if="loading" class="mt-6 flex flex-col-reverse">
      <h3 class="text-gray-400 text-center">Wait for it... Still Loading...</h3>
      <h4 class="text-gray-400 text-center text-4xl mb-6">ᕕ( ՞ ᗜ ՞ )ᕗ</h4>
    </div>
    <form @submit.prevent="handleSubmit" v-else>
      <label for="New Task" class="block">
        <input
          v-model="task.discription"
          type="text"
          name="New Task"
          class="mt-1 block w-full rounded-md bg-purple-100 border-transparent focus:border-purple-500 focus:bg-white focus:ring-0"
          placeholder="New task name"
        />
      </label>
      <div class="flex mt-2 justify-between">
        <label class="inline-flex items-center">
          <input
            v-model="task.complete"
            type="checkbox"
            class="rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-purple-700 focus:ring-1 focus:ring-offset-2 focus:ring-purple-500"
          />
          <span class="ml-2">Completed</span>
        </label>

        <div class="flex">
          <button
            @click="cancleEdit"
            class="bg-white text-gray-500 px-4 py-2 my-1 rounded-lg uppercase tracking-wider mx-1"
          >
            Cancel
          </button>
          <button
            type="submit"
            class="bg-indigo-500 text-white px-4 py-2 my-1 rounded-lg uppercase tracking-wider shadow-md mx-1"
          >
            Save Edit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { db } from '../firebase'

const taskCollection = db.collection('tasks')

const route = useRoute()
const router = useRouter()

const id = route.params.id

const task = ref({})
const loading = ref(true)

taskCollection
  .doc(id)
  .get()
  .then((doc) => {
    task.value = {
      id: doc.id,
      ...doc.data(),
    }
    loading.value = false
  })
  .catch((error) => {
    console.warn(error.message)
  })

const handleSubmit = async () => {
  try {
    await taskCollection.doc(id).update({
      ...task.value,
    })
    await router.push({
      name: 'Home',
    })
  } catch (error) {
    console.warn(error.message)
  }
}

const cancleEdit = () => {
  router.push({
    name: 'Home',
  })
}
</script>
