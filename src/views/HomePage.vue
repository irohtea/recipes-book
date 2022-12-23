<template>
   <section class="search">
      <div class="search__container">
         <div class="search__body">
            <div class="search__box">
               <my-input placeholder="Macaroni with a chicken strips..." v-model="searchQuery" class="search__input"></my-input>
               <my-button @click="searchFetch" class="search__btn">Find me a recipe!</my-button>
            </div>
         </div>
      </div>
   </section>
   <section class="filter">
      <div class="filter__container">
         <div class="filter__title">What's cooking today?</div>
         <div class="filter__box">
            <div class="filter__body">
               <div class="filter__buttons">
                  <button class="filter__quick" :class="{active: isQuickActive}" @click="showQuickIngredients">Quick Ingredients</button>
                  <div class="filter__line"></div>
                  <button class="filter__all" :class="{active: isAllActive}" @click="showAllIngredients">All Ingredients</button>
               </div>
               <div class="filter__items quick-ingredients" v-if="isQuickActive">
                  <div class="filter__item" v-for="ingredient in ingredients.quickIngredients" :key="ingredient">
                     <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                     <label :for="ingredient"> {{ingredient}} </label>
                  </div>
               </div>
               <div class="filter__all-ingredients all-ingredients" v-if="isAllActive">
                  <div class="all-ingredients__categories">
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Meat</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.meats" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Beverages</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.beverages" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Pasta / Grains</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.pastaGrains" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Condiments</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.condiments" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Ceral</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.ceral" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Canned Products</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.cannedProducts" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Bread</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.bread" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Dairy</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.dairy" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Liquor</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.liquor" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Produce</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.produce" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Seafood</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.seafood" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                     <div class="all-ingredients__column">
                        <div class="all-ingredients__title">Snacks</div>
                        <div class="all-ingredients__items filter__items">
                           <div class="all-ingredients__item filter__item" v-for="ingredient in ingredients.snacks" :key="ingredient">
                              <input type="checkbox" :id="ingredient" :value="ingredient" v-model="checkedIngredients">
                              <label :for="ingredient"> {{ingredient}} </label>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="filter__checked checked">
               <div class="checked__body">
                  <h3 class="checked__title">Picked ingredients:</h3>
                  <div class="checked__clear" @click="clearIngredients" v-show="checkedIngredients.length > 0">Clear All</div>
                  <div class="checked__message" v-show="checkedIngredients.length === 0">No selected ingredients</div>
                  <div class="checked__list">
                     <transition-group name="list">
                     <div class="checked__item" v-for="checked in checkedIngredients" :key="checked.id">
                        <delete-button @click="deleteIngredient(checked)">-</delete-button>
                        {{ checked }}
                     </div>
                  </transition-group>
                  </div>
                  <my-button @click="fetchByIngredients">Find recipes!</my-button>
               </div>
            </div>
         </div>
      </div>
   </section>
   <section class="recipes">
      <div class="recipes__container">
         <div class="recipes__title" v-if="isRecipesEmpty === false">We Found <span>{{ recipes.length }} recipes:</span></div>
         <div class="recipes__body">
            <div class="recipes__empty" v-if="isRecipesEmpty != false">Try to find recipes by ingredients!</div>
            <my-loader v-if="isLoading" class="recipes__loader"></my-loader>
            <div class="recipes__items">
               <recipes-list :recipes="recipes"></recipes-list>
            </div>
         </div>
      </div>
   </section>
</template>
<script>

import {ref} from 'vue'
import axios from 'axios'
import env from '@/env.js'

import RecipesList from '@/components/RecipesList'
import MyButton from '@/components/UI/MyButton'
import MyInput from '@/components/UI/MyInput'
import DeleteButton from '@/components/UI/DeleteButton'
import MyLoader from '@/components/UI/MyLoader'

