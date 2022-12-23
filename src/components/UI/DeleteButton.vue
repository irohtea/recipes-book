<template>
  <button type="button" class="delete-button">
   <slot></slot>
  </button>
</template>

<script>
export default {
   name: 'delet-button',
}
</script>

<style lang="scss" scoped>
.delete-button {
   height: 20px;
   cursor: pointer;
   padding: 2px 7px;
   color: var(--color-white);
   background-color: var(--color-orange);
   border: 1px solid var(--color-black);
}

</style>