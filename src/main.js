import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const baseAPI = 'https://minhpham.test/';
axios.defaults.baseURL = baseAPI;
import './assets/css/tailwind.css'
import store from "./store";

const app = createApp(App)
app.use(store)
app.mount('#app')
