import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/activities",
    name: "Home",
    component: Home
  },
  {
    path: "/mylist",
    name: "mylist",
    component: () =>
      import(/* webpackChunkName: "mylist" */ "../views/MyList.vue")
  },
  {
    path: "/activities",
    name: "activities",
    component: () =>
      import(/* webpackChunkName: "activities" */ "../views/Activities.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
