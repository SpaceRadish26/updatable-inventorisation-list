import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import "vuetify/dist/vuetify.min.css";
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'
import App from './App.vue'
import router from './router'
import axios from "axios";




let urlBackend;
const vuetify = createVuetify({
    components,
    directives
});



async function loadConfig() {
    try {
        urlBackend = process.env.VUE_APP_BACKEND_URL || 'http://localhost:5000'
        axios.defaults.baseURL = urlBackend
    } catch (error) {
        axios.defaults.baseURL = 'http://localhost:5000'
    }
}

const app = createApp(App)
const pinia = createPinia()

loadConfig().then(() => {

    app.use(pinia)
    app.use(router)
    app.use(vuetify)
    app.mount('#app')
})
