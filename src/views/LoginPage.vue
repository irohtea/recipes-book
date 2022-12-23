<template>
  <section class="forms">
   <div class="forms__container">
      <div class="forms__body">
         <form class="forms__register form" @submit.prevent="register">
            <h2 class="form__title">Register</h2>
            <div class="form__item">
               <my-input 
                  class="form__input" 
                  type="email"
                  placeholder="Email adress" 
                  v-model="register_form.email" />
               <my-input
                  class="form__input" 
                  type="password"
                  placeholder="Password" 
                  v-model="register_form.password" />
            </div>
            <input 
               class="form__button"
               type="submit" 
               value="Register" />
         </form>
         <form class="forms__login form" @submit.prevent="login">
            <h2 class="form__title">Login</h2>
            <div class="form__item">
               <my-input
                  class="form__input" 
                  type="email"
                  placeholder="Email adress" 
                  v-model="login_form.email" />
               <my-input
                  class="form__input" 
                  type="password"
                  placeholder="Password" 
                  v-model="login_form.password" />
            </div>
            <input
               class="form__button" 
               type="submit" 
               value="Login" />
         </form>
      </div>
   </div>
  </section>
</template>

<script>

import { ref } from 'vue'
import { useStore } from "vuex";
import MyInput from '@/components/UI/MyInput.vue';

export default {
   components: {
      MyInput,
   },
   setup() {
      const login_form = ref({})
      const register_form = ref({})
      const store = useStore()

      const login = () => {
         store.dispatch('login', login_form.value);
      }
      const register = () => {
         store.dispatch('register', register_form.value);
      }

      
      return {
         login_form,
         register_form,
         login,
         register
      }
   }

}
</script>

<style lang="scss" scoped>
.forms {
		// .forms__container
		&__container {}
		// .forms__body
		&__body {
         margin-top: 50px;
         display: flex;
         gap: 20px;
         
         @media (max-width: 768px){
              flex-direction: column;
         }
      }
		// .forms__register
		&__register {
         flex: 0 1 50%;
      }
		// .forms__login
		&__login {
         flex: 0 1 50%;
      }
}
.form {
		// .form__title
		&__title {
         margin-bottom: 15px;
      }
		// .form__item
		&__item {
         display: flex;
         flex-direction: column;
         gap: 15px;
         margin-bottom: 15px;
      }
		// .form__input
		&__input {}
		// .form__button
		&__button {
         cursor: pointer;
         display: inline-flex;
         font-weight: 700;
         padding: 10px 20px;
         color: var(--color-white);
         background-color: var(--color-blue);
         border: 2px solid var(--color-black);
         box-shadow: 2px 2px 0px var(--color-black);
         border-radius: 4px;
         transition: all 0.3s ease 0s;
         &:active{
            background-color: #13a258;
         }
         @media (any-hover: hover){
            &:hover{
               box-shadow: 0px 0px 0px var(--color-black);
               background-color: #11c565;
            }
         }
      }
}

</style>