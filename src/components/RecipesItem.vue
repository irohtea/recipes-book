<template>
   <div class="recipe">
      <div class="recipe__body">
         <router-link :to="`/recipe/${recipe.id}`" target="_blank">
            <div class="recipe__title">
               {{ recipe.title }}
            </div>
            <div class="recipe__img">
               <img :src="recipe.image" :alt="recipe.title">
            </div>
         </router-link>
         <!-- {{ recipeTime }} -->
         <!-- {{ recipe.missedIngredients }} -->
         <!-- <div class="recipe__missed-list">
            <div class="recipe__ingredient" v-for="ingredient in recipe.missedIngredients" :key="ingredient.id">
               {{ ingredient.name }}
               <button class="recipe__btn" @click="addMissed(ingredient.name)">+</button>
            </div>
         </div> -->
      </div>
   </div>
</template>

<script>
// import {ref} from 'vue'
// import {asyncComputed} from 'vue-async-computed'
// import axios from 'axios'
// import env from '@/env.js'

export default {
   name: 'recipes-item',
   props: {
      recipe: {
         type: Object,
         required: true
      },
   },
}
</script>

<style lang="scss" scoped>
.recipe {
   display: flex;
   justify-content: center;

   // .recipe__body
   &__body {
      position: relative;
      // cursor: pointer;
      padding: 15px;
      background-color: var(--color-white);
      border: 1px solid var(--color-black);
      box-shadow: 2px 2px 0px rgba(0, 0, 0);
      border-radius: 10px;
      transition: box-shadow 0.3s ease 0s;

      @media (any-hover: hover) {
         &:hover {
            box-shadow: 0 0 0px rgba(0, 0, 0);
         }
      }
   }

   // .recipe__img
   &__img {
      cursor: pointer;

      img {
         width: 100%;
         height: 220px;
         object-fit: cover;
         border: 1px solid var(--color-black);
      }
   }

   // .recipe__title
   &__title {

      position: absolute;
      top: 5px;
      left: -10px;
      cursor: pointer;
      margin-bottom: 10px;
      border-radius: 10px 10px 10px 0px;
      box-shadow: 2px 2px 0px rgba(0, 0, 0);
      padding: 10px;
      font-size: 18px;
      font-weight: 600;
      color: var(--color-white);
      background-color: var(--color-orange);

      @media (any-hover: hover) {
         &:hover {
            // color: var(--color-blue);
            text-decoration: underline;
         }
      }
   }
}
</style>