import { createApp } from 'vue'
import App from './App.vue'
import router  from '@/router/index'
import store from './store'
import axios from 'axios'
import Vueaxios from 'vue-axios'
const app = createApp(App)
app.use(router);
app.use(store);
app.use(Vueaxios,axios);
app.mount('#app')
