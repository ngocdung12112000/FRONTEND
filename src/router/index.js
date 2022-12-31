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
        component: () =>import("../components/Prepare.vue"),
    },
    {
        path: "/shop",
        name: "Shop",
        component: () => import("../views/Shop.vue"),
    },
    {
        path: "/words",
        name: "Words",
        component: () => import("../views/Words.vue"),
    },
    {
        path: "/profile/:id",
        name: "Profile",
        component: () => import("../views/Profile.vue"),
    },
    {
        path: "/achievements",
        name: "Achievements",
        component: () => import("../views/Achievements.vue"),
    },
    {
        path: "/lesson",
        name: "GamePlay",
        component: () => import("../views/GamePlay.vue"),
    },
    {
        path: "/practise",
        name: "Practise",
        component: () => import("../views/Practise.vue"),
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
    {
        path: "/admin",
        name: "Dashboard",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/ADMIN/Dashboard.vue"),
    },
    {
        path: "/admin/user-management",
        name: "UserManagement",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/ADMIN/USER/UserList.vue"),
    },
    {
        path: "/admin/course-management",
        name: "CourseManagement",
        component: () =>
            import(/* webpackChunkName: "prepare" */ "../views/ADMIN/COURSE/CourseList.vue"),
    },
];

const router = createRouter({
    mode: "history",
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
