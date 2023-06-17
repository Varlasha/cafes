import Vue from 'vue'
import App from './App.vue'
import YmapPlugin from 'vue-yandex-maps'
import VueRouter from 'vue-router'
import routes from './router/routes'

const settings = {
    apiKey: 'a3607e61-379e-45ca-aa9e-9552465075c0',
    lang: 'ru_RU',
    coordorder: 'latlong',
    enterprise: false,
    version: '2.1'
}

Vue.config.productionTip = false
Vue.use(YmapPlugin, settings)
Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

new Vue({
    render: h => h(App),
    router
}).$mount('#app')

export default router