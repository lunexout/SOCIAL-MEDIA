<template>
    <div>
        <div v-if='spinner'>
            <Spinner/>
        </div>
        <div v-else style="border: 1px solid #EBEEF0;" class="p-3">
            <div class="mt-3" v-for='post in posts' :key='post.uid'>
                <div>
                    <div class="row">
                        <div class="col-xl-12 text-left" style="display: inline-block;">
                            <router-link :to="{ name: 'UserDetailView', params: { name: post.obj.name }}">
                            <img :src='post.obj.image'
                            @click='detailedUserView(post.obj)'
                            width="75" height="75" 
                            style="border-radius: 50%; display: inline-block;">
                            </router-link>
                            &nbsp; 
                            <p style="font-size: 20px; display: inline-block; font-weight: 100">
                                <!-- {{post.obj.name.toUpperCase()}} -->
                                <span v-if='post.obj.type === "Stylist"' 
                                class="badge badge-primary"
                                >
                                {{post.obj.name.toUpperCase() + ' ' + post.obj.surname.toUpperCase() }}
                                </span>
                                <span v-else class="badge badge-danger">
                                    {{post.obj.name.toUpperCase()}}
                                </span>
                            </p>
                            <h5 class='postTitleFONT' style=''>{{post.title}}</h5>
                            <div class="row">
                                <div class="col-xl-12">
                                    <img style="width: 100%; border-radius:7px;"
                                    src='https://i.pinimg.com/564x/6d/44/06/6d44069ff6a986c1992fa580b6dcd556.jpg'>
                                </div>
                            </div>
                            <h4 class='postTitleFONT mt-3'>რას გთავაზობთ:</h4>
                            <div v-for='item in post.obj.category' :key='item'>
                                <div class='categories'>{{item}}</div>
                            </div>
                        </div>
                        <div class="col-xl-12 text-left mt-3">
                            <h4 class='postTitleFONT'>აღწერა:</h4>
                            <p class='profileMenuFONT'>{{post.description}}</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xl-12 text-left">
                            <div style="display: inline-block;">
                                <h4 class='postTitleFONT' id='PostAdress'>მისამართი: {{post.obj.adress}} </h4>
                                <h4 class='postTitleFONT' id='PhoneAdress'>ტელეფონი: {{post.obj.phonenumber}}</h4>
                                <h5 class='profileMenuFONT mt-3'>
<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="44" height="44"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M2.65391,86c0,-46.02344 37.32266,-83.34609 83.34609,-83.34609c46.02344,0 83.34609,37.32266 83.34609,83.34609c0,46.02344 -37.32266,83.34609 -83.34609,83.34609c-46.02344,0 -83.34609,-37.32266 -83.34609,-83.34609z" fill="#1da1f2"></path><path d="M28.18516,86c0,-31.91406 25.86719,-57.81484 57.81484,-57.81484c31.91406,0 57.81484,25.86719 57.81484,57.81484c0,31.91406 -25.86719,57.81484 -57.81484,57.81484c-31.91406,0 -57.81484,-25.90078 -57.81484,-57.81484z" fill="#ffffff"></path><path d="M34.56797,86c0,-28.42031 23.04531,-51.43203 51.43203,-51.43203c28.42031,0 51.43203,23.01172 51.43203,51.43203c0,28.42031 -23.04531,51.43203 -51.43203,51.43203c-28.42031,0 -51.43203,-23.01172 -51.43203,-51.43203z" fill="#1da1f2"></path><path d="M86,93.92813c-4.36719,0 -7.92812,-3.56094 -7.92812,-7.92813c0,-4.36719 3.56094,-7.92812 7.92812,-7.92812c4.36719,0 7.92813,3.56094 7.92813,7.92812c0,4.36719 -3.56094,7.92813 -7.92813,7.92813z" fill="#ffffff"></path><path d="M86,88.58672h-29.62969c-1.41094,0 -2.58672,-1.14219 -2.58672,-2.58672c0,-1.44453 1.14219,-2.58672 2.58672,-2.58672h29.62969c1.41094,0 2.58672,1.14219 2.58672,2.58672c0,1.44453 -1.17578,2.58672 -2.58672,2.58672z" fill="#ffffff"></path><path d="M86,88.58672c-0.67187,0 -1.31016,-0.26875 -1.81406,-0.77266c-1.00781,-1.00781 -1.00781,-2.65391 0,-3.66172l20.9625,-20.9625c1.00781,-1.00781 2.65391,-1.00781 3.66172,0c1.00781,1.00781 1.00781,2.65391 0,3.66172l-20.9625,20.9625c-0.5375,0.50391 -1.17578,0.77266 -1.84766,0.77266z" fill="#ffffff"></path><g fill="#ffffff"><path d="M86,39.64063c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM86,125.64063c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z"></path><g><path d="M129,82.64063c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM43,82.64063c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z"></path></g></g><g fill="#ffffff"><path d="M116.40234,52.23828c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM55.59766,113.04297c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z"></path><g><path d="M116.40234,113.04297c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937zM55.59766,52.23828c-1.85533,0 -3.35937,1.50404 -3.35937,3.35938c0,1.85533 1.50404,3.35938 3.35938,3.35938c1.85533,0 3.35938,-1.50404 3.35938,-3.35937c0,-1.85533 -1.50404,-3.35937 -3.35937,-3.35937z"></path></g></g></g></g></svg>                                   
                                    აქცია დამატებულია: {{post.created}} - ზე 
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
            </div>
        </div>
    </div>
</template>
<script>
import firebase from 'firebase/app'
import Spinner from './Spinner.vue'
import { mapActions } from 'vuex'
export default {
    name: 'PostsApp',
    // props: {
    //     obj: {
    //         type: Object
    //     }
    // },
    components: {Spinner},
    data(){
        return {
            spinner: false,
            posts: [],
        }
    },
    methods: {
        ...mapActions(['detailedUserView'])
    },
    async mounted(){
        // var today = new Date()
        // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        // const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        console.log(this.posts);
        this.spinner = true
            await firebase.firestore().collection('Posts')
                .orderBy('createdTime', 'desc')
                // .orderBy('createdTime')
                .get()
                .then(querySnapshot => {
                    querySnapshot.docs.map(doc => this.posts.push(doc.data()))
                })
        this.spinner = false
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: postTitleFONT;
    src: url(../fonts/alk-sanet.ttf);
}
@font-face {
    font-family: profileMenuFONT;
    src: url('../fonts/bpg_arial_2009.ttf');
}
@font-face {
    font-family: logoNameFONT;
    src: url('../fonts/Pacifico-Regular.ttf');
}
.logoNameFONT {
    font-family: logoNameFONT;
}
.postTitleFONT {
    font-family: postTitleFONT;
    font-weight: 600;
}
.profileMenuFONT {
    font-family: profileMenuFONT;
}
.categories {
    text-align: center;
    margin-top: 10px;
    padding: 5px;
    width: 190px;
    height: 30px;
    border-radius: 10px;
    color: white;
    background-color: #1DA1F2;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    border-top-right-radius: 25px;
    border-bottom-left-radius: 25px;
    font-family: logoNameFONT;
    font-family: profileMenuFONT;
}


//loader


</style>