export default {
   components: {
    RecipesList,
    MyButton,
    DeleteButton,
    MyLoader,
    MyInput
  },
  setup() {
   const searchQuery = ref('');
   const recipes = ref([]);
   const isRecipesEmpty = ref(true)
   const checkedIngredients = ref([])
   const isLoading = ref(false)

//========================================================================================================================================================
   const searchFetch = async () => {
      if (searchQuery.value != '') {
         isLoading.value = true
         isRecipesEmpty.value = false 
         searchQuery.value = ''
         try {
            await axios.get(`${env.search}apiKey=${env.apiKey}&query=${searchQuery.value}&ranking=1&number=30`)
            .then(response => {
               console.log(response.data);
               recipes.value = response.data.results
            })
         } catch (e) {
            alert('Error')
         }  finally {
            isLoading.value = false
         }
      }
   }
   const fetchByIngredients = async () => {
      if(checkedIngredients.value != '') {
         isLoading.value = true
         isRecipesEmpty.value = false 
         searchQuery.value = ''
         try {
         await axios.get(`${env.byIngredients}?apiKey=${env.apiKey}&ingredients=${checkedIngredients.value.join(',')}&ranking=1&number=30`)
         .then(response => {
            recipes.value = response.data
            scrollToRecipes()
         })
         } catch (e){
            alert('Error')
         } finally {
            isLoading.value = false
         }
      }

   }
   const deleteIngredient = (checked) => {
      checkedIngredients.value = checkedIngredients.value.filter(item => item != checked)
   }
   const clearIngredients = () => {
      checkedIngredients.value = []
   }
//========================================================================================================================================================
   const ingredients = ref({
      allIngredients: ['AllSpice','Almond Extract','Angel Food Cake Mix','Apple Pie Filling',
      'Baking Chocolate','Baking Powder','Baking Soda','Barbecue Seasoning',
      'Basil','Bay Leaves','Black Pepper','Bread Mixes',
      'Brown Sugar','Cajun Seasoning','Canola Oil','Cayenne Pepper',
      'Celery Salt','Chili Powder','Chili Seasoning','Chives',
      'Chocolate Chips / Squares','Chocolate Pudding Mix','Cilantro','Cinnamon',
      'Cloves','Coconut Extract','Cooking Spray','Corn Bread Mix',
      'Corn Meal / Polenta','Corn Oil','Corn Starch','Creole Seasoning',
      'Cumin','Curry Powder','Dark Cake Mix','Dill',
      'Dry Mustard','Fennel Seed','Flour','Flour - Whole Wheat',
      'Garlic Powder','Garlic Salt','Ginger','Italian Seasoning',
      'Lemon - Herb Seasoning','Lemon Extract','Lemon Juice','Lemon Pepper',
      'Light Cake Mix','Lime Juice','Meat Seasoning','Mint Leaves',
      'Nutmeg','Olive Oil','Onion Powder','Onion Soup Mix',
      'Oregano','Pancake / Baking Mix','Paprika','Parsley',
      'Peanut Oil','Peppercorns','Poppyseeds','Powdered Sugar',
      'Pumpkin Pie Filling','Pumpkin Pie Spice','Ranch Mix (packet)','Red Pepper',
      'Rosemary','Salt','Salt and Pepper','Seasoning Salt',
      'Sesame Oil','Sesame Seeds','Shortening / Oil (General)','Spice Cake Mix',
      'Splenda','Sugar','Taco Seasoning','Thyme',
      'Turkey Pan Drippings','Vanilla Extract','Vanilla Pudding Mix','Vegetable Oil',
      'White Pepper','Yeast','Yellow Cake Mix',],
      quickIngredients:  ['Apple', 'Avocado', 'Bacon', 'Beer (in general)',
      'Baking Powder', 'Barbecue Sauce', 'Bread (in General)', 'Broccoli',
      'Brown / Dijon Mustard', 'Brown Sugar', 'Buffalo / Hot Sauce', 'Butter / Margarine',
      'Cauliflower', 'Cayenne Pepper', 'Cheddar Cheese', 'Chicken / Turkey (in General)',
      'Chicken Breast', 'Chicken Broth / Soup / Stock', 'Cinnamon', 'Cream Cheese',
      'Cream of Veggie (in general)', 'Crumbs / Stuffing / Panko', 'Doritos', 'Eggs',
      'Fish (in General)', 'Flour', 'Fruit (in General)', 'Garlic', 
      'Garlic Powder', 'Green Onions', 'Green Peppers', 'Ground Beef', 
      'Honey', 'Ketchup / Catsup', 'Lemons', 'Mayonnaise', 
      'Milk', 'Mushrooms', 'Mustard', 'Olive Oil',
      'Onions / Shallots', 'Oreos', 'Pancake / Baking Mix', 'Pasta Noodles (in General)', 
      'Peanut Butter', 'Peppers (in General)', 'Pork Chops', 'Potatoes',
      'Ramen', 'Rice (in General)', 'Rolls / Biscuit', 'Salsa',
      'Sausage / Brats', 'Shortening / Oil (General)', 'Tomato / Red Sauce (General)', 'Tomatoes',
      'Tortillas / Taco Shells', 'Vanilla Extract', 'Vegetables (in General)', 'Vinegar - Balsamic',
      'Yellow Cake Mix', 'Zucchini'],
      beverages: ['Apple Cider','Apple Juice','Club / Tonic','Coco mix / hot chocolate',
      'Coffee','Cola','Diet Cola','Eggnog',
      'Fruit Punch','Ginger Ale','Instant Coffee','Lemon - Lime Soda',
      'Lemonade','Orange Juice','Pineapple Juice','Tomato Juice',],
      meats:['Bacon', 'Beef (in General)', 'Bologna', 'Brisket',
      'Canned Chicken','Chicken / Turkey (in General)','Chicken Breast',
      'Cocktail Dogs / Smokies','Corned Beef','Ground Beef','Ground Meat (in General)',
      'Ground Pork','Ground Turkey','Ground Veal','Ham',
      'Hot Dog','Keilbasa','Lamb (In General)','Meat Balls',
      'Pepperoni','Polish Sausage','Pork Chops','Pork Roast',
      'Pork Tenderloin','Prosciutto','Roast Beef / Pot Roast','Salami',
      'Sausage / Brats', 'Sliced Chicken', 'Sliced Ham', 'Sliced Roast Beef',
      'Sliced Turkey', 'Steak', 'Turkey Breast', 'Turkey Legs'],
      pastaGrains: ['Angel Hair','Barley','Black Rice','Bowtie Pasta',
      'Brown Rice','Egg Noodles','Elbow Macaroni','Fettuccine Noodles',
      'Gnocchi','Granola','Lasagna Noodles','Mac and Cheese / Mix',
      'Oats / Oatmeal','Orzo','Pasta Noodles (in General)','Ramen',
      'Rice (in General)','Rigatoni','Rotini Noodles','Shell Noodles',
      'Spaghetti Noodles','Tortellini','White Rice','Wild Rice',
      'Ravioli'],
      condiments:  ['Applesauce','Barbecue Sauce','Brown / Dijon Mustard','Buffalo / Hot Sauce',
      'Burgandy Wine','Caramel','Cesar Dressing','Cheese Sauce',
      'Chili Sauce','Chocolate Syrup','Cocktail Sauce','Corn Syrup',
      'Cranberry Sauce','Curry Sauce','White Wine','French / Catalina',
      'Garlic Sauce','Grape Jelly','Gravy','Guacamole',
      'Honey','Honey Mustard','Horseradish','Italian Dressing',
      'Jelly / Jam (in General)','Ketchup / Catsup','Marsala Wine','Mayonnaise',
      'MIracle Whip','Molasses','Mustard','Nutella',
      'Orange Jelly','Oyster Sauce','Peanut Butter','Pesto',
      'Poppy Seed Dressing','Ranch Dressing','Red Wine','Relish',
      'Salsa','Sandwich Spread','Sherry Wine','Soy Sauce',
      'Spag. Meat Sauce','Spin Art Dip','Steak Sauce','Sweet White',
      'Syrup Maple','Taco / Enchilada Sauce','Teriaky Sauce','Thousand Island',
      'Tobasco Sauce','Tomato / Red Sauce (General)','Vermouth','Vinaigrette Dressing',
      'Vinegar (in General)','Vinegar - Balsamic','Vinegar - Cider','Vinegar - Red',
      'Vinegar - Red Wine','Vinegar - White','Whip Cream','White Sauce (General)',
      'Worcestershire'],
      ceral: ['Cereal (In General)','Cheerios','Cinnamon Crunch','Crunch Cereal',
      'Flakes Cereal','Hex Cereal','Rice Krispies'],
      cannedProducts:  ['Baked Beans','Beans (in General)','Beef Broth / Boullion / Soup','Beef Soup',
      'Black Beans','Canned Corn','Canned Tomatoes','Cheese Soup',
      'Chicken Broth / Soup / Stock','Chili','Corned Beef Hash','Crab Bisque',
      'Cream of Celery','Cream of Chicken','Cream of Corn','Cream of Mushroom',
      'Cream of Onion','Cream of Shrimp','Cream of Veggie (in general)','French Onion Soup',
      'Garbanzo Beans','Gumbo','Kidney Beans','Lima Beans',
      'Minnestrone','Pork and Beans','Refried Beans','Tomato Paste',
      'Tomato Soup','Vegetable Stock'],
      bread:  ['Bagels','Bread (in General)','Bread Dough (in General)','Buns',
      'Corn Bread','Crumbs / Stuffing / Panko','Egg Roll Wraps','English Muffins',
      'Flat Bread','French Bread','Hoagie Rolls','Ice Cream Cones',
      'Italian Bread','Pie Crust','Pita Bread','Pizza Crust',
      'Rolls / Biscuits','Rye Brea','Tortillas / Taco Shells','Wheat / Grain Bread',
      'White Bread','Wonton Wrappers'],
      dairy:  ['American Cheese','Blue Cheese','Blue Cheese Crumbles','Butter / Margarine',
      'Buttermilk','Cheddar Cheese','Cheese (in General)','Chocolate Milk',
      'Coconut Milk','Colby Cheese','Condensed / Evaporated Milk','Condensed Milk (Sweetened)',
      'Cool Whip / Whipped Cream','Cottage Cheese','Cream (in General)','Cream Cheese',
      'Eggs','Feta Cheese','Goat Cheese','Half and Half',
      'Heavy Cream','Ice Cream','Jack Cheese','Milk',
      'Monteray Jack','Mozzarella Cheese','Parmesan Cheese','Provelone Cheese',
      'Ricotta Cheese','Romano Cheese','Sour Cream','Swiss Cheese',
      'Velveeta','Yogurt'],
      liquor:   ['Baileys','Beer (in general)','Brandy','Coconut Rum',
      'Gin (In General)','Gran Marnier','Kahlua','Pale Ale (Ex. Amberbock)',
      'Pucker Raspberry','Rum (in General)','Stout (Ex. Guinness)','Tequila (in General)',
      'Triple Sec','Vodka (in General)','Whiskey'],
      produce:  ['Apples','Artichokes','Asparagus','Avocado',
      'Banana','Beans','Black Olives','Blueberries',
      'Broccoli','Brussel Sprouts','Butternut Squash','Cabbage',
      'Carrot','Cauliflower','Celery','Cherries',
      'Cherry Tomatoes','Chilis','Coconut','Corn',
      'Cranberries','Cucumber','Eggplant','Fruit (in General)',
      'Garlic','Grapefruit','Grapes','Green Beans',
      'Green Chilis','Green Olives','Green Onions','Green Peppers',
      'Jalapenos / Chipotle Peppers','Lemons','Lettuce','Limes',
      'Mango','Mushrooms','Olives / Capers (general)','Onions / Shallots',
      'Oranges','Peaches','Pears','Peas',
      'Peppers (in General)','Pickles','Pineapple','Potatoes',
      'Potatoes - Mashed','Potatoes - Red','Potatoes - Sweet','Pumpkin',
      'Raisins','Raspberries','Red Peppers','Saurkraut',
      'Scallions','Spinach / Leaves','Squash','Strawberries',
      'Tomatoes','Turnip / Swede','Vegetables (in General)','Watermelon',
      'Yellow Peppers','Zucchini','Kale'],
      seafood:   ['Canned Tuna','Catfish','Clams','Cod',
      'Crab','Fish (in General)','Haddock','Salmon',
      'Scallops','Shrimp','Swordfish','Tilapia',
      'Tuna'],
      snacks: ['Almonds','Cashew','Cheese Its','Chocolate Bars (in General)',
      'Crackers (in general)','Doritos','Frozen Fries','Frozen Hash Browns',
      'Frozen Tots','Graham Crackers','Jello','Kit Kat Bars',
      'M & Ms','Marshmallows','Nuts (in general)','Oreos',
      'Oyster Crackers','Peanuts','Pecans','Popcorn',
      'Potato Chips','Pretzels','Ritz Crackers','Saltines',
      'Tortilla / Corn Chips','Walnuts','Wheat Thins / Triscuits','Twinkie']
   })
//========================================================================================================================================================
   const isAllActive = ref(false)
   const isQuickActive = ref(true)

   const showAllIngredients = () => {
      isQuickActive.value = false
      isAllActive.value = true

   }
   const showQuickIngredients = () => {
      isAllActive.value = false
      isQuickActive.value = true
   }
   const scrollToRecipes = () => {
     const recipesScroll = document.querySelector('.recipes')
     if(recipesScroll) {
      recipesScroll.scrollIntoView({
         behavior: 'smooth'
      })
     }
   }
   return {
      searchQuery,
      checkedIngredients,
      searchFetch,
      fetchByIngredients,
      deleteIngredient,
      isRecipesEmpty,
      isLoading,
      recipes,
      clearIngredients,
      showQuickIngredients,
      showAllIngredients,
      isQuickActive,
      isAllActive,
      ingredients,
      scrollToRecipes,
   }
  }
}
</script>
<style lang="scss" scoped>

