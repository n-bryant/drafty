import axios from "axios";

const apiClient = axios.create({
  // reference docs:
  // - https://mtgjson.com/
  // - https://github.com/mtgjson/mtgjson
  baseURL: `https://mtgjson.com/api/v5/`
});

export default {
  // helper to retrieve information for a given mtg set
  getSet(setCode) {
    return apiClient.get(`${setCode}.json`);
  }
};
