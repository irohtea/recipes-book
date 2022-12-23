import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage'
import RecipePage from '@/views/RecipePage'
import MyRecipesPage from '@/views/MyRecipesPage'
import MyRecipePage from '@/views/MyRecipePage'
import AboutPage from '@/views/AboutPage'
import LoginPage from '@/views/LoginPage'

import { auth } from '@/firebase'
const routes = [
   {
      path: '/',
      name: 'home',
      component: HomePage
   },
   {
      path: '/recipe/:id',
      name: 'Recipe Page',
      component: RecipePage
   },
   {
      path: '/my-recipes',
      name: 'My Recipes Page',
      component: MyRecipesPage,
      meta: {
         requiresAuth: true
      }
   },
   {
      path: '/my-recipe/:id',
      name: 'My Recipe Page',
      component: MyRecipePage,
   },
   {
      path: '/about',
      name: 'About Page',
      component: AboutPage,
   },
   {
      path: '/login',
      name: 'Login Page',
      component: LoginPage
   }
]

const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
})

router.beforeEach((to, from, next) => {
   if (to.path === '/login' && auth.currentUser) {
      next('/')
      return
   }
   if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login/')
   }
   next()
})

export default router
