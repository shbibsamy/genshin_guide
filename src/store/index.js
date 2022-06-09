import { createStore } from 'vuex'

export default createStore({
  state: {
    data: [],
    characters: [],
  },
  getters: {
  },
  mutations: {
    DATA_UPDATE (state, newData) {
      state.data = newData
    },
    CHARA_UPDATE (state, newEntry) {
      state.characters = newEntry;
    }
  },
  actions: {
  },
  modules: {
  }
})
