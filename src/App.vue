<template>
  <div class="wrapper">
    <my-header></my-header>
    <div class="main">
        <router-view />
    </div>
    <my-footer></my-footer>
  </div>

</template>



<script>

// import {ref} from 'vue'
// import axios from 'axios'

import MyHeader from '@/components/MyHeader'
import MyFooter from '@/components/MyFooter'
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'
// import RecipesList from '@/components/RecipesList'
export default {
  components: {
    MyHeader,
    MyFooter,
  },
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
:root {
  --main-bg-color: #f5f7fa;
  --text-color: #3e4555;
  --color-blue: #2e6fa3;
  --color-green: #0da955;
  --color-orange: #cd412c;
  --color-grey: #898c86;
  --color-white: #fff;
  --color-black: #100e0e;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
    outline: none;
  }
  button {
    border: none;
    appearance: none;
    background: none;
    color: none;
  }
}
html,
body,
#app {
  height: 100%;
  background-color: var(--main-bg-color);
  color: var(--text-color);
  font-family: 'Montserrat', sans-serif;
}
body{
  &.lock {
		overflow: hidden;
		touch-action: none;
		transition: all 0.3s ease 0s;
	}
}

.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  border: 3px solid #000;
}
.main {
  flex: 1 1 auto;
}
[class*="__container"] {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
}
</style>
