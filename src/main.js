import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

Vue.directive("highlight", {
    bind(el, binding) {
        let delay = 0;
        if (binding.modifiers["delayed"]) {
            delay = 3000;
        }
        setTimeout(() => {
            if (binding.arg === 'background') {
                el.style.background = binding.value;
            } else {
                el.style.color = binding.value
            }
        }, delay)
    }
})


new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
