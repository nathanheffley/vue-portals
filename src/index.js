import PortalWindow from "./PortalWindow.vue"

export { PortalWindow }

function install(Vue) {
    Vue.component('PortalWindow', PortalWindow)
}

export default { install: install }
