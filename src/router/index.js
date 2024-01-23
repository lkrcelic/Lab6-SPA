import {createRouter, createWebHistory} from 'vue-router';

import Home from '../views/Home.vue';
import RecipeList from '../views/PracticeList.vue';
import RecipeDetail from '../views/PracticeDetail.vue';
import RecipeEdit from '../views/PracticeEdit.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/practices', name: 'RecipeList', component: RecipeList},
  {path: '/practices/:id', name: 'RecipeDetail', component: RecipeDetail},
  {path: '/edit-practice', name: 'RecipeEdit', component: RecipeEdit},
  // Catch-all route for 404 Not Found page
  {path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound}
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

/*
history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue')
  }
]
})
*/
