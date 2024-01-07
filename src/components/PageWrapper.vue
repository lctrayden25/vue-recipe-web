<template>
  <div class="relative w-full flex items-center justify-center h-screen">
    <div class="max-w-6xl mx-auto h-full w-full p-5">
        <NavBar />
        <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import NavBar from './NavBar.vue';
</script>
