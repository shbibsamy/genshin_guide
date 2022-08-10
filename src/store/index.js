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
    guides: [
        {'title':'Welcome to GG!', 'content1':'The grand inauguration of my small site dedicated to Genshin Impact.', 'imgurl':'https://bit.ly/3bLJgLW','content2':'Thanks for checking out our content and I look forward to helping out new players enjoy the game.'},
        {'title':'Priorities for Beginners', 'content1':'There are a few different paths to power in Genshin Impact. Here I want to help you prioritise your progression. The general rule of thumb is to get your character to the highest level available to you, except 90 which I believe is only useful after AR50. The same applies to your second priority, your weapon. The big milestone to hit is level 7O with both and then you can use the character quite comfortably in most over-world end-game content.', 'imgurl':'https://bit.ly/3zLapGS','content2':'Next you want to focus on artifacts. In this order: Flower - Feather - Time piece - Goblet - Circlet, aim for these main stats for DPS Characters: HP - ATK - ATK% - Elemental Damage% - CRIT.'}],
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