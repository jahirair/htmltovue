import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/pages/Home.vue";
import About from "../views/pages/About.vue";
import Service from "../views/pages/Service.vue";
import Practice from "../views/pages/Practice.vue";
import Blog from "../views/pages/Blog.vue";
import Contact from "../views/pages/Contact.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },

  {
    path: "/service",
    name: "service",
    component: Service,
  },
  {
    path: "/practice",
    name: "practice",
    component: Practice,
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
