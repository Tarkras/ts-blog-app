import { createApp } from 'vue'
import './assets/main.scss'
import { createPinia } from 'pinia'
import { router } from './router'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
