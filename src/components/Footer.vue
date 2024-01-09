<template>
  <footer class="border-t-2 w-full text-center p-5">Rayden Development {{ currentYear }}. All Right Reserved</footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const currentYear = ref(new Date().getFullYear());
</script>
