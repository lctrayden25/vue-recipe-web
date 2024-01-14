<template>
  <div class="shadow-md h-full px-3 py-5 bg-white rounded-2xl">
    <Form @submit.prevent="handleSearch">
      <div class="min-w-[220px] flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <label class="text-md text-black">Meal Type</label>
          <Select
            class="h-[48px] p-2 border border-blue rounded-md"
            v-model="formData.mealType"
            name="mealType"
            @change="handleSelectChange"
          >
            <option v-for="meal in mealTypeOptions" :key="meal.value" :value="meal.value">
              {{ meal.label }}
            </option>
          </Select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-md text-black">Cuisine</label>
          <Select
            class="h-[48px] p-2 border border-blue rounded-md"
            v-model="formData.cuisine"
            name="cuisine"
            @change="handleSelectChange"
          >
            <option v-for="cuisine in cuisineOptions" :key="cuisine.value" :value="cuisine.value">
              {{ cuisine.label }}
            </option>
          </Select>
        </div>
        <button type="submit">Submit</button>
      </div>
    </Form>
  </div>
</template>

<script lang="ts" setup>
import { Cuisine, MealType } from '@/utils/constant'
import { computed, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

enum FilterSelect {
  MealType = 'mealType',
  Cuisine = 'cuisine'
}

export type FormDataType = {
  mealType: MealType | null
  cuisine: Cuisine | null
}

const formData = reactive<FormDataType>({
  mealType: null,
  cuisine: null
})

const mealTypeOptions = computed(() => {
  const options = Object.values(MealType)?.map((option) => {
    return {
      label: option,
      value: option
    }
  })
  return options
})

const cuisineOptions = computed(() => {
  const options = Object.values(Cuisine)?.map((option) => {
    return {
      label: option,
      value: option
    }
  })
  return options
})

const handleSelectChange = (e: any) => {
  const { name, value } = e.target

  switch (name) {
    case FilterSelect.MealType:
      formData.mealType = value
      break
    case FilterSelect.Cuisine:
      formData.cuisine = value
      break
  }
  handleSearch(formData)
}

const emit = defineEmits(['handleSelectChange'])

const handleSearch = async (formValue: FormDataType) => {
  const { mealType, cuisine } = formValue ?? {}
  router.push({ path: '/recipe', query: { ...route.query, mealType, cuisine } })
  emit('handleSelectChange', formData)
}
</script>
