import { createStore } from 'vuex'

export default createStore({
state: {
    admin: {
        'username': 'admin',
        'password': 'admin'
    },
    client: {
        'username': 'test',
        'password': 'test'
    },
    newClient: {},
    loggedIn: '',
    data: {},
    guides: {},
    characterComment: [],
    currentCharacterInfo: {},
    currentWeaponInfo: {},
    posts: [{},{}],
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
        CREATE_NEW_ACCOUNT (state, newData) {
            state.newClient = newData;
        },
        LOGIN (state, type) {
            state.loggedIn = type;
        },
        LOGOUT(state) {
            state.loggedIn = '';
            
        }
    },
    actions: {
    },
    modules: {
    }
})