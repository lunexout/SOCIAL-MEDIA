import firebase from 'firebase'
import router from '../router'
import Swal from 'sweetalert2'
export default {
    state: {
        userKey: '',
        userObject: [{}],
        isSpinnerLogin: false,
        isSpinnerProfile: false
    },
    mutations: {
        SET_USER(state, uniqueKey){ 
            state.userKey = uniqueKey 
        },
        SET_USER_OBJECT(state, obj){
            state.userObject = obj
        },
        SET_SPINNER_LOGIN(state, obj){
            state.isSpinnerLogin = obj
        },
        SET_SPINNER_PROFILE(state, obj){
            state.isSpinnerProfile = obj
        }
    },
    actions: {
        async setUser({commit}, form){
            commit('SET_SPINNER_LOGIN', true)
            try {
                const user = 
                await firebase
                    .auth()
                    .setPersistence(firebase.auth.Auth.Persistence.SESSION)
                    .then(() => {
                    return firebase.auth().signInWithEmailAndPassword(form.email, form.password);
                })
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'თქვენ წარმატებით გაიარეთ ავტორიზაცია',
                    showConfirmButton: true,
                });
                router.push('/user')
                console.log(user.user.uid)
                commit('SET_USER', user.user.uid)
                commit('SET_SPINNER_LOGIN', false)
            } catch (error) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'მომხმარებლის პაროლი ან ლოგინი არასწორია',
                    showConfirmButton: true,
                }),
                commit('SET_SPINNER_LOGIN', false)
            }
        },
        async setUserObject({commit}){
            commit('SET_SPINNER_PROFILE', true)
            var docRef = await firebase.firestore().collection("Users").doc(this.getters.getUserKey).get()
            console.log(docRef.data());
            commit('SET_USER_OBJECT', docRef.data())
            // docRef.map(doc => {
            //     console.log(this.getters.getUserKey)
            //     if(doc._.ad.m_.currentUser.uid === this.getters.getUserKey) { console.log(doc.data());}   
            // })
            commit('SET_SPINNER_PROFILE', false)
        }
    },
    getters: {
        getUserKey: (state) => {
            let data = sessionStorage.getItem('firebase:authUser:AIzaSyD6AJi5ngnD15fRl2Iw9WD1CUTpGXyxNFM:[DEFAULT]');
            state.userKey = JSON.parse(data).uid
            return state.userKey
        },
        getUserObject: (state) => { return state.userObject },
        getSpinnerLogin: (state) => { return state.isSpinnerLogin },
        getSpinnerProfile: (state) => { return state.isSpinnerProfile }
    }
}