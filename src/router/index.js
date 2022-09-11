/* eslint-disable prettier/prettier */
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
    {
        path: "/home",
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
        path: "/prepare",
        name: "Prepare",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../components/Prepare.vue"),
    },
    {
        path: "/shop",
        name: "Shop",
        component: () => import("../views/Shop.vue"),
        // component: Shop,
    },
    {
        path: "/words",
        name: "Words",
        component: () => import("../views/Words.vue"),
        // component: Words,
    },
    {
        path: "/profile/:id",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
        // component: Profile,
    },
    {
        path: "/achievements",
        name: "Achievements",
        component: () => import("../views/Achievements.vue"),
        // component: Achievements,
    },
    {
        path: "/lesson",
        name: "GamePlay",
        // component: GamePlay
        component: () => import("../views/GamePlay.vue"),
    },
    {
        path: "/courses",
        name: "Courses",
        component: () => import("../views/Courses.vue"),
    },
    {
        path: "/courses/:slug",
        name: "CourseDetail",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/CourseDetail.vue"),
    },
    {
        path: "/courses/learn/:slug",
        name: "LearnCourse",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/LearnCourse.vue"),
    },
    {
        path: "/",
        name: "Introduce",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/Introduce.vue"),
    },
    {
        path: "/my-courses",
        name: "MyCourses",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/MyCourse.vue"),
    },
    {
        path: "/cart",
        name: "Cart",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/Cart.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
