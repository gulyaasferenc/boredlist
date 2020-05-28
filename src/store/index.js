import Vue from "vue";
import Vuex from "vuex";
import { get, set, keys, del, clear } from "idb-keyval";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activities: [],
    currentActivity: null
  },
  mutations: {
    setActivities: (state, value) => {
      state.activities = value;
    },
    setCurrentActivity: (state, value) => {
      state.currentActivity = value;
    }
  },
  actions: {
    async getActivityFromApi({ commit }) {
      const resp = await fetch("http://www.boredapi.com/api/activity/");
      const respObj = await resp.json();
      commit("setCurrentActivity", respObj);
    },

    async getActivitiesfromIdb({ commit }) {
      const promises = [];
      let setActivitiesArray = [];
      const myKeys = await keys();
      myKeys.forEach(x => {
        promises.push(get(x));
      });
      Promise.all(promises).then(res => {
        const resArray = [...res];
        setActivitiesArray = [];
        myKeys.forEach(y => {
          setActivitiesArray.push({
            [y]: resArray.shift()
          });
        });
        commit("setActivities", setActivitiesArray);
      });
    },
    async addActivity({ commit, state }, value) {
      const myKey = new Date().valueOf();
      await set(myKey, value);
      const newState = [...state.activities, { mykey: value }];
      commit("setActivities", newState);
    },
    async deleteActivity({ commit, state }, value) {
      const remainActivities = state.activities.filter(
        x => Object.keys(x)[0] !== value
      );
      commit("setActivities", remainActivities);
      await del(Number(value));
    },
    clearActivities({ commit }) {
      clear();
      commit("setActivities", []);
    }
  }
});
