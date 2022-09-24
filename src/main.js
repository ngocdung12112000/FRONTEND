import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import store from "./store";
import VueAxios from "vue-axios";

const app = createApp(App).use(router);
app.use(store);
app.use(VueAxios, axios);
app.mount("#app");
