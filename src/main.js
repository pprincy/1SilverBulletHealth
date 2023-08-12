import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import backendApi from './apis/axios-backend';
import "bootstrap";
import "../src/scss/styles.scss";
import vClickOutside from "click-outside-vue3"
import store from './store'

// createApp(App).use(router).mount("#app");
// const app = createApp(App)
// app.use(vClickOutside)

var app=createApp(App);
app.use(router).use(vClickOutside).use(store)
    .mixin({
        methods: {
            backendApi
        },
    });
 
app.mount("#app");


