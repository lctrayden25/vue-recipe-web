<template>
  <div class="w-full">
    <ul
      class="p-3 flex items-center justify-around max-w-sm mx-auto shadow-md border rounded-xl bg-white"
    >
      <li v-for="routeUrl in routeUrls" v-bind:key="routeUrl.key" class="hover:underline">
        <RouterLink :to="routeUrl.url">{{ routeUrl.label }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const routeUrls = [
  {
    label: 'Home',
    key: 'home',
    url: '/'
  },
  {
    label: 'Restaurant',
    key: 'restaurant',
    url: '/restaurant'
  },
  {
    label: 'Recipe',
    key: 'recipe',
    url: '/recipe'
  }
]
</script>
