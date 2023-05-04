import { createApp } from 'vue'
import App from '../App.vue'
import createRouter from '../router/index'
import { createWebHistory } from 'vue-router'
let app = createApp(App)

let router = createRouter(createWebHistory())
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
