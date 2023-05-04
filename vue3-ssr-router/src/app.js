import { createSSRApp } from 'vue'

import App from './App.vue'

export default function createApp() {
  let app = createSSRApp(App)
  return app
}
