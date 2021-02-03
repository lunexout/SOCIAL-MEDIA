<template>
    <div class="userapp">
        <div class="container p-0" style="max-width:2500px;">
            <Navbar :image='getUserObject.image' @logout='logout'/>
        </div>
        <div class="container" style="height: 47px; max-width:2500px;"></div>
                    <!-- <div v-if='spinner' class="spinner-border text-primary" role="status">
                    </div>
                    <h3 v-else  class='profileFONT m-0 p-0'>
                    <img id='profileImage' :src="url" 
                    class=""
                    style="
                    border-radius: 3px; margin-top: -80px;
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); cursor: pointer;" 
                    width="280"
                    height="220"
                    data-toggle="modal" data-target="#ProfilePicture"
                    >
                    </h3> -->
        <!-- <div class="container mt-4" style='max-width:1440px;'>
            <div class="row">
                <div class="col-xl-4 col-md-4">
                    <button type="button" class="btn btn-danger profileMenuFONT">
                        სალონი <span class="badge badge-light"> Salon</span>
                    </button>
                    <p class='profileMenuFONT' style='font-weight: 600'>
                        წითელი ფერი მიუთითებს იმაზე, 
                        რომ მომხმარებელი დარეგისტრირებულია, როგორც კომპანია/სალონი
                    </p>
                </div>
                <div class="col-xl-4 col-md-4">
                    <button type="button" class="btn btn-primary profileMenuFONT">
                        სტილისტი <span class="badge badge-light"> Stylist</span>
                    </button>
                    <p class='profileMenuFONT' style='font-weight: 600'>
                        ლურჯი ფერი მიუთითებს იმაზე, 
                        რომ მომხმარებელი დარეგისტრირებულია, როგორც სტილისტი
                    </p>
                </div>
                <div class="col-xl-4 col-md-4">
                    <button type="button" class="btn btn-success profileMenuFONT">
                        კლიენტი <span class="badge badge-light"> Client</span>
                    </button>
                    <p class='profileMenuFONT' style='font-weight: 600'>
                        მწვანე ფერი მიუთითებს იმაზე, 
                        რომ მომხმარებელი დარეგისტრირებულია, როგორც კლიენტი
                    </p>
                </div>
            </div>
        </div> -->
<!-- PROFILE PICTURE MODAL -->
<div class="modal fade" id="ProfilePicture" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="ProfilePicture">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
            <input type="file" @change='uploadImage' class="form-control-file" id="ProfileChoose">
            <img :src='url' id='TestProfilePic' class="round_picture"  width="155" height="155">
            <button type="button" class="btn btn-secondary" @click.prevent='addImage'>ფოტოს დამატება</button>   
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal"  @click.prevent='getImage'>შენახვა</button>
      </div>
    </div>
  </div>
</div>
<!-- END PROFILE PICTURE MODAL -->
        <div class="container mt-3" style="max-width: 1440px;">
            <div class="row">
                <div class="col-xl-3 col-md-4 m-0 p-0 text-left">
                    <SidebarMenu/>
                </div>
                <div class="col-xl-6 col-md-8 ">
                    <CreatePost :url='url' :uid='getUserObject.uid' :obj='getUserObject'/>
                    <Posts class='mt-3'/>
                </div>
                <div class="col-xl-3 col-md-12">
                     <TopRatings/>
                </div>
            </div>
        </div>
        <h1>user</h1>
        <div class="container">
            <!-- <p>{{getUserObject}}</p> -->
        </div>
    </div>
</template>
<script>
import Navbar from './Navbar.vue'
import TopRatings from './TopRatings.vue'
// import UserRatings from './UserRatings.vue'
import CreatePost from './CreatePost.vue'
import Posts from './Posts.vue'
import SidebarMenu from './SidebarMenu.vue'

import firebase from 'firebase/app'
import { mapActions, mapGetters } from 'vuex';

import router from '../router'
export default {
    name: 'UserApp',
    // components: { MainLeft, MainRight }
    data(){return { url: "", file: '', spinner: false, allPostUsers:[] }},
    components: {Navbar, TopRatings, CreatePost, Posts, SidebarMenu},
    computed: {
        ...mapGetters(['getUserKey', 'getUserObject'])
    },
    methods: {
        ...mapActions(['setUserObject','setUserObject']),
        logout(){
            firebase
                .auth()
                .signOut()
                .then(() => { this.$router.replace({ name: "Main" }); });
        },
        uploadImage(e){
            var file = e.target.files[0]
            this.file = file
            document.getElementById('TestProfilePic').src = URL.createObjectURL(file)
        },
        async addImage(){
            // this.spinner = true;
            var storageRef = await firebase.storage().ref('profile_pictures/' + this.getUserObject.uid +'/profile');
            // var mountainsRef = storageRef.child('profile_pictures/' + this.getUserObject.uid);

            var metadata = {
            contentType: 'image/jpeg'
            };

            storageRef.put(this.file, metadata)
            // this.spinner = false;
        },
        async getImage(){
            // this.spinner = true;
            var storageRef = await firebase.storage().ref();
            storageRef
            .child('profile_pictures/' + this.getUserObject.uid + '/profile')
            .getDownloadURL()
            .then((url) =>{ 
                this.url = url
            })

            await firebase.firestore().collection('Users').doc(this.getUserObject.uid).update({
                image: this.url
            })
        }
    },
    mounted() {
        this.setUserObject()
        // this.getImage()
    },
    updated(){
        // this.getUserObjects()
        this.getImage()
        
    },
    created(){
        let data = sessionStorage.getItem('firebase:authUser:AIzaSyD6AJi5ngnD15fRl2Iw9WD1CUTpGXyxNFM:[DEFAULT]');
        try{
            if(!JSON.parse(data)){
            router.push('/')
            }
        }catch(error){
            console.log(error)
        }

        // var isLogged = false
        // firebase.auth().onAuthStateChanged((user) => { if(user) {isLogged = true} else {isLogged = false} })
        // if(!isLogged){
        //     router.push('/')
        // }
    }
}
</script>

<style lang="scss" scoped>
$b_c: #DBDBDB;
.bordered {
    border: 1px solid $b_c;
}
@font-face {
    font-family: profileMenuFONT;
    src: url('../fonts/bpg_arial_2009.ttf');
}
.profileMenuFONT {
    font-family: profileMenuFONT;
}
@font-face {
    font-family: usernameFONT;
    src: url('../fonts/OpenSansCondensed-Light.ttf');
}
.usernameFONT {
    font-family: usernameFONT;
    color: white;
    font-weight: 200;
    font-size: 40px;
}
</style>