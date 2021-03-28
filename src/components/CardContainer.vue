<template>
  <div
    class="card-container bg-white shadow-md rounded-md px-2 py-2 justify-self-center"
  >
    <header class="bg-indigo-500 px-6 py-2 rounded-md shadow-lg">
      <h1 class="text-white text-4xl mb-3 font-semibold">Todo App</h1>
    </header>
    <div class="px-6 py-4">
      <slot />
    </div>
  </div>
</template>

<style scoped>
@screen lg {
  .card-container {
    width: 800px;
  }
}
</style>
