import { createApp } from 'vue'
import App from './App.vue'
import responsive from '../src/components/WorkingOnResponsive.vue'
import "@/scss/app.scss"


createApp(App).mount('#app')
createApp(responsive).mount('#notResponsive')
