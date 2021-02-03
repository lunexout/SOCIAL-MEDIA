import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyD6AJi5ngnD15fRl2Iw9WD1CUTpGXyxNFM",
    authDomain: "arthub-media.firebaseapp.com",
    projectId: "arthub-media",
    storageBucket: "arthub-media.appspot.com",
    messagingSenderId: "754142800308",
    appId: "1:754142800308:web:caeaaf32dd680538f36ae1",
    measurementId: "G-YS8EPWGW0S"
};
// const firebaseApp =
 firebase.initializeApp(firebaseConfig);
// export const db = firebaseApp.firestore();

createApp(App).use(store).use(router).mount('#app')
