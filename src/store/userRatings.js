import firebase from 'firebase'

export default {
    state: {
        topRatedUsers: [],
        isSpinnerShow: false
    },
    mutations: {
        SET_TOP_RATED_USERS(state, obj){
            state.topRatedUsers.push(obj)
        },
        SET_SPINNER_STATE(state, obj){
            state.isSpinnerShow = obj
        },
        CLEAR_USERS(state){
            state.topRatedUsers = []
        }
    },
    actions: {
    async setRatings({commit}){
        commit('CLEAR_USERS')
        commit('SET_SPINNER_STATE', true)
          await firebase.firestore().collection('Users').orderBy('createdTime').limit(10)
          .get()
          .then(querySnapshot => {
            querySnapshot.docs.map(doc => commit('SET_TOP_RATED_USERS', doc.data()) )
            // do something with documents
          })
        commit('SET_SPINNER_STATE', false)
      }
    },
    getters: {
        getTopRatedUsers: (state) => { return state.topRatedUsers },
        getSpinnerRatings: (state) => { return state.isSpinnerShow }
    }
}