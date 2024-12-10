import { createApp } from "vue";
import App from "./app.vue";
import apui2 from "apui2";

const app = createApp(App);
app.use(apui2);
app.mount("#app");