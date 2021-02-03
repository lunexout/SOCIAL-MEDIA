import firebase from 'firebase'
import Swal from 'sweetalert2'
// import router from 'vue-router'
export default {
    state: {
        // error: ''
    },
    mutations: {
        // SET_ERROR(state, msg){
        //     state.error = msg;
        //     console.log(state.error);
        // }
    },
    actions: {
        // setUserProfile({commit},object){
        //     commit('SET_USER_PROFILE', object)
        // },
        async createUser(state,form){
            let user = '';
            try {
                user = 
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(form.email, form.password)
                
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'რეგისტრაციამ წარმატებით ჩაიარა!',
                    showConfirmButton: false,
                    footer:`<a class="btn btn-primary" href="/">OK</a>`
                })

            } catch (error) {
                if(error.code === 'auth/email-already-in-use'){
                    Swal.fire({
                        icon: 'error',
                        title: 'შეცდომა',
                        text: 'თქვენ მიერ შეყვანილი მაილი დარეგსტრირებულია.',
                        // footer: '<a href>Why do I have this issue?</a>'
                      })
                }
            }
            // firebase.firestore().collection
            let today = new Date()
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

            await firebase.firestore().collection('Users').doc(user.user.uid).set({
                name: form.name,
                surname: form.surname,
                email: form.email,
                password: form.password,
                phonenumber: form.phonenumber,
                age: form.age,
                adress: form.adress,
                sex_value: form.sex_value,
                country_value: form.country_value,
                category: form.category,
                type: form.type,
                uid: user.user.uid,
                createdTime: time,
                createdDate: date
            })
        },
    },
    getters: {
        // getError: (state) => { return state.error }
    }
}