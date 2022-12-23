<template>
  <div class="footer">
   <div class="footer__container">
      <div class="footer__body">
         <router-link to="/">
            <div class="footer__logo">
               <svg width="50" height="50" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M108.488 428.188C108.498 436.765 111.909 444.988 117.974 451.052C124.039 457.117 132.262 460.529 140.839 460.538H393.503C399.619 460.531 405.594 458.707 410.671 455.296C415.747 451.886 419.695 447.043 422.013 441.384V395.838H140.839C132.262 395.847 124.039 399.259 117.974 405.323C111.91 411.388 108.498 419.611 108.488 428.188V428.188Z" fill="black"/>
                  <path d="M200.473 145.794C194.909 145.8 189.574 148.013 185.64 151.947C181.706 155.882 179.493 161.216 179.486 166.78V194.022C179.486 199.588 181.697 204.926 185.633 208.862C189.569 212.797 194.907 215.008 200.473 215.008C206.039 215.008 211.376 212.797 215.312 208.862C219.248 204.926 221.459 199.588 221.459 194.022V166.78C221.453 161.216 219.24 155.882 215.305 151.947C211.371 148.013 206.037 145.8 200.473 145.794V145.794Z" fill="black"/>
                  <path d="M412.013 51.4617H138.151C125.382 51.4761 113.14 56.555 104.111 65.5841C95.0815 74.6132 90.0027 86.8552 89.9883 99.6243V415.932C89.986 419.97 90.4925 423.992 91.4956 427.904C91.5844 414.87 96.8204 402.4 106.063 393.209C115.305 384.019 127.805 378.853 140.839 378.838H422.013V61.4617C422.013 58.8095 420.96 56.266 419.084 54.3906C417.209 52.5152 414.665 51.4617 412.013 51.4617V51.4617ZM238.459 194.022C238.447 202.615 235.526 210.951 230.172 217.673C224.818 224.394 217.346 229.105 208.973 231.038V325.624C208.973 327.879 208.078 330.041 206.484 331.635C204.89 333.229 202.728 334.124 200.473 334.124C198.219 334.124 196.057 333.229 194.463 331.635C192.869 330.041 191.973 327.879 191.973 325.624V231.038C183.6 229.105 176.128 224.394 170.774 217.673C165.42 210.951 162.499 202.615 162.487 194.022V166.78C162.487 156.705 166.489 147.043 173.613 139.92C180.737 132.796 190.399 128.794 200.473 128.794C210.548 128.794 220.21 132.796 227.334 139.92C234.457 147.043 238.459 156.705 238.459 166.78V194.022ZM344.878 194.022C344.866 202.615 341.945 210.951 336.591 217.673C331.237 224.394 323.765 229.105 315.392 231.038V325.624C315.392 327.879 314.497 330.041 312.903 331.635C311.309 333.229 309.147 334.124 306.892 334.124C304.638 334.124 302.476 333.229 300.882 331.635C299.288 330.041 298.392 327.879 298.392 325.624V231.038C290.019 229.105 282.547 224.394 277.193 217.673C271.839 210.951 268.918 202.615 268.906 194.022V145.264C268.906 143.01 269.801 140.848 271.395 139.254C272.989 137.66 275.151 136.764 277.406 136.764C279.66 136.764 281.822 137.66 283.416 139.254C285.01 140.848 285.906 143.01 285.906 145.264V194.022C285.911 198.083 287.094 202.054 289.31 205.457C291.526 208.859 294.681 211.547 298.392 213.193V147.296C298.392 145.041 299.288 142.879 300.882 141.285C302.476 139.691 304.638 138.796 306.892 138.796C309.147 138.796 311.309 139.691 312.903 141.285C314.497 142.879 315.392 145.041 315.392 147.296V213.193C319.104 211.547 322.258 208.859 324.475 205.457C326.691 202.054 327.873 198.083 327.878 194.022V145.264C327.878 143.01 328.774 140.848 330.368 139.254C331.962 137.66 334.124 136.764 336.378 136.764C338.633 136.764 340.795 137.66 342.389 139.254C343.983 140.848 344.878 143.01 344.878 145.264V194.022Z" fill="black"/>
               </svg>
               Recipe<span>Book</span> 
            </div>
         </router-link>
         <div class="footer__menu">
            <nav class="footer-menu__body" >
               <ul class="footer-menu__list">
                  <li class="footer-menu__item"><router-link to="/my-recipes" class="footer-menu__link">My recipes</router-link></li>
                  <li class="footer-menu__item"><router-link to="/about" class="footer-menu__link">About</router-link></li>
                  <li class="footer-menu__item"><router-link to="/login" class="footer-menu__link" v-if="!$store.state.user">Log in</router-link></li>
               </ul>
               <my-button class="footer-menu__button" @click="$store.dispatch('logout')" v-if="$store.state.user">Logout</my-button>
            </nav>
         </div>
      </div>
      <div class="footer__copyright">&copy;irohweb</div>
   </div>
  </div>
</template>

<script>
export default {
   name: 'my-footer',
}
</script>

<style lang="scss" scoped>
.footer {
   background-color: var(--color-blue);
   border-top: 3px solid var(--color-black);
		// .footer__container
		&__container {}
		// .footer__body
		&__body {
         display: flex;
         justify-content:center;
         align-items: center;
         gap: 20px;
         color: var(--color-white);
      }
		// .footer__logo
		&__logo {
         display: flex;
         align-items: center;
         font-weight: 700;
         span {
            color: var(--color-green);
         }
         svg{
            path {
               fill: var(--color-white);
               &:nth-child(1) {
                  fill: var(--color-orange);
               }
            }
         }
      }
		// .footer__menu
		&__menu {}
		// .footer__copyright
		&__copyright {
         text-align: center;
         padding: 10px;
         color: var(--color-white);
      }
      .footer-menu {
         // .footer-menu__body
         &__body {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;

         }
         // .footer-menu__list
         &__list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
         }
         // .footer-menu__item
         &__item {}
         // .footer-menu__link
         &__link {
            @media (any-hover: hover){
               &:hover{
                  text-decoration: underline;
               }
            }
         }
         // .footer-menu__button
         &__button {
            cursor: pointer;
            @media (any-hover: hover){
               &:hover{
                  text-decoration: underline;
               }
            }  
         }
      }

}

</style>