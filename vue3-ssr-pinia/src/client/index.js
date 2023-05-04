import { createApp } from 'vue'
import App from '../App.vue'
import createRouter from '../router/index'
import { createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'
let app = createApp(App)

let router = createRouter(createWebHistory())
app.use(router)
// pinia
let pinia = createPinia()
app.use(pinia)
router.isReady().then(() => {
  app.mount('#app')
})
