import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {},
    characterComment: []
  },
  getters: {
  },
  mutations: {
    DATA_UPDATE (state, newData) {
      state.data = newData
    },
    COMMENT_EXAMPLE_INPUT (state, newCommentEntry) {
      state.characterComment.push(newCommentEntry);
    }
  },
  actions: {
  },
  modules: {
  }
})
