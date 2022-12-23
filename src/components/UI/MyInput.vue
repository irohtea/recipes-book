<template>
  <input type="text" :value="modelValue" @input="updateInput">
</template>

<script>

export default {
   name: 'my-input',
   props: {
      modelValue: [String, Number]
   },
   setup(props, context) {
      const updateInput = (event) => {
         context.emit('update:modelValue', event.target.value)
      }
      return {
         updateInput
      }
   }
}
</script>

<style lang="scss" scoped>
   input {
      display: block;
      width: 100%;
      height: 50px;
      padding: 0px 15px;
      border: 1px solid var(--color-black);
      font-size: 18px;
   }
</style>