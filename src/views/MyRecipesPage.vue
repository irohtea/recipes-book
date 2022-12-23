<template>
  <section class="my-recipes">
    <div class="my-recipes__container">
      <h2 class="my-recipes__title">Your recipes</h2>
      <div class="my-recipes__body">
        <button type="button" class="my-recipes__button" @click="togglePopup">add new</button>
        <div class="my-recipes__items">
          <div class="my-recipes__item recipe" v-for="recipe in recipes" :key="recipe.id">
            <div class="recipe__body">
              <div class="recipe__title">{{ recipe.title }}</div>
              <div class="recipe__description"><p>{{ recipe.description }}</p></div>
              <div class="recipe__buttons">
                <router-link :to="`/my-recipe/${recipe.id}`">
                  <my-button class="recipe__view">View</my-button>
                </router-link>
                <delete-button class="recipe__delete" @click="deleteRecipe(recipe.id)">Delete</delete-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="popup" v-if="isPopupOpen">
    <form @submit.prevent="addNewRecipe" class="popup__form">
      <div class="popup__close" @click="togglePopup">X</div>
      <div class="popup__item">
        <label class="popup__label">Recipe name:</label>
        <my-input type="text" v-model="newRecipe.title" />
      </div>
      <div class="popup__item">
        <label class="popup__label">Description:</label>
        <textarea type="text" v-model="newRecipe.description" />
      </div>
      <div class="popup__ingredients">
        <label class="popup__label">Ingredient:</label>
        <div class="popup__ingredient" v-for="i in newRecipe.ingredientRows" :key="i">
          <my-input type="text" v-model="newRecipe.ingredients[i - 1]"/>
        </div>
        <my-button class="popup__add" @click="addIngredient">Add Ingredient</my-button>
      </div>
      <div class="popup__steps">
        <label class="popup__label">Steps:</label>
        <div class="popup__steps" v-for="i in newRecipe.stepsRows" :key="i">
          <textarea v-model="newRecipe.steps[i - 1]"/>
        </div>
        <my-button class="popup__add" @click="addStep" >Add Step</my-button>
      </div>
      <button type="submit" class="popup__submit-btn">Add New Recipe</button>
    </form>
  </div>
</template>

<script>
import { ref, onMounted} from 'vue'
import { db } from '@/firebase'
import { collection, onSnapshot, addDoc, deleteDoc, doc,  query, orderBy} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import MyInput from '@/components/UI/MyInput.vue'
import MyButton from '@/components/UI/MyButton.vue'
import DeleteButton from '@/components/UI/DeleteButton.vue'

export default {
  components: {
    MyButton,
    MyInput,
    DeleteButton
  },
  setup() {
    const recipesCollectionRef = collection(db, 'recipes')
    const recipesCollectionQuery = query(recipesCollectionRef, orderBy('date', 'desc'))
    const currentUser = ref('');
    const recipes = ref([])

    onMounted(() => {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          currentUser.value = uid
        } 
      });

        onSnapshot(recipesCollectionQuery, (querySnapshot) => {
          const fbRecipes = []
          querySnapshot.forEach((doc) => {
            const recipe = {
              user: doc.data().user,
              id: doc.id,
              title: doc.data().title,
              description: doc.data().description,
              ingredients: doc.data().ingredients,
              steps: doc.data().steps
            }
            fbRecipes.push(recipe)
          })
          recipes.value = fbRecipes.filter(item => item.user === currentUser.value)
      })
    })
    
    const newRecipe = ref({
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        ingredientRows: 1,
        stepsRows: 1
    })
    const isPopupOpen = ref(false)
    const togglePopup = () => {
      isPopupOpen.value = !isPopupOpen.value
      let body = document.querySelector('body')
      isPopupOpen.value ? body.classList.add('lock') : body.classList.remove('lock')
    }
    const addIngredient = () => {
      newRecipe.value.ingredientRows++
    }
    const addStep = () => {
      newRecipe.value.stepsRows++
    }
    const addNewRecipe = () => {
         addDoc(recipesCollectionRef, {
          user: currentUser.value,
          title: newRecipe.value.title,
          description: newRecipe.value.description,
          ingredients: newRecipe.value.ingredients,
          steps: newRecipe.value.steps,
          ingredientRows: newRecipe.value.ingredientRows,
          stepsRows: newRecipe.value.stepsRows,
          date: Date.now()
        })
 
        newRecipe.value = {
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        ingredientRows: 1,
        stepsRows: 1
      }

        togglePopup()
    }
    const deleteRecipe = (id) => {
      deleteDoc(doc(recipesCollectionRef, id));
    }
    return {
      recipes,
      newRecipe,
      isPopupOpen,
      togglePopup,
      addIngredient,
      addStep,
      addNewRecipe,
      deleteRecipe,
      recipesCollectionQuery,
      currentUser,
    }
  }
}
</script>
<style lang="scss" scoped>
//========================================================================================================================================================
.my-recipes {
  margin-top: 20px;
  // .my-recipes__container
  &__container {}
  // .my-recipes__title
  &__title {
    text-align: center;
  }
  // .my-recipes__body
  &__body {
    padding: 25px 0px 50px 0px;
  }
  // .my-recipes__button
  &__button {
    cursor: pointer;
    display: flex;
    gap: 15px;
    font-size: 18px;
    align-self: center;
    margin: 0 auto;
    justify-content:center;
    align-items: center;
    padding: 15px 25px;
    border: 2px solid var(--color-black);
    border-radius: 15px;
    text-transform: uppercase;
    color: var(--color-black);
    transition: all 0.3s ease 0s;
    @media (any-hover: hover){
      &:hover{
        color: var(--color-white);
        background-color: var(--color-green);
      }
    }
  }
  // .my-recipes__items
  &__items {
    margin: 30px 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(250px, 1fr));
    gap: 20px;
  }
  // .my-recipes__item
  &__item {
  }
}
//========================================================================================================================================================
.recipe {
		// .recipe__body
		&__body {
      position: relative;
      display: flex;
      flex-direction: column;
      border: 3px solid var(--color-black);
      border-radius: 15px;
      color: var(--text-color);
      box-shadow: 6px 6px 2px var(--color-green),
                  6px 6px 25px var(--color-blue);
      
    }

		// .recipe__title
		&__title {
      font-size: 20px;
      font-weight: 700;
      color: var(--color-black);
      padding: 20px 0px 20px 20px;
      border-bottom: 3px solid var(--color-black);
    }
		// .recipe__description
		&__description {
      padding: 15px;
      border-bottom: 3px solid var(--color-black);
    }
		// .recipe__buttons
		&__buttons {
      padding: 15px;
      display: flex;
      justify-content:center;
      align-items: center;
      gap: 10px;
    }
		// .recipe__view
		&__view {
   
    }
		// .recipe__delete
		&__delete {
      height: auto;
      padding: 10px 20px;
      border: 2px solid var(--color-black);
      box-shadow: 2px 2px 0px rgba(0, 0, 0);
      border-radius: 4px;
      font-weight: 700;
      transition: all 0.3s ease 0s;
      @media (any-hover: hover){
        &:hover{
          background-color: #f44a2f;
          box-shadow: 0 0 0px rgba(0, 0, 0, 0.3);
        }
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