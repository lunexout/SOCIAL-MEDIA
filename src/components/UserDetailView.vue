<template>
        <div class="container p-0 mt-2 mb-2" style="max-width:2500px;">
            <div class="container p-0" style="max-width:1440px;">
                <div class="row">
                    <div class="col-xl-3 goBackFONT" @click="$router.go(-1)">
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

        <div class="container" style="max-width:2500px; background-color: white; z-index: 999999;">
            <div class="row">
                <div class="col-xl-12 text-center ">
                    <h3 class='profileFONT'>
                    <img :src="getDetailedUserShow.image" 
                    class="round_picture"
                    style="
                    border: 1px solid #74CAFE; margin-top: -80px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);" 
                    width="155"
                    height="155"
                    >
                    <!-- <h3 class="mt-1" style=" color: black;">{{obj.name}} {{ obj.surname }}</h3> -->
                    </h3>
                    <h4 class="profileNameFONT" v-if='getDetailedUserShow.type ==="Stylist"'>
                        {{
                        getDetailedUserShow.name.toUpperCase() 
                        + ' ' + 
                        getDetailedUserShow.surname.toUpperCase()
                        }}
                    </h4>
                    <h4 class="profileNameFONT" v-if='getDetailedUserShow.type ==="Salon"'>
                        {{getDetailedUserShow.name.toUpperCase()}}</h4>
                </div>
            </div>   
        </div>

        <div class="container mt-5" style="max-width: 1440px;">
            <div class="row">
                <div class="col-xl-3" style="border: 1px solid #DFDFDF;">
                    <SidebarMenu/>
                </div>
                <div class="col-xl-6" style="border: 1px solid red;">
                    <MyPosts :uid='getDetailedUserShow.uid'/>
                </div>
                <div class="col-xl-3" style="border: 1px solid #DFDFDF;">
                    <UserInformation :info='getDetailedUserShow'/>
                </div>
            </div>
        </div>   
</template>
<script>
import SidebarMenu from './SidebarMenu.vue'
import MyPosts from './MyPosts.vue'
import UserInformation from './UserInformation.vue'



import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'UserDetailViewApp',
    data(){return {  }},
    components: {SidebarMenu, MyPosts, UserInformation},
    computed: {
        ...mapGetters(['getDetailedUser', 'getSpinnerDetailedUser', 'getUserObject','getDetailedUserShow'])
    },
    methods: {
        ...mapActions(['getDetailUser']),
        rar(){
            console.log(this.getDetailedUser);
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: goBackFONT;
    src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
@font-face {
    font-family: profileNameFONT;
    src: url(../fonts/Raleway-ExtraLight.ttf);
}
.profileNameFONT {
    font-family: profileNameFONT;
}
.goBackFONT {
    font-family: goBackFONT;
    font-size: 20px;
}
</style>