input[type="checkbox"] {
   appearance: none;
   height: 20px;
   flex: 0 0 20px;
   border-radius: 5px;
   border: 1px solid var(--color-black);
   cursor: pointer;
   transition: all 0.3s ease 0s;
   position: relative;
   z-index: 1;
   background-color: #fff;
   display: flex;
   justify-content:center;
   align-items: center;
   flex-direction: column;
   &::before,&::after{
      content:'';
      opacity: 0;
      transform: scale(0);
      position: absolute;
      background-color: #fff;
      width: 3px;
      height: 10px;
      transition: all 0.3s ease 0s;
   }
   &:checked {
   background-color: var(--color-green);
      // background-color: #43eb91;
      &::before,&::after{
         content:'';
         display: block;
         opacity: 1;
         transform: scale(1);

      }
      &::before{
         transform: rotate(45deg);
         left: 11px;
      }
      &::after{
         transform: rotate(-45deg);
         left: 6px;
         height: 7px;
      }
   }
   
}
//Search========================================================================================================================================================
.search {
   // .search__container
   &__container {}
   // .search__body
   &__body {
      margin-top: 30px;
   }
   // .search__box
   &__box {
      display: flex;
   }
   // .search__btn
   &__btn {
      height: 50px;
      border: 3px solid var(--color-black);
      border-left: 0px;
      border-radius: 0px 0px 15px 0px;
      box-shadow: 4px 0px 0px rgba(0, 0, 0);
   }
   // .search__input
   &__input {
      border: 3px solid var(--color-black);
   }
}
//Filter========================================================================================================================================================
.filter {
   margin-top: 50px;
   margin-bottom: 50px;
   // .filter__container
   &__container {}
   // .filter__box
   &__box {
      position: relative;
      display: flex;
      gap: 30px;
      // justify-content:center;
      @media (max-width: 992px){
           flex-direction: column;
      }
   }
   // .filter__all-ingredients
   &__all-ingredies {}
   // .filter__quick-ingredients
   &__quick-ingredients{}
   // .filter__title
   &__title {
      margin-bottom: 10px;
      font-size: 24px;
      font-weight: 700;
   }
   // .filter__body
   &__body {
      position: relative;
      padding: 20px;
      border: 3px solid var(--color-black);
      border-radius: 7px;
      box-shadow: 4px 3px 0px rgba(16, 14, 14, 1);
      overflow: hidden;
      @media (max-width: 425px){
         padding: 10px;
      }
      // &::before{
      //    content:'';
      //    position: absolute;
      //    top: -100px;
      //    left: 0;
      //    width: 50px;
      //    height: 300px;
      //    // background-color: var(--color-green);
      //    box-shadow: 1px 1px 0px var(--color-black);
      //    transform: rotate(45deg);
      //    z-index: 1;
      // }
   }
   // .filter__buttons
   &__buttons {
      position: relative;
      z-index: 1;
      display: flex;
      justify-content: center;
      margin-bottom: 20px;
      gap: 20px;
      border-bottom: 3px solid var(--color-black);
   }
   &__quick,
   &__all {
      padding: 10px;
      font-size: 18px;
      font-weight: 700;
      color: var(--color-orange);
      cursor: pointer;
      transition: all 0.3s ease 0s;
      @media (any-hover: hover){
         &:hover{
            color: var(--color-green);
            text-decoration: underline;
         }
      }
      &.active {
         color: var(--color-green);
         text-transform: uppercase;
      }
   }
   // .filter__quick
   &__quick {
   }
   // .filter__line
   &__line {
      background-color: var(--color-black);
      width: 3px;
      @media (max-width:375px){
           display: none;
      }
   }
   // .filter__all
   &__all {
   }
   // .filter__items
   &__items {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      gap: 20px;
      @media (max-width: 768px){
         grid-template-columns: repeat(3, 1fr);
         grid-template-rows: repeat(3, 1fr);
         gap: 10px;
      }
      @media (max-width: 620px){
         grid-template-columns: repeat(2, 1fr);
         grid-template-rows: repeat(2, 1fr);
         gap: 5px;
      }
   }
   // .filter__item
   &__item {
      display: flex;
      gap: 10px;
      font-weight: 600;
   }
   // .filter__checked
   &__checked {
      position: sticky;
      align-self: flex-start;
      top: 15px;
   }
}
.quick-ingredients {
}
.all-ingredients {
		// .all-ingredients__categories
		&__categories {
      }
		// .all-ingredients__column
		&__column {
         &:not(:last-child) {margin-bottom: 20px;}
  
      }
		// .all-ingredients__title
		&__title {
         font-size: 20px;
         font-weight: 700;
         padding-bottom: 10px;
         margin-bottom: 10px;
         color: var(--color-green);
         border-bottom: 1px solid var(--color-black);
      }
		// .all-ingredients__category
		&__items {
         margin-top: 20px;
      }
		// .all-ingredients__item
		&__item {
         display: flex;
      }
}

