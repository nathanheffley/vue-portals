<template>
  <div>
    <slot name="open" v-if="isOpen"></slot>
    <slot name="embed" v-else-if="isEmbedded"></slot>
    <slot name="default" v-else></slot>
  </div>
</template>

<script>
export default {
  name: 'PortalPage',
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isEmbedded: function () {
      if (window.portalHost) {
        return true
      }
      return false
    }
  },
  mounted: function () {
    window.addEventListener('portalactivate', event => {
      this.isOpen = true
    })
  }
}
</script>
