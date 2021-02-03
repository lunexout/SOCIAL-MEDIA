// import firebase from 'firebase'
// import router from 'vue-router'
export default {
    state: {
        message: '',
        allMessages: []
    },
    mutations: {
        SET_MESSAGE(state, msg){
            state.message = msg
        },
        SET_ALL_MESSAGES(state, messages){
            state.allMessages = messages
        }
    },
    actions: {
        // getAllMessages({commit}, uid){
        //     firebase.firestore().collection('Chats').doc(uid).
        //     commit('SET_ALL_MESSAGES')
        // }
    },
    getters: {
        getError: (state) => { return state.error }
    }
}