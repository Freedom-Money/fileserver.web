import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import http from './utils/http';
import './assets/main.css';

const app = createApp(App);

// 使用 VUE_APP_ 前缀
app.config.globalProperties.$freedomFileServerUrl = process.env.VUE_APP_FREEDOM_FILE_SERVER_URL;
console.log('freedomFileServerUrl====', app.config.globalProperties.$freedomFileServerUrl);
app.config.globalProperties.$filebrowserUrl = process.env.VUE_APP_FILEBROWSER_URL;
console.log('filebrowserUrl====', app.config.globalProperties.$filebrowserUrl);

app.config.globalProperties.$axios = http;
http.axios.defaults.baseURL = app.config.globalProperties.$freedomFileServerUrl;

app.use(Antd);
app.mount('#app');
