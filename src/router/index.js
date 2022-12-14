import { createRouter, createWebHistory } from 'vue-router'
// import Vue from "vue";
// import VueRouter from "vue-router";
import AdminView from "../views/AdminView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductView from "../views/ProductView.vue";
import LandingView from "../views/LandingView.vue";
import LoginRegister from "../views/LoginRegister.vue";
import Collection from "../views/Collection.vue";

// Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductView,
    props: true,
  },
  {
    path: "/users/:id",
    name: "user",
    component: ProfileView,
    props: true,
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
  },
  {
    path: "/cart",
    name: "cart",
    component: ProfileView,
  },
  {
    path: "/collection",
    name: "collection",
    component: Collection,
  },
  {
    path: "/login",
    name: "login",
    component: LoginRegister,
    meta: { guest: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
