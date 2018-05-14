<template functional>
  <button
    class="styled-button"
    :class="{primary: props.color === 'primary'}"
    :disabled="props.disabled"
    @click="listeners.click"
  >
    <slot />
  </button>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .styled-button {
    color: #5991ff;
    height: 30px;
    border: 1px solid currentColor;
    cursor: pointer;
  }
  .styled-button[disabled] {
    background-color: #f2f3f7;
    cursor: default;
  }
  .styled-button:focus {
    outline: none;
  }
  .styled-button:hover {
    background-color: #ebf2ff;
  }
  .styled-button.primary {
    background-color: #5991ff;
    border: none;
    color: #fff;
  }
  .styled-button.primary:hover {
    background-color: #bdd3ff;
  }
  .styled-button.primary[disabled] {
    background-color: #bdd3ff;
  }
</style>
