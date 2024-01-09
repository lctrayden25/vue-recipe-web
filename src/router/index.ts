import HomeView from '@/views/HomeView.vue'
import NotFound from '@/views/NotFound.vue'
import RecipeDetail from '@/views/RecipeDetail.vue'
import SearchView from '@/views/SearchView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      // name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      component: SearchView
    },
    {
      path: '/recipe/:recipeId',
      component: RecipeDetail
    },
    {
      path: '/:404NotFound',
      component: NotFound
      // component: NotFound
    }
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
