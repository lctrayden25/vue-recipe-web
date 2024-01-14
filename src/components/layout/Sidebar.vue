<template>
  <div class="shadow-md h-full px-3 py-5 bg-white rounded-2xl">
    <Form @submit.prevent="handleSearch">
      <div class="min-w-[220px] flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <label class="text-md text-black">Meal Type</label>
          <Select class="h-[48px] p-2 border border-blue rounded-md">
            <option v-for="meal in mealTypeOptions" :key="meal.value" :value="meal.value">
              {{ meal.label }}
            </option>
          </Select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-md text-black">Cuisine</label>
          <Select class="h-[48px] p-2 border border-blue rounded-md">
            <option v-for="cuisine in cuisineOptions" :key="cuisine.value" :value="cuisine.value">
              {{ cuisine.label }}
            </option>
          </Select>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { Cuisine, MealType } from '@/utils/constant'
import { computed } from 'vue'

const mealTypeOptions = computed(() => {
  const options = Object.keys(MealType)?.map((option) => {
    return {
      label: option,
      value: option
    }
  })
  return options
})

const cuisineOptions = computed(() => {
  const options = Object.keys(Cuisine)?.map((option) => {
    return {
      label: option,
      value: option
    }
  })
  return options
})

const handleSearch = async () => {
  console.log('submitted')
}
</script>
