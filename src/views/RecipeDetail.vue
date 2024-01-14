<template>
  <PageWrapper>
    <div class="flex flex-col w-full max-w-2xl mx-auto">
      <RouterLink to="/" class="hover:underline mb-5">Back</RouterLink>
      <div>
        <img :src="data.image" :alt="data.name" class="w-full"/>
      </div>
      <p class="text-2xl my-8 mr-auto">{{ data.title }}</p>
      <p v-html="data.summary" ></p>
    </div>
  </PageWrapper>
</template>
<script lang="ts" setup>
import PageWrapper from '@/components/layout/PageWrapper.vue'
import { ref } from 'vue'
// import { API_URL } from '@/utils/constant'
// import { useRoute } from 'vue-router'
import { recipeData } from '@/utils/_receipeData'

// const route = useRoute()
// const recipeId = route.params as unknown
// const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY
const recipeDataRef = ref<any>(recipeData)
const data = recipeDataRef?.value

// const fetchRecipeData = async () => {
//   try {
//     const res = await fetch(`${API_URL}/recipes/715415/information?apiKey=${RECIPE_API_KEY}`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     })

//     const data = await res?.json()

//   } catch (error) {
//     console.log(error)
//   }
// }
</script>
