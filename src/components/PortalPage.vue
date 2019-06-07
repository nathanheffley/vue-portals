<template>
  <div>
    <slot name="embed" v-if="isEmbedded"></slot>
    <slot name="open" v-else-if="isOpen"></slot>
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
    window.addEventListener('portalactivate', function (event) {
      this.isOpen = true
    })
  }
}
</script>
