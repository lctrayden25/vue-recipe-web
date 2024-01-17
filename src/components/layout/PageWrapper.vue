<template>
  <div class="relative w-full flex items-center flex-col justify-start min-h-screen bg-[#EEF5FF]">
    <div class="max-w-7xl mx-auto h-full w-full p-5">
      <NavBar />
      <FlexWrapper>
        <slot name="sidebar" />
        <slot name="main" />
      </FlexWrapper>
    </div>
    <div class="w-full pt-10">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
import FlexWrapper from './FlexWrapper.vue'
import GridWrapper from './GridWrapper.vue'
import Footer from './Footer.vue'
import NavBar from './NavBar.vue'
</script>
