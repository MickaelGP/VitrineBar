import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollAnimation from './directives/scrollanimation'
const app = createApp(App)

app.directive('scrollanimation', ScrollAnimation)
app.use(router)

app.mount('#app')
