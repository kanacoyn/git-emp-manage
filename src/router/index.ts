import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/registerAdmin",
    component: () => import("../views/RegisterAdmin.vue"),
  },
  {
    path: "/loginAdmin",
    component: () => import("../views/LoginAdmin.vue"),
  },
  {
    path: "/employeeList",
    component: () => import("../views/EmployeeList.vue"),
  },
  {
    path: "/employeeDetail/:id",
    component: () => import("../views/EmployeeDetail.vue"),
  },
  {
    path: "/logoutAdmin",
    component: () => import("../views/LogoutAdmin.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
