import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";
import { requireAuth, isGuest } from "./middlewares/Auth";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: isGuest
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("./views/Logout.js"),
      beforeEnter: requireAuth
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/Dashboard.vue"),
      beforeEnter: requireAuth
    },
    {
      path: "*",
      redirect: "/dashboard"
    }
  ]
});

export default router;
