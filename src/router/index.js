import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import RecipeList from '../views/PracticeList.vue'
import NotFound from '../views/NotFound.vue'
import PracticeDetails from '@/views/PracticeDetails.vue'
import AddPractice from '@/views/AddPractice.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/practices', name: 'RecipeList', component: RecipeList },
  {
    path: '/practices/:id',
    name: 'PracticeDetails',
    component: PracticeDetails
  },
  {
    path: '/practice/add',
    name: 'AddPractice',
    component: AddPractice
  },
  // Catch-all route for 404 Not Found page
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
