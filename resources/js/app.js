require('./bootstrap');
import { createApp } from 'vue';

import App from './components/App.vue'
// import Login from './components/Page/Autenticacion/Login.vue'
import router from './router'

// Importamos el framework de Vuesax

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
    app.use(ElementPlus)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component)
      }
    app.use(router)
    app.mount('#app');

