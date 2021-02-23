import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

/**
 * helper to handle fetching set data
 */
function handleSetFetching(routeTo, _routeFrom, next) {
  store
    .dispatch("set/fetchSetByCode", routeTo.params.code)
    .then(set => {
      routeTo.params.set = set;
      next();
    })
    .catch(error => {
      if (error.response && error.response.status == 404) {
        next({ name: "404", params: { resource: "set" } });
      } else {
        next({ name: "network-issue" });
      }
    });
}

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/draft/:code",
    name: "draft-set",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DraftSim.vue"),
    props: true,
    beforeEnter: handleSetFetching
  },
  {
    path: "/sealed/:code",
    name: "sealed-set",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SealedSim.vue"),
    props: true,
    beforeEnter: handleSetFetching
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
