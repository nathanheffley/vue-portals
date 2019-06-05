import Vue from "vue"
import PortalWindow from "./PortalWindow.vue"

const Components = {
    PortalWindow,
}

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
})

export default Components
