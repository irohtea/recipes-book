<template>
  <section class="recipe">
      <div class="recipe__container">
         <div class="recipe__body">
            <div class="recipe__item item-recipe">
               <div class="item-recipe__box">
                  <h1 class="item-recipe__title">{{ recipe.title }}</h1>
                  <div class="item-recipe__top">
                    <div class="item-recipe__img">
                        <img :src="recipe.image" :alt="recipe.title">
                     </div>
                     <div class="item-recipe__info">
                        <div class="item-recipe__ingredients">
                            <h3>Ingredients:</h3>
                            <div class="item-recipe__list">
                                <div class="item-recipe__ingredient" v-for="ingredient in ingredients" :key="ingredient.number">
                                    <span>{{ ingredient.original }}</span> 
                                </div>
                            </div>
                        </div>
                        <div class="item-recipe__time">
                           <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.102 11.113C40.771 10.534 40.418 9.97 40.038 9.425C41.208 8.727 42 7.462 42 6C42 3.791 40.209 2 38 2C36.538 2 35.273 2.792 34.575 3.963C34.03 3.582 33.467 3.23 32.887 2.899C33.939 1.167 35.826 0 38 0C41.313 0 44 2.687 44 6C44 8.174 42.832 10.061 41.102 11.113ZM42 22C42 27.171 40.021 31.868 36.8 35.419L41.715 40.334C42.096 40.715 42.096 41.333 41.715 41.715C41.333 42.096 40.715 42.096 40.334 41.715L35.419 36.8C31.868 40.021 27.171 42 22 42C16.829 42 12.132 40.021 8.582 36.8L3.666 41.715C3.285 42.096 2.666 42.096 2.285 41.715C1.904 41.333 1.904 40.715 2.285 40.334L7.2 35.419C3.979 31.868 2 27.171 2 22C2 10.954 10.954 2 22 2C33.046 2 42 10.954 42 22ZM22 4C12.059 4 4 12.059 4 22C4 31.941 12.059 40 22 40C31.941 40 40 31.941 40 22C40 12.059 31.941 4 22 4ZM23 25.858V35C23 35.553 22.553 36 22 36C21.447 36 21 35.553 21 35V25.858C19.277 25.412 18 23.861 18 22C18 21.251 18.219 20.559 18.578 19.959L14.285 15.667C13.904 15.286 13.904 14.667 14.285 14.286C14.667 13.905 15.285 13.905 15.666 14.286L19.959 18.578C20.559 18.219 21.251 18 22 18C24.209 18 26 19.791 26 22C26 23.861 24.723 25.412 23 25.858ZM22 20C20.896 20 20 20.896 20 22C20 23.104 20.896 24 22 24C23.104 24 24 23.104 24 22C24 20.896 23.104 20 22 20ZM6 2C3.791 2 2 3.791 2 6C2 7.462 2.793 8.727 3.963 9.425C3.582 9.97 3.23 10.534 2.899 11.113C1.168 10.061 0 8.174 0 6C0 2.687 2.687 0 6 0C8.174 0 10.061 1.167 11.113 2.899C10.533 3.23 9.969 3.582 9.425 3.963C8.727 2.792 7.461 2 6 2Z" fill="black"/>
                           </svg>
                           <div class="item-recipe__preparation item" v-if="recipe.preparationMinutes !== -1">
                              <b>PREP:</b>{{ recipe.preparationMinutes }} mins
                           </div>
                           <div class="item-recipe__cooking item" v-if="recipe.preparationMinutes !== -1">
                              <b>COOK:</b>{{ recipe.readyInMinutes - recipe.preparationMinutes }} mins
                           </div>
                           <div class="item-recipe__ready item">
                              <b>Total:</b>{{ recipe.readyInMinutes}} mins
                           </div>
                        </div>
                        <div class="item-recipe__servings">
                           <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 48C20.447 48 20 47.553 20 47V1C20 0.447 20.447 0 21 0C21.553 0 22 0.447 22 1V47C22 47.553 21.553 48 21 48Z" fill="black"/>
                              <path d="M26.9992 31H20.9992C20.4462 31 19.9992 30.553 19.9992 30C19.9992 29.447 20.4462 29 20.9992 29H25.9952C25.8622 12.198 22.4102 2.34 20.9812 1.998C20.4292 1.998 19.9902 1.552 19.9902 0.999C19.9902 0.447 20.4462 0 20.9992 0C25.1872 0 27.9992 15.512 27.9992 30C27.9992 30.553 27.5522 31 26.9992 31Z" fill="black"/>
                              <path d="M7 18C3.141 18 0 14.859 0 11V1C0 0.447 0.447 0 1 0C1.553 0 2 0.447 2 1V11C2 13.757 4.243 16 7 16C9.757 16 12 13.757 12 11V1C12 0.447 12.447 0 13 0C13.553 0 14 0.447 14 1V11C14 14.859 10.859 18 7 18Z" fill="black"/>
                              <path d="M7 48C6.447 48 6 47.553 6 47V1C6 0.447 6.447 0 7 0C7.553 0 8 0.447 8 1V47C8 47.553 7.553 48 7 48Z" fill="black"/>
                           </svg>
                           <b>Servings:</b> {{recipe.servings }}
                        </div>
                     </div>
                  </div>
                  <div class="item-recipe__instructions">
                    <h3>Instructions:</h3>
                    <div class="item-recipe__list">
                        <div class="item-recipe__step" v-for="step in steps" :key="step.number">
                            <span>{{ step.number }}</span> 
                            {{ step.step }}
                        </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
  </section>
  <section class="similar-recipes">
    <div class="similar-recipes__container">
        <div class="similar-recipes__body">
            <h2 class="similar-recipes__title">Similar Recipes</h2>
            <swiper
                :modules="modules"
                :slides-per-view='4'
                :spaceBetween="25"
                :auto-height="true"
                navigation
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                >
                <swiper-slide class="similar-recipes__slide slide-similar" v-for="similar in similarRecipes" :key="similar.id">
                    <router-link :to="`/recipe/${similar.id}`" target="_blank">
                        <div class="slide-similar__body">
                            <h4 class="slide-similar__title">{{ similar.title }}</h4>
                            <div class="slide-similar__info">
                                <div class="slide-similar__total">
                                    <svg width="44" height="42" viewBox="0 0 44 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M41.102 11.113C40.771 10.534 40.418 9.97 40.038 9.425C41.208 8.727 42 7.462 42 6C42 3.791 40.209 2 38 2C36.538 2 35.273 2.792 34.575 3.963C34.03 3.582 33.467 3.23 32.887 2.899C33.939 1.167 35.826 0 38 0C41.313 0 44 2.687 44 6C44 8.174 42.832 10.061 41.102 11.113ZM42 22C42 27.171 40.021 31.868 36.8 35.419L41.715 40.334C42.096 40.715 42.096 41.333 41.715 41.715C41.333 42.096 40.715 42.096 40.334 41.715L35.419 36.8C31.868 40.021 27.171 42 22 42C16.829 42 12.132 40.021 8.582 36.8L3.666 41.715C3.285 42.096 2.666 42.096 2.285 41.715C1.904 41.333 1.904 40.715 2.285 40.334L7.2 35.419C3.979 31.868 2 27.171 2 22C2 10.954 10.954 2 22 2C33.046 2 42 10.954 42 22ZM22 4C12.059 4 4 12.059 4 22C4 31.941 12.059 40 22 40C31.941 40 40 31.941 40 22C40 12.059 31.941 4 22 4ZM23 25.858V35C23 35.553 22.553 36 22 36C21.447 36 21 35.553 21 35V25.858C19.277 25.412 18 23.861 18 22C18 21.251 18.219 20.559 18.578 19.959L14.285 15.667C13.904 15.286 13.904 14.667 14.285 14.286C14.667 13.905 15.285 13.905 15.666 14.286L19.959 18.578C20.559 18.219 21.251 18 22 18C24.209 18 26 19.791 26 22C26 23.861 24.723 25.412 23 25.858ZM22 20C20.896 20 20 20.896 20 22C20 23.104 20.896 24 22 24C23.104 24 24 23.104 24 22C24 20.896 23.104 20 22 20ZM6 2C3.791 2 2 3.791 2 6C2 7.462 2.793 8.727 3.963 9.425C3.582 9.97 3.23 10.534 2.899 11.113C1.168 10.061 0 8.174 0 6C0 2.687 2.687 0 6 0C8.174 0 10.061 1.167 11.113 2.899C10.533 3.23 9.969 3.582 9.425 3.963C8.727 2.792 7.461 2 6 2Z" fill="black"/>
                                    </svg>
                                    {{ similar.readyInMinutes}} mins
                                </div>
                                <div class="slide-similar__servings">
                                    <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 48C20.447 48 20 47.553 20 47V1C20 0.447 20.447 0 21 0C21.553 0 22 0.447 22 1V47C22 47.553 21.553 48 21 48Z" fill="black"/>
                                        <path d="M26.9992 31H20.9992C20.4462 31 19.9992 30.553 19.9992 30C19.9992 29.447 20.4462 29 20.9992 29H25.9952C25.8622 12.198 22.4102 2.34 20.9812 1.998C20.4292 1.998 19.9902 1.552 19.9902 0.999C19.9902 0.447 20.4462 0 20.9992 0C25.1872 0 27.9992 15.512 27.9992 30C27.9992 30.553 27.5522 31 26.9992 31Z" fill="black"/>
                                        <path d="M7 18C3.141 18 0 14.859 0 11V1C0 0.447 0.447 0 1 0C1.553 0 2 0.447 2 1V11C2 13.757 4.243 16 7 16C9.757 16 12 13.757 12 11V1C12 0.447 12.447 0 13 0C13.553 0 14 0.447 14 1V11C14 14.859 10.859 18 7 18Z" fill="black"/>
                                        <path d="M7 48C6.447 48 6 47.553 6 47V1C6 0.447 6.447 0 7 0C7.553 0 8 0.447 8 1V47C8 47.553 7.553 48 7 48Z" fill="black"/>
                                    </svg>
                                    {{ similar.servings }}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
        </div>
    </div>
  </section>
