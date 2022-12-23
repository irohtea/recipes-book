<template>
   <button type="button" class="button">
      <slot></slot>
   </button>
  
</template>

<script>
export default {
   name: 'my-button',
}
</script>

<style lang="scss" scoped>
.button {
   cursor: pointer;
   display: inline-flex;
   font-weight: 700;
   padding: 10px 20px;
   color: var(--color-white);
   background-color: var(--color-green);
   border: 2px solid var(--color-black);
   box-shadow: 2px 2px 0px var(--color-black);
   border-radius: 4px;
   transition: all 0.3s ease 0s;
   &:active{
      background-color: #0e6d3c;
   }
   @media (any-hover: hover){
      &:hover{
         box-shadow: 0px 0px 0px var(--color-black);
         background-color: #11c565;
      }
   }
}
</style>