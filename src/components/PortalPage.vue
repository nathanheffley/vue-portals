<template>
  <div>
    <slot name="embed" v-if="isEmbedded"></slot>
    <slot name="default" v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'PortalPage',
  computed: {
    isEmbedded: function () {
      if (window.portalHost) {
        return true
      }
      return false
    }
  }
}
</script>
