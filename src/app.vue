<template>
  <div id="app">
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
