import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Movies",
    component: () => import("../components/Movies"),
  },

  {
    path: "/movie/:id",
    name: "MovieDetail",
    component: () => import("../components/MovieDetail"),
  },

  {
    path: "/:catchAll(.*)",
    name: "NotFoundPage",
    component: () => import("../components/NotFoundPage"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