</template>

<script>

import {ref, onBeforeMount, onMounted} from 'vue'
import env from '@/env.js'
import axios from 'axios'
import {useRoute} from 'vue-router'

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
    const route = useRoute();
    const recipe = ref({});
    const similarRecipes = ref({});

    const steps = ref([])
    const ingredients = ref([])
      onBeforeMount(() => {
         axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/information?apiKey=${env.apiKey}&includeNutrition=false`)
         .then(response => {
            recipe.value = response.data
            steps.value = recipe.value.analyzedInstructions[0].steps
            ingredients.value = recipe.value.extendedIngredients
         })
         .catch(e => {
            console.log(e);
         })
      })
      onMounted(() => {
        axios.get(`https://api.spoonacular.com/recipes/${route.params.id}/similar?apiKey=${env.apiKey}&number=30`)
        .then(response => {
            similarRecipes.value = response.data
        })
      })
      const onSwiper = (swiper) => {
        return swiper
      };
      const onSlideChange = () => {
      };
      return {
         recipe,
         similarRecipes,
         route,
         steps,
         ingredients,
         onSwiper,
         onSlideChange,
         modules: [Navigation],
      }
   }
}
</script>
<style lang="scss" scoped>
h3 {
    margin-bottom: 10px;
}
.recipe {
    // .recipe__container
    &__container {}
    // .recipe__body
    &__body {
        margin-top: 30px;
    }
    // .recipe__item
    &__item {}
}
.item-recipe {
    // .item-recipe__box
    &__box {
        position: relative;
        padding: 15px;
        border: 3px solid var(--color-black);
        box-shadow: 4px 4px 0px var(--color-orange);
    }
    // .item-recipe__top
    &__top {
        position: relative;
        display: flex;
        margin-top: 50px;
        gap: 30px;
        @media (max-width: 768px){
        flex-direction: column;              
        }
    }
    // .item-recipe__title
    &__title {
        display: inline-flex;
        padding: 15px;
        font-size: 30px;
        font-weight: 700;
        font-style: italic;
        background-color: var(--color-orange);
        color: var(--color-white);
        text-shadow: 4px 4px 0px var(--color-black);
        @media (max-width: 992px){
            position: relative;
        }
        @media (max-width: 768px){
        font-size: 24px;
        }
        @media (max-width: 425px){
        font-size: 20px;
        text-shadow: 2px 2px 0px var(--color-black);
        }
    }
    // .item-recipe__img
    &__img {
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
    }
    // .item-recipe__info
    &__info {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
        margin-top: 15px;
        @media (max-width: 768px){
        justify-content: flex-start
        }
    
    }
    // .item-recipe__time
    &__time {
        display: flex;
        gap: 10px;
        @media (max-width: 375px){
        flex-direction: column;   
            
        }
    }
    // .item-recipe__servings
    &__servings {
        display: flex;
        gap: 5px;
        @media (max-width: 425px){
        flex-direction: column;   
        }
    }
    .item-recipe {
    // .item-recipe__ingredients
    &__ingredients {}
    // .item-recipe__list
    &__list {}
    // .item-recipe__ingredient
    &__ingredient {
        span {
            padding-left: 10px;
            border-left: 5px solid var(--color-green);
        }
    }
}
    // .item-recipe__instructions
    &__instructions {
        margin-top: 15px;
    }
    // .item-recipe__list
    &__list {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
    // .item-recipe__step
    &__step {
        display: flex;
        gap: 5px;
        span {
            display: flex;
            justify-content:center;
            align-items: center;
            font-weight: 700;
            flex: 0 0 20px;
            height: 20px;
            color: var(--color-white);
            background-color: var(--color-orange);
            box-shadow: 1px 1px 0px var(--color-black);
            border: 1px solid var(--color-black);  
        }
    }
}
.item {
   display: flex;
   flex-direction: column;
   gap: 10px;
}
//========================================================================================================================================================
.similar-recipes {
		// .similar-recipes__container
		&__container {}
		// .similar-recipes__title
		// .similar-recipes__body
		&__body {
            margin: 30px 0;
        }
		&__title {
            margin-bottom: 15px;
        }
		// .similar-recipes__slide
		&__slide {}
}
.slide-similar {
		// .slide-similar__body
		&__body {
            padding: 15px;
            display: flex;
            flex-direction: column;
            border: 2px solid var(--color-black);
            box-shadow: 2px 2px 0px rgba(0, 0, 0);
            border-radius: 12px;
        }
		// .slide-similar__title
		&__title {
            margin-bottom: 10px;
            border-bottom: 1px solid var(--color-black);
            padding-bottom: 10px;
        }
		// .slide-similar__info
		&__info {
            display: flex;
            justify-content:center;
            align-items: center;
            gap: 10px;
            svg {
                width: 24px;
                height: 24px;
            }
        }
		&__servings,
        &__total {
            display: flex;
            align-items: center;
            gap: 10px;
        }
         
		// .slide-similar__total
		&__total {
        }
		// .slide-similar__servings
		&__servings {
        }
}
</style>