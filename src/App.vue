<template>
  <div class="min-h-screen bg-gradient-to-t from-purple-600 to-purple-400 pt-10 px-4 a-grid">
    <router-view/>
    <app-footer />
  </div>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue'
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style>
.a-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
}
</style>