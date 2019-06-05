<template>
  <div id="app">
    <PortalWindow src="https://www.google.com" ref="portal" style="width: 90vw; height: 90vh">
      <p>Sorry, your browser doesn't support portals :(</p>
    </PortalWindow>

    <button v-if="'HTMLPortalElement' in window" @click="openPortal">Open</button>
  </div>
</template>

<script>
import PortalWindow from './components/PortalWindow.vue'

export default {
  name: 'app',
  components: {
    PortalWindow
  },
  methods: {
    openPortal: function () {
      this.$refs.portal.activate()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
