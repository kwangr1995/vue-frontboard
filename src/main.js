import axios from 'axios';
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/common.css";

const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$serverUrl = '//localhost:8081'
app.use(router).mount("#app");
