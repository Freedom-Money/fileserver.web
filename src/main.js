import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import App from './App.vue';
import http from './utils/http';
import './assets/main.css';

const app = createApp(App);

// 使用 VUE_APP_ 前缀
app.config.globalProperties.$freedomFileServerUrl = frontConfig.freedomFileServerUrl;
console.log('freedomFileServerUrl====', app.config.globalProperties.$freedomFileServerUrl);
app.config.globalProperties.$filebrowserUrl =  frontConfig.filebrowserUrl;
console.log('filebrowserUrl====', app.config.globalProperties.$filebrowserUrl);

app.config.globalProperties.$axios = http;
http.axios.defaults.baseURL = app.config.globalProperties.$freedomFileServerUrl;

app.use(Antd);
app.mount('#app');
