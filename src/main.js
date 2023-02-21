
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

// axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
