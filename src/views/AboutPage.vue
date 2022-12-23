<template>
  <section class="about">
    <div class="about__container">
      <div class="about__body">
        <h1 class="about__title">About the project</h1>
        <div class="about__item">
          <div class="about__content">
            <h2>What is RecipeBook?</h2>
            <p>At first, the application was developed as an analogue of the "What's in my fridge" application, 
              in which you can select the ingredients that you have at home, and look for recipes that contain these ingredients. 
              An easy solution if you don't know what to cook and if you want to try something new. 
            </p>
            <br>
            <p> In process of developing the app, 
            I decided to go a little further and add the functionality of creating your own recipes in addition to just searching for them.
            For that purpose i used <span>Firebase</span> and in particular <span>Firebase Authentication</span> to register and login, 
            and <span>Firestore</span> to keep users recipes.</p>
            <br>
            <p>So now you can search for recipes by ingredients or simply search by recipe name. You can login and make your own recipes and keep them in the app.</p>
            <br>
            <p>To find recipes i used the <span>Spoonacular API.</span></p>
            <br>
            <h2>Stack:</h2>
            <ul>
              <li><b>Vue.js</b> - Composition APi, Vuex, Router;</li>
              <li><b>Firebase</b> - to store data and Authentication;</li>
              <li><b>Axios</b> - to work with API;</li>
              <li><b>SCSS</b> - styling.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.about {
		// .about__container
		&__container {}
		// .about__body
		&__body {
      margin: 50px 0;
    }
		// .about__title
		&__title {
      font-size: 30px;
      color: var(--color-orange);
      margin-bottom: 20px;
    }
		// .about__item
		&__item {
      display: flex;
      flex-direction: column;
    }
		// .about__content
		&__content {
      h2 {
        font-size: 20px;
        color: var(--text-color);
        margin-bottom: 10px;
      }
      p,li {
        font-size: 18px;
      }
      span {
        color: var(--color-green);
        font-weight: 600;
      }
    }
  }

</style>