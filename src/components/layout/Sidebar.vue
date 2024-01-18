<template>
  <div class="shadow-md h-full px-3 py-5 bg-white rounded-2xl">
    <form @submit.prevent="handleSearch">
      <div class="min-w-[220px] flex flex-col gap-8">
        <div class="flex flex-col gap-2 font-light">
          <label class="text-md text-black uppercase">Meal Type</label>
          <select
            class="h-[48px] p-2 border border-blue rounded-md text-gray-800 font-light"
            v-model="formData.mealType"
            name="mealType"
            @change="handleSelectChange"
          >
            <option value="">Please select</option>
            <option v-for="meal in mealTypeOptions" :key="meal.value" :value="meal.value">
              {{ meal.label }}
            </option>
          </select>
        </div>
        <div class="flex flex-col gap-2 font-light">
          <label class="text-md text-black uppercase">Cuisine</label>
          <select
            class="h-[48px] p-2 border border-blue rounded-md text-gray-800 font-light"
            v-model="formData.cuisine"
            name="cuisine"
            @change="handleSelectChange"
          >
            <option value="">Please select</option>
            <option v-for="cuisine in cuisineOptions" :key="cuisine.value" :value="cuisine.value">
              {{ cuisine.label }}
            </option>
          </select>
        </div>
        <button type="submit" class="p-2 bg-black text-white font-light rounded-md hover:opacity-70">Submit</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { Cuisine, MealType } from '@/utils/constant'
import { computed, reactive } from 'vue'

enum FilterSelect {
  MealType = 'mealType',
  Cuisine = 'cuisine'
}

export type FormDataType = {
  mealType: MealType | string
  cuisine: Cuisine | string
}

const formData = reactive<FormDataType>({
  mealType: "",
  cuisine: ""
})

const transformSelectOption = (obj: Record<string, string>) => {
  const options = Object.values(obj)?.map((option) => {
    return {
      label: option,
      value: option
    } as { label: string; value: string }
  })
  return options
}

const mealTypeOptions = computed(() => transformSelectOption(MealType))
const cuisineOptions = computed(() => transformSelectOption(Cuisine))

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
  // router.push({
  //   path: '/recipe',
  //   query: {
  //     ...route.query
  //   }
  // })

  emit('handleSelectChange', formValue)
}
</script>
