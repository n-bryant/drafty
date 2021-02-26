import generateBoosterPack from "@/utils/generateBoosterPack";
import getWeightedRandomBooster from "@/utils/getWeightedRandomBooster";

export const namespaced = true;

const initialState = {
  // what type of sim is it - draft or sealed?
  type: null,
  // booster packs used in the sim
  packs: [],
  // info about the current round
  round: {},
  // everyone's card pools
  cardPools: {},
  // the user's deck
  deck: {}
};

export const state = initialState;

export const mutations = {
  SET_TYPE(state, type) {
    state.type = type;
  },
  GENERATE_PACKS(state, { set, packCount }) {
    let packs = [];
    if (set?.data?.booster?.default && packCount) {
      let count = 0;
      const defaultBooster = set.data.booster.default;
      while (count < packCount) {
        packs.push(
          generateBoosterPack(
            getWeightedRandomBooster(defaultBooster.boosters).contents,
            defaultBooster.sheets,
            set.data.cards
          )
        );
        count++;
      }
    }
    state.packs = packs;
  }
};

export const actions = {
  updateType({ commit }, type) {
    commit("SET_TYPE", type);
    return type;
  },
  generatePacks({ commit }, payload) {
    commit("GENERATE_PACKS", payload);
  }
};

export const getters = {
  getPack: state => () => {
    return state.packs[0] ?? [];
  },
  getPacks: state => () => {
    return state.packs;
  }
};
