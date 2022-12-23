<template>
  <div class="recipes__list">
     <recipes-item 
     :recipe="recipe" 
     v-for="recipe in recipes" 
     :key="recipe.id"
      />
   </div>
</template>

<script>
import RecipesItem from '@/components/RecipesItem';

export default {
   components: {
      RecipesItem
   },
   name: 'recipes-list',
   props: {
      recipes: {
         type: Array,
         required: true,
      }
   }
}
</script>

<style lang="scss" scoped>
.recipes__list {
   display: grid;
   gap: 30px;
   grid-template-columns: repeat(auto-fit,minmax(300px, 1fr));
}
</style>