<template>
    <div>
        <div class="container p-0 mt-2 mb-2" style="max-width:2500px;">
            <div class="container" style="max-width:1440px;">
                <div class="row">
                    <div class="col-xl-3 goBackFONT" @click="goBack">
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="35" height="35"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#1a91da"></path><path d="M77.73594,86.90703c10.31328,-10.31328 20.62656,-20.62656 30.93984,-30.93984c9.00312,-9.00313 -5.00547,-22.91094 -14.04219,-13.87422c-12.63125,12.63125 -25.2625,25.2625 -37.89375,37.89375c-3.82969,3.82969 -3.69531,10.17891 0.06719,13.94141c12.63125,12.63125 25.2625,25.2625 37.89375,37.89375c9.00313,9.00313 22.91094,-5.00547 13.87422,-14.04219c-10.27969,-10.31328 -20.55938,-20.59297 -30.83906,-30.87266z" fill="#ffffff"></path></g></g></svg>
                        უკან დაბრუნება
                    </div>
                </div>
            </div>
        </div>
    
        <div class="container p-0" style="max-width:2500px; height: 100px; background-color: #3CA2E0; " ></div>
    
                    <div v-if='spinner' class="spinner-border text-primary" role="status">1
                    </div>
                    <h3 v-else  class='profileFONT m-0 p-0'>
                    <img id='profileImage' :src="url" 
                    class="round_picture"
                    style="
                    margin-top: -80px;
                    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); cursor: pointer;" 
                    width="155"
                    height="155"
                    data-toggle="modal" data-target="#ProfilePicture"
                    >
                    </h3>

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
    
    </div>
</template>
<script>
import {mapGetters,mapActions} from 'vuex'
import firebase from 'firebase/app'
import router from '../router'
export default {
    name: 'ProfileApp',
    data(){
        return {
            spinner: false,
            url: null,
            file: null
        }
    },
    components: {},
    computed: {
         ...mapGetters(['getUserObject'])
    },
    methods: {
        ...mapActions(['setUserObject']),

        goBack(){
            router.push('/user')
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
    mounted(){
        this.spinner = true
        this.setUserObject()
        this.spinner = false
    },
    updated(){
        this.getImage()
        
    },
    created(){
        console.log(this.getUserObject);
    }
}
</script>
<style lang="scss" scoped>

</style>