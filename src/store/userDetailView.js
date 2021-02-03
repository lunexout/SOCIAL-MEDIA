// import firebase from 'firebase'

export default {
    state: {
        // detailedUser: [],
        isSpinnerShow: false
    },
    mutations: {
        // SET_DETAIL_VIEW(state, obj){
        //     state.detailedUser.push(obj)
        // },
        SET_SPINNER_STATE(state, obj){
            state.isSpinnerShow = obj
        },
        CLEAR_USER(state){
            state.detailedUser = []
        },
        ADD_DETAIL_VIEW(state, object){
            localStorage.removeItem('DetailViewOfItem')
            localStorage.setItem('DetailViewOfItem', JSON.stringify(object))
            // state.DetailViewOfItem = []
            // state.DetailViewOfItem.push(object)
        }
    },
    actions: {
    // async getDetailUser({commit}, user){
    //     commit('CLEAR_USER')
    //     commit('SET_SPINNER_STATE', true)
    //       await firebase.firestore().collection('Users').where('uid', '==', user.uid)
    //       .get()
    //       .then(querySnapshot => {
    //         querySnapshot.docs.map(doc => commit( 'SET_DETAIL_VIEW', doc.data()) )
    //         // do something with documents
    //       })
    //     commit('SET_SPINNER_STATE', false)
    //   },
      detailedUserView(ctx,object){
        ctx.commit('ADD_DETAIL_VIEW', object)
      }
    },
    getters: {
        getDetailedUserShow: () => {return JSON.parse(localStorage.getItem('DetailViewOfItem'))},
        getDetailedUser: (state) => { return state.detailedUser },
        getSpinnerDetailedUser: (state) => { return state.isSpinnerShow }
    }
}