<template functional>
  <div
    class="scroll-wrapper"
    :style="{ height: props.height + 'px' }"
  >
    <slot />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .scroll-wrapper {
    height: 400px;
    width: 100%;
    overflow: scroll;
  }
</style>
