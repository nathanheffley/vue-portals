<template>
    <portal v-if="supportsPortals" :src="src" ref="portal">
        <slot></slot>
    </portal>
    <div v-else>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'PortalWindow',
    props: {
        src: String
    },
    computed: {
        supportsPortals: function () {
            return 'HTMLPortalElement' in window
        }
    },
    methods: {
        activate: function () {
            if (this.supportsPortals) {
                this.$refs.portal.activate()
            }
        }
    }
}
</script>
