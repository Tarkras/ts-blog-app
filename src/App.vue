<script setup lang="ts">
  import Navbar from './components/Navbar.vue'
</script>

<template>
  <div class="section">
    <div class="container">
      <Navbar />
      <RouterView />
    </div>
  </div>
</template>
