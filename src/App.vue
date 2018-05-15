<template>
  <div id="app">
    <AppleGrab />
  </div>
</template>

<script>
import AppleGrab from './components/AppleGrab';

export default {
  name: 'App',
  components: {
    AppleGrab,
  },
};
</script>

<style>
:root {
  --primary-color: #5991ff;
  --primary-mutted-color: #bdd3ff;
  --default-mutted-color: #f2f3f7;
  --border-color: #f3f3f3;
  --font-color: #2c3e50;
  --base-grid-unit: 8px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--font-color);
}
</style>
