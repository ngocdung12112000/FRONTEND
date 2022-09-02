/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Words from "../views/Words.vue";
import Profile from "../views/Profile.vue";
import Achievements from "../views/Achievements.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/prepare",
    name: "Prepare",
    component: () =>
      import(/* webpackChunkName: "prepare" */ "../components/Prepare.vue"),
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/words",
    name: "Words",
    component: Words,
  },
  {
    path: "/profile/:id",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/achievements",
    name: "Achievements",
    component: Achievements,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
