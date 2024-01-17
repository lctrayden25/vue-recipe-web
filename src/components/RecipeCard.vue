<template>
  <RouterLink :to="`/recipe/${recipeId}`">
    <div
      class="flex items-center flex-col justify-start bg-white shadow-md w-full max-w-[312px] h-auto rounded-2xl p3 overflow-hidden cursor-pointer"
    >
      <div class="w-full">
        <img :src="image" :alt="name" class="w-full object-contain" />
      </div>
      <div class="p-3 text-center w-full font-light">
        {{ name }}
      </div>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
const props = defineProps(['name', 'image', 'recipeId'])

const { name, image, recipeId } = props ?? {}
</script>
