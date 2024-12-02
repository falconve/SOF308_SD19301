// import './assets/main.css'
// thêm thư viện boostrap vào dự án vue của mình
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// thêm vue-router vào dự án
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

createApp(App).use(router).mount('#app')
