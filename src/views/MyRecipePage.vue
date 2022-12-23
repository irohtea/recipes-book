<template>
  <section class="my-recipe">
    <div class="my-recipe__container">
      <div class="my-recipe__back">
        <router-link to="/my-recipes" ><span>&lt;</span> Back to recipes</router-link>
      </div>
      <div class="my-recipe__body">
        <div class="my-recipe__item">
          <div class="my-recipe__title">{{ myRecipe.title }}</div>
          <div class="my-recipe__description">
            <p>{{ myRecipe.description }}</p>
          </div>
          <ul class="my-recipe__ingredients">
            <div class="my-recipe__subtitle">Ingredients</div>
            <li class="my-recipe__ingredient" v-for="ingredient in myRecipe.ingredients" :key="ingredient">
              {{ingredient}}
            </li>
          </ul>
          <ul class="my-recipe__steps">
            <div class="my-recipe__subtitle">Steps</div>
            <li class="my-recipe__step" v-for="step in myRecipe.steps" :key="step">
              <span>{{ myRecipe.steps.indexOf(step) + 1}}</span>
              {{ step }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { useRoute } from 'vue-router'
import {ref, onBeforeMount} from 'vue'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase'

export default {
  setup() {
    const route = useRoute()
    const myRecipe = ref({})

    onBeforeMount(async () => {
      
      const docRef = doc(db, 'recipes', route.params.id);
      const docSnap = await getDoc(docRef);
      let fbRecipe = {}
      if (docSnap.exists()) {
        fbRecipe = docSnap.data()
      } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      }
      myRecipe.value = fbRecipe
    })
  
    return {
      myRecipe,
    }
  }
}
</script>

<style lang="scss" scoped>
.my-recipe {
		// .my-recipe__container
		&__container {}

		// .my-recipe__back
		&__back {
      margin: 25px 0px;
      color: var(--color-blue);
      font-weight: 600;
    }
		// .my-recipe__body
		&__body {
      position: relative;
      margin: 50px 0px;
      padding: 30px;
      box-shadow: 6px 6px 0px var(--color-green),
                  6px 6px 25px var(--color-green),
                  -6px -6px 0px var(--color-orange),
                  -6px -6px 25px var(--color-orange);
      border-radius: 15px;
      border: 3px solid var(--color-black);
      @media (max-width: 425px){
          padding: 15px;
      }
    }
    // .my-recipe__edit
		&__edit {
     position: absolute;
     top: 5px;
     right: 15px;
     cursor: pointer;
     path {
       transition: fill 0.3s ease 0s;
     }
     @media (any-hover: hover){
      &:hover{
        path {
          fill: var(--color-blue);
        }
      }
     }
    }
		// .my-recipe__item
		&__item {
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-size: 18px;
    }
		// .my-recipe__title
		&__title {
      align-self: flex-start;
      font-weight: 700;
      font-size: 24px;
      padding: 10px;
      background-color: var(--color-orange);
      color: var(--color-white);
      text-shadow: 2px 2px 0px var(--color-black);
      border: 1px solid var(--color-black);
      box-shadow: 2px 2px 0px rgba(0, 0, 0);
      border-radius: 15px
    }
		// .my-recipe__description
		&__description {
      border-bottom: 1px solid var(--color-black);
      padding: 0px 0px 20px 0px;
    }
		// .my-recipe__subtitle
		&__subtitle {
      display: inline-flex;
      padding: 10px;
      background-color: var(--color-green);
      color: var(--color-white);
      text-shadow: 2px 2px 0px var(--color-black);
      border: 1px solid var(--color-black);
      box-shadow: 2px 2px 0px rgba(0, 0, 0);
      border-radius: 15px;
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;

    }
		// .my-recipe__ingredients
		&__ingredients {
      // padding: 10px 10px;

    }
		// .my-recipe__ingredient
		&__ingredient {
      font-weight: 600;
    }
		// .my-recipe__steps
		&__steps {
      // padding: 10px;
    }
		// .my-recipe__step
		&__step {
      display: flex;
      gap: 10px;
     &:not(:last-child) {margin-bottom: 10px;}
      span {
        display: flex;
        justify-content:center;
        align-items: center;
        background-color: var(--color-orange);
        color: var(--color-white);
        flex: 0 0 30px;
        height: 30px;
        border: 1px solid var(--color-black);
        box-shadow: 2px 2px 0px rgba(0, 0, 0);
      }
    }
}
//========================================================================================================================================================
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 150;
  background-color: rgba(0, 0, 0, 0.305);
  padding: 105px 15px;
  display: flex;
  justify-content:center;
  align-items: center;
  overflow: auto;
  // .popup__form
  &__form {
      position: relative;
      overflow: auto;
      max-width: 768px;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      position: relative;
      padding: 50px;
      border: 3px solid var(--color-black);
      border-radius: 15px;
      box-shadow: 4px 4px 0px var(--color-green),
                  -4px -4px 0px var(--color-orange);;
      background-color: var(--color-white);

      @media (max-width: 425px){
        padding: 50px 20px;          
      }
      input {
        height: 40px;
        box-shadow: 2px 2px 0px var(--color-black);
      }
      textarea {
        display: block;
        padding: 15px;
        width: 100%;
        box-shadow: 2px 2px 0px var(--color-black);
        border: 1px solid var(--color-black);
        font-size: 18px;
        font-family: inherit;
        resize: none;
        height: 100px;
      }
    }
    // .popup__close
    &__close {
      position: absolute;
      top: 0px;
      right: 15px;
      font-size: 30px;
      padding: 10px;
      cursor: pointer;
      color: var(--color-orange);
    }
		// .popup__item
		&__item {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
		// .popup__label
		&__label {
      color: var(--text-color);
      font-weight: 600;
    }
		// .popup__ingredients
		&__ingredients {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
		// .popup__ingredient
		&__ingredient {}
		// .popup__add
		&__add {
      align-self: flex-start;
    }
		// .popup__steps
		&__steps {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
		// .popup__submit-btn
		&__submit-btn {
      cursor: pointer;
      display: flex;
      gap: 15px;
      font-size: 16px;
      align-self: center;
      margin: 0 auto;
      margin-top: 15px;
      justify-content:center;
      align-items: center;
      padding: 15px 20px;
      border: 2px solid var(--color-black);
      border-radius: 15px;
      text-transform: uppercase;
      color: var(--color-black);
      transition: all 0.3s ease 0s;
      @media (any-hover: hover){
        &:hover{
          color: var(--color-white);
          background-color: var(--color-blue);
        }
      }
    }
}
</style>