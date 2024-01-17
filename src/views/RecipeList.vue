<template>
  <PageWrapper>
    <template #sidebar>
      <Sidebar :onHandleSelectChange="handleSelectChange" />
    </template>
    <template #main>
      <div v-if="!isLoadingRef">
        <div>
          <div
            class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 items-baseline justify-center place-items-center gap-10"
          >
            <RecipeCard
              v-for="recipe in recipeList"
              :key="recipe.id"
              :name="recipe.title"
              :image="recipe.image"
              :recipeId="recipe.id"
            />
          </div>
        </div>
        <div class="w-full max-w-sm mx-auto flex items-center justify-center gap-3 my-10">
          <button
            class="bg-black text-white rounded-md p-2 min-w-[100px] hover:opacity-70 disabled:cursor-not-allowed"
            @click="onPreviousPageClick"
            :disabled="currentPageRef === pageCountRef"
          >
            Previous
          </button>
          <form>
            <div>{{ currentPageRef || 1 }} / {{ pageCountRef || 1 }}</div>
          </form>
          <button
            class="bg-black text-white rounded-md p-2 min-w-[100px] hover:opacity-70 disabled:cursor-not-allowed"
            @click="onNextPageClick"
            :disabled="currentPageRef === pageCountRef"
          >
            Next
          </button>
        </div>
      </div>
      <div v-else class="flex items-center justify-center h-screen">Loading...</div>
    </template>
  </PageWrapper>
</template>

<script lang="ts" setup>
import PageWrapper from '@/components/layout/PageWrapper.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { onMounted, ref, watch } from 'vue'

import { API_URL, Cuisine, MealType } from '@/utils/constant'
import { recipeListData } from '@/utils/_receipeData'
import { useRoute, useRouter } from 'vue-router'
import Sidebar, { type FormDataType } from '@/components/layout/Sidebar.vue'

// const RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY
const RECIPE_API_KEY = ''

const router = useRouter()
const route = useRoute()
const currentPage = Number(route.query.page || 1)

const recipeList = ref<
  ReadonlyArray<{
    id: number
    title: string
    image: string
    imageType: string
  }>
>(undefined || recipeListData.result)

const paginationRef = ref<{
  totalResults: number | undefined
  offset: number | undefined
  number: number | undefined
}>({
  totalResults: 0,
  offset: 0,
  number: 0
})

const pageCountRef = ref<number>(1)
const currentPageRef = ref<number>(currentPage)
const isLoadingRef = ref<boolean>(false)

const mealTypeRef = ref<string>()
const cuisineRef = ref<string>()

const fetchRecipeList = async () => {
  try {
    isLoadingRef.value = true
    // const res = await fetch(
    //   `${API_URL}/recipes/complexSearch?apiKey=${RECIPE_API_KEY}&number=21&offset=${
    //     21 * (currentPageRef.value || 1)
    //   }`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   }
    // )
    // const data = await res?.json()

    // if (data) {
    //   recipeList.value = data?.results
    //   paginationRef.value.number = data?.number
    //   paginationRef.value.offset = data?.offset
    //   paginationRef.value.totalResults = data?.totalResults
    //   pageCountRef.value = Math.ceil(data?.totalResults / data?.number)
    // }

    console.log('cuisineRef: ', cuisineRef.value)
    isLoadingRef.value = false
  } catch (error) {
    console.log(error)
    alert('API Request Limitation Achieve')
    isLoadingRef.value = false
  }
}

const onNextPageClick = async () => {
  if (currentPageRef.value === pageCountRef.value) return
  currentPageRef.value++
  fetchRecipeList()
}

const onPreviousPageClick = async () => {
  if (currentPageRef.value === 1) return
  currentPageRef.value--
  fetchRecipeList()
}

const handleSelectChange = (value: FormDataType) => {
  const { mealType, cuisine } = value ?? {}
  mealTypeRef.value = mealType
  cuisineRef.value = cuisine
}

onMounted(() => {
  // fetchRecipeList()
  if (!route.query.page) {
    router.push({ path: '/recipe', query: { page: 1 } })
  }
})

watch(
  [paginationRef, isLoadingRef, currentPageRef, cuisineRef],
  () => {
    fetchRecipeList()
    console.log({
      isLoading: isLoadingRef.value,
      totalResults: paginationRef.value.totalResults,
      pageCount: pageCountRef.value,
      currentPage: currentPageRef.value
    })
    router.push({ path: '/recipe', query: { page: currentPageRef.value || 1 } })
  },
  { deep: true }
)
</script>
