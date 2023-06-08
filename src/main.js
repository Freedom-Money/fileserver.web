import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App.vue'
import axios from './utils/http'

const app = createApp(App)
app.use(Antd)
app.mount('#app')

app.config.globalProperties.$axios=axios;
