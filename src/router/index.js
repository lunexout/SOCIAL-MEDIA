import { createRouter, createWebHistory } from 'vue-router'
// import firebase from 'firebase'
const routes = [
  {
    path: '/',
    name: 'Main',
    components: { Main: () => import ('../components/Main.vue')}
  },
  {
    path: '/registration',
    name: 'Registration',
    components: { Registration: () => import('../components/Register.vue')}
  },
  {
    path: '/company',
    name: 'Company',
    components: { Company: () => import('../views/CompanyView.vue') }
  },
  {
    path: '/style',
    name: 'Style',
    components: { Style: () => import('../views/StyleView.vue') }
  },
  {
    path: '/client',
    name: 'Client',
    components: { Client: () => import('../views/ClientView.vue') }
  },
  {
    path: '/user',
    name: 'User',
    components: { User: () => import('../components/User.vue') }
  },
  {
    path: '/user/:name',
    name: 'UserDetailView',
    components: { UserDetailView: () => import('../components/UserDetailView.vue') }
  },
  {
    path: '/profile',
    name: 'Profile',
    components: { Profile: () => import('../components/Profile.vue') }
  },
  {
    path: '/chat',
    name: 'Chat',
    components: { Chat: () => import('../components/Chat.vue') }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
//   var isLogged = false
//   firebase.auth().onAuthStateChanged((user) => { if(user) {isLogged = true} else {isLogged = false} })
//   if(to.name == 'User' && !isLogged){
//     next({name: 'Main'})
//   }else{
//     next()
//   }
// })
export default router
