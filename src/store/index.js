import { createStore } from 'vuex'

export default createStore({
  state: {
    data: {},
    guides: {},
    characterComment: [],
    currentCharacterInfo: {},
    currentWeaponInfo: {},
  },
  getters: {
  },
  mutations: {
    DATA_UPDATE (state, newData) {
      state.data = newData;
    },
    COMMENT_EXAMPLE_INPUT (state, newCommentEntry) {
      state.characterComment.push(newCommentEntry);
    },
    NEW_GUIDE_UPDATE (state, newGuide) {
      state.guides.push(newGuide);
    },
    CURRENT_CHARACTER_UPDATE (state, currentCharacter) {
      state.currentCharacterInfo = currentCharacter;
    },
    CURRENT_WEAPON_UPDATE (state, currentWeapon) {
      state.currentWeaponInfo = currentWeapon;
    },
  },
  actions: {
  },
  modules: {
  }
})
