<template>
  <div class="relative w-full flex items-center flex-col justify-start min-h-screen">
    <div class="max-w-6xl mx-auto h-full w-full p-5">
      <NavBar />
      <div class="pt-10">
        <slot />
      </div>
    </div>
    <div class="w-full pt-10">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Footer from './Footer.vue'
import NavBar from './NavBar.vue'
</script>
