<template functional>
  <div class="error-wrapper">
    <slot />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error-wrapper {
    height: 100%;
    background-color: #ffebe0;
    color: #a33800;
    font-size: 12px;
    padding: 0 var(--base-grid-unit);
    border-radius: 2px;
    text-align: left;
    display: flex;
    align-items: center;
  }
</style>
