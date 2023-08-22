import { createApp } from 'vue'
import './assets/main.scss'
import { createPinia } from 'pinia'
import App from './App.vue'

createApp(App)
  .use(createPinia())
  .mount('#app')
