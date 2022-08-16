import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios"

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue);
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin);

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = "https://xcjewels.herokuapp.com/";

// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       store.dispatch("LogOut");
//       return router.push("/login");
//     }
//   }
// });

// Vue.config.productionTip = false;

createApp(App).use(store).use(router).mount('#app')
