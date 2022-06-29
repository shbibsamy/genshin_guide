import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {},
    characters: [],
    characterComment: []
  },
  getters: {
  },
  mutations: {
    DATA_UPDATE (state, newData) {
      state.data = newData
    },
    CHARA_UPDATE (state, newEntry) {
      state.characters = newEntry;
    },
    COMMENT_EXAMPLE_INPUT (state, newCommentEntry) {
      state.characterComment.push(newCommentEntry);
      console.log(state.characterComment);
    }
  },
  actions: {
  },
  modules: {
  }
})
