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
    color: var(--primary-color);
    height: 30px;
    border: 1px solid currentColor;
    cursor: pointer;
  }
  .styled-button[disabled] {
    background-color: var(--default-mutted-color);
    cursor: default;
  }
  .styled-button:focus {
    outline: none;
  }
  .styled-button:hover {
    background-color: var(--default-mutted-color);
  }
  .styled-button.primary {
    background-color: var(--primary-color);
    border: none;
    color: #fff;
  }
  .styled-button.primary:hover {
    background-color: var(--primary-mutted-color);
  }
  .styled-button.primary[disabled] {
    background-color: var(--primary-mutted-color);
  }
</style>
