import MtgJsonService from "@/services/MtgJsonService.js";

export const namespaced = true;

export const state = {
  activeSet: null,
  sets: []
};

export const mutations = {
  SET_ACTIVE_SET(state, set) {
    state.activeSet = set;
  },
  ADD_SET(state, set) {
    state.sets.push(set);
  }
};

export const actions = {
  fetchSetByCode({ commit, getters, state }, code) {
    if (code == state?.activeSet?.data?.code) {
      return state.activeSet;
    }

    var set = getters.getSetByCode(code);

    if (set) {
      commit("SET_ACTIVE_SET", set);
      return set;
    } else {
      return MtgJsonService.getSet(code).then(response => {
        commit("SET_ACTIVE_SET", response.data);
        commit("ADD_SET", response.data);
        return response.data;
      });
    }
  }
};

export const getters = {
  getActiveSet: state => () => {
    return state.activeSet;
  },
  getSetByCode: state => code => {
    return state.sets.find(set => set.data.code === code);
  }
};
