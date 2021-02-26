import Vue from "vue";
import Vuex from "vuex";
import * as set from "@/store/modules/set.js";
import * as simulation from "@/store/modules/simulation.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    set,
    simulation
  }
});
