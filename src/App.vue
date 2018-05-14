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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary-color: #5991ff;
  --primary-mutted-color: #bdd3ff;
  --default-mutted-color: #f2f3f7;
  --base-grid-unit: 8px;
}
</style>
