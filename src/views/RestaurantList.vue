<template>
  <PageWrapper>
    <div>
      <!-- <h1 class="text-2xl mb-5">Popular</h1> -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-baseline justify-center place-items-center gap-10"
      >
        Restaurant List
      </div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/layout/PageWrapper.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { onMounted, ref } from 'vue'
import { API_URL } from '@/utils/constant'

// const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY
const RECIPE_API_KEY = ''

const fetchRestaurantList = async () => {
  try {
    const res = await fetch(`${API_URL}/food/restaurants/search?apiKey=${RECIPE_API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await res?.json()
    console.log(data)
    // recipeList.value = data?.results
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  // fetchRestaurantList()
})
</script>
