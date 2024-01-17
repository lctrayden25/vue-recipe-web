<template>
  <footer class="border-t-2 w-full text-center p-5 font-light">© Rayden Li {{ currentYear }} All rights reserved.</footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>
