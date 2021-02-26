import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";
import store from "@/store";
import Home from "@/views/Home.vue";
import constants from "@/constants/simulation";

Vue.use(VueRouter);

// /**
//  * helper to handle fetching set data
//  */
// function handleSetFetching(routeTo, _routeFrom, next) {
//   store
//     .dispatch("set/fetchSetByCode", routeTo.params.code)
//     .then(set => {
//       routeTo.params.set = set;
//       next();
//     })
//     .catch(error => {
//       if (error.response && error.response.status == 404) {
//         next({ name: "404", params: { resource: "set" } });
//       } else {
//         next({ name: "network-issue" });
//       }
//     });
// }

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  // {
  //   path: "/draft/:code",
  //   name: "draft-set",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/DraftSim.vue"),
  //   props: true,
  //   beforeEnter: handleSetFetching
  // },
  // {
  //   path: "/sealed/:code",
  //   name: "sealed-set",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/SealedSim.vue"),
  //   props: true,
  //   beforeEnter: handleSetFetching
  // },
  {
    path: "/pack/:code",
    name: "pack-set",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PackSim.vue"),
    props: true,
    beforeEnter(routeTo, _routeFrom, next) {
      store
        .dispatch("set/fetchSetByCode", routeTo.params.code)
        .then(set => {
          store.dispatch("simulation/updateType", constants.types.PACK);
          store.dispatch("simulation/generatePacks", {
            set,
            packCount: constants.packCounts.PACK
          });
          routeTo.params.pack = store.getters["simulation/getPack"]();
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((_routeTo, _routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
