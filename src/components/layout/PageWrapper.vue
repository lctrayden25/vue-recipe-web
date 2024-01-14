<template>
  <div class="relative w-full flex items-center flex-col justify-start min-h-screen bg-[#EEF5FF]">
    <div class="max-w-7xl mx-auto h-full w-full p-5">
      <NavBar />
      <div class="flex flex-col lg:flex-row gap-10 pt-10 justify-center">
        <slot name="sidebar" />
        <slot name="main" />
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

// const props = defineProps({
//   isSidebar: {
//     type: Boolean,
//     required: false
//   }
// })
// const { isSidebar } = props
</script>
