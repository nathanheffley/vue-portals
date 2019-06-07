<template>
  <div id="app">
    <img src="./assets/logo.png">
    <PortalWindow src="https://www.google.com" style="width: 90vw;"/>
  </div>
</template>

<script>
import PortalWindow from './components/PortalWindow'

export default {
  name: 'app',
  components: {
    PortalWindow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
