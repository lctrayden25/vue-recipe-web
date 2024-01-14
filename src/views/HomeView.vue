<template>
  <PageWrapper>
    <template #main>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-baseline justify-center place-items-center gap-10"
      >
        <RecipeCard
          v-for="recipe in recipeList"
          v-bind:key="recipe.id"
          :name="recipe.title"
          :image="recipe.image"
          :recipeId="recipe.id"
        />
      </div>
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/layout/PageWrapper.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { onMounted, ref } from 'vue'

import { API_URL } from '@/utils/constant'
import { recipeListData } from '@/utils/_receipeData'

// const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY

const recipeList = ref<
  ReadonlyArray<{
    id: number
    title: string
    image: string
    imageType: string
  }>
>(undefined || recipeListData.result)

// const fetchRecipeList = async () => {
//   try {
//     const res = await fetch(
//       `${API_URL}/recipes/complexSearch?apiKey=${RECIPE_API_KEY}&cuisine=thai`,
//       {
//         method: 'GET',
//         headers: {
//           'Content-type': 'application/json'
//         }
//       }
//     )
//     const data = await res?.json()
//     recipeList.value = data?.results
//     console.log(data)
//   } catch (error) {
//     console.log(error)
//   }
// }

onMounted(() => {
  // fetchRecipeList()
})
</script>
