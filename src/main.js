import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
const baseAPI = 'http://minhpham.test/';
axios.defaults.baseURL = baseAPI;
import './assets/css/tailwind.css'
import store from "./store";
import { Modal,Ripple,initTE } from "tw-elements";
initTE({ Modal, Ripple });

const app = createApp(App)
app.use(store)
app.mount('#app')
