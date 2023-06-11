import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const baseAPI = 'https://minhpham.test/';
axios.defaults.baseURL = baseAPI;
import './assets/css/tailwind.css'

const app = createApp(App)
app.mount('#app')
