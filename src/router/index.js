import Vue from "vue";
import VueRouter from "vue-router";
// import ProfessionalPage from "../views/ProfessionalPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProfessionalPage",
    // component: ProfessionalPage
    component: () =>
      import(
        /* webpackChunkName: "professional_page" */ "../views/ProfessionalPage.vue"
      )
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }

  {
    path: "/404",
    alias: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notFound" */ "../views/NotFound")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
