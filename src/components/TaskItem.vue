<template>
  <div class="flex items-center bg-purple-100 rounded-lg px-4 py-2 my-1">
    <div
      @click="emit('taskComplete')"
      class="text-purple-800 text-lg flex-grow mr-2 cursor-pointer"
    >
      {{ task }}
    </div>
    <button
      @click="emit('taskEdit')"
      class="p-2 bg-white mx-1 rounded-full shadow-lg"
    >
      <svg
        class="h-3 text-blue-400 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z"
        />
      </svg>
    </button>

    <button
      @click="emit('taskDelete')"
      class="p-2 bg-white mx-1 rounded-full shadow-lg"
    >
      <svg
        class="h-3 text-red-400 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path
          d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineEmit, defineProps } from 'vue'

defineProps({
  task: String,
})

const emit = defineEmit(['taskComplete', 'taskEdit', 'taskDelete'])
</script>
