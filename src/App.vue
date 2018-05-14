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
</style>
