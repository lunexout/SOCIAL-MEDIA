import { createStore } from 'vuex'
import stylistRegister from './stylistRegister.js'
import salonRegister from './salonRegister.js'
import userLogin from './userLogin.js'
import userRatings from './userRatings.js'
import userDetailView from './userDetailView.js'
import userChat from './userChat.js'

export default createStore({
  modules: {
    stylistRegister,
    salonRegister,
    userLogin,
    userRatings,
    userDetailView,
    userChat
  }
})