//Checked========================================================================================================================================================
.checked {
   // .checked__body
   &__body {
      padding: 20px;
      border: 3px solid var(--color-black);
      border-radius: 7px;
      box-shadow: 4px 3px 0px rgba(16, 14, 14, 1);
      text-align: center;
   }
   // .checked__title
   &__title {
      font-size: 18px;
      font-weight: 700;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 3px solid var(--color-black);
   }
   // .checked__clear
   &__clear {
    text-align: right;
    font-weight: 700;
    cursor: pointer;
   }
   // .checked__message
   &__message {}
   // .checked__list
   &__list {
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5px;
      @media (max-width: 768px){
         flex-direction: row;
         flex-wrap: wrap;
         gap: 10px;
      }
      @media (max-width: 425px){
         flex-direction: column;
      }
   }
   // .checked__item
   &__item {
      display: flex;
      justify-content:center;
      align-items: center;
      gap: 10px;
      color: var(--color-black);
   }
   // .checked__button
   &__button {}
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
//Recipes========================================================================================================================================================
.recipes {
   // .recipes__container
   &__container {}
   // .recipes__body
   &__body {
      margin-bottom: 30px;
   }
   // .recipes__title
   &__title {
      margin-bottom: 20px;
      span {
         font-weight: 600;
         color: var(--color-green);
      }
   }
   // .recipes__empty
   &__empty {
      text-align: center;
      font-style: italic;
      color: var(--color-orange);
   }
   // .recipes__items
   &__items {
      
   }
   // .recipes__loader
   &__loader {
      display: block;
      margin: 0 auto;
   }
}
//========================================================================================================================================================
.search {
		// .search__container
		&__container {}
		// .search__body
		&__body {}
		// .search__box
		&__box {}
		// .search__input
		&__input {}
		// .search__btn
		&__btn {}
}
.filter {
		// .filter__container
		&__container {}
		// .filter__title
		&__title {}
		// .filter__box
		&__box {}
		// .filter__body
		&__body {}
		// .filter__buttons
		&__buttons {}
		// .filter__quick
		&__quick {}
		// .filter__line
		&__line {}
		// .filter__all
		&__all {}
		// .filter__items
		&__items {}
		// .filter__item
		&__item {}
		// .filter__all-ingredients
		&__all-ingredients {}
		// .filter__checked
		&__checked {}
}
.quick-ingredients {
}
.all-ingredients {
		// .all-ingredients__categories
		&__categories {}
		// .all-ingredients__column
		&__column {}
		// .all-ingredients__title
		&__title {}
		// .all-ingredients__items
		&__items {}
		// .all-ingredients__item
		&__item {}
}
.checked {
		// .checked__body
		&__body {}
		// .checked__title
		&__title {}
		// .checked__clear
		&__clear {}
		// .checked__message
		&__message {}
		// .checked__list
		&__list {}
		// .checked__item
		&__item {}
}
.recipes {
		// .recipes__container
		&__container {}
		// .recipes__title
		&__title {}
		// .recipes__body
		&__body {}
		// .recipes__empty
		&__empty {}
		// .recipes__loader
		&__loader {}
		// .recipes__items
		&__items {}
}

</style>
