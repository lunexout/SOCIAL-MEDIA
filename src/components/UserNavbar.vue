<template>
    <div class="container" style="margin-top: 87px;">
        <div class="row">
            <div class="col-xl-12">
                <h3 class='profileFONT'>
                    <img src="https://seud.org/wp-content/uploads/2020/06/nobody-homme.jpg" 
                    class="round_picture"
                    style="border: 7px solid #74CAFE;" 
                    width="150">
                    <h1 class="mt-3" style=" color: white;">{{obj.name}} {{ obj.surname }}</h1>
                </h3>    
            </div>
        </div>
    </div>
    <div class="pos-f-t mt-4 text-right text-center" style="background-color: white; border: 1px solid #DBDBDB; border-radius: 2px;">
            
            <nav class="navbar navbar-dark bg-dark text-right" style="background-color: white !important;">
            <div v-if='getSpinnerProfile' class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>

            <h3 class='profileFONT'>
                <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                class="round_picture" 
                width="50">
            </h3>
            <div v-if='!getSpinnerProfile'>
                        <button 
                        v-if='isProfile' @click='profileToggle'
                        class="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#profileView" 
                        aria-controls="profileView" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <!-- <button class="btn btn-danger toggleProfileFONT">პროფილის ნახვა</button> -->
                            <img src="https://img.icons8.com/dotty/60/000000/circled-down.png"/>
                        </button>

                        <button v-else @click='profileToggle'
                        class="navbar-toggler"
                        data-toggle="collapse" 
                        data-target="#profileView" 
                        aria-controls="profileView" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                            <img src="https://img.icons8.com/dotty/60/000000/send-letter.png"/>
                        </button>
            </div>
            </nav>
        <div class="collapse" id="profileView">
            <div class="bg-dark p-4" style="background-color: white !important;">
                            <div class="row">
                                <div class="col-xl-4 col-md-4 col-12 text-center mt-2" style="border: 1px solid #;">
                                    <div class="image">
                                        <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                                        class="round_picture" 
                                        width="155">
                                    </div>
                                </div>
                                <div class="col-xl-8 col-md-8 col-12 mt-2 text-center" style="border: 1px solid #;">
                                    <div class=" w-100">
                                    <h4 class="mb-0 mt-0 profileFONT">{{obj.name + " " + obj.surname
                                        }}</h4>
                                    <h5></h5>
                                    <div class="p-2 mt-3 bg-primary d-flex justify-content-between rounded text-white stats" style="background-color: #FAFAFA; !important">
                                        <div class="d-flex flex-column"> <span class="articles topRatingFONT_GEO">
                                            <img src="https://img.icons8.com/flat_round/25/000000/book.png"/>
                                                პოსტები</span> <span class="number1">{{obj.posts}}
                                            </span> </div>
                                            <div class="d-flex flex-column"> <span class="followers topRatingFONT_GEO"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="25" height="25"
                                                viewBox="0 0 172 172"
                                                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g><path d="M43.94063,145.93125c0,0 -18.8125,-77.80313 81.43125,-103.2c0,0 10.34688,-3.7625 11.69063,-5.50937l-22.97813,31.84687c-19.75313,29.29375 -37.49063,45.28438 -58.99063,66.1125z" fill="#e74c3c"></path><path d="M43.94063,145.93125l93.12187,-108.70938c0,-0.26875 0.80625,26.875 -8.33125,54.2875c-1.47812,4.56875 -13.70625,2.15 -15.85625,6.58438c-1.47812,3.09063 7.39063,13.16875 5.50937,16.125c-13.30312,21.5 -35.87812,37.625 -74.44375,31.7125z" fill="#f1c40f"></path><path d="M141.09375,37.49063c0,-0.80625 -0.13438,-1.6125 -0.5375,-2.28438c-0.26875,-0.5375 -0.5375,-0.80625 -0.80625,-1.075v0c-0.13438,-0.13438 -0.40312,-0.26875 -0.5375,-0.40313c-1.88125,-1.20938 -4.43438,-0.5375 -5.50938,1.34375c-15.45312,25.12812 -33.19062,42.05938 -50.39062,58.45312c-13.16875,12.49688 -25.8,24.59063 -36.68437,39.50625c-0.13438,-6.85312 0.5375,-16.125 3.62813,-26.06875c8.6,-27.14375 30.77187,-46.49375 66.1125,-57.5125c2.15,-0.67187 3.35938,-2.95625 2.6875,-5.10625c-0.67187,-2.15 -2.95625,-3.35937 -5.10625,-2.6875c-26.20312,8.19687 -59.93125,25.8 -71.4875,63.15625c-5.375,17.33438 -4.03125,32.51875 -2.95625,38.83437c-4.03125,6.58438 -7.79375,13.84063 -11.01875,21.76875c-0.80625,2.01563 0.13438,4.43437 2.15,5.24063c0.5375,0.26875 1.075,0.26875 1.47813,0.26875c1.6125,0 3.09062,-0.94062 3.7625,-2.55312c2.6875,-6.71875 5.77813,-12.76562 9.1375,-18.40938c5.10625,0.67188 9.94375,1.075 14.64688,1.075c26.875,0 47.70313,-11.55625 61.94688,-34.66875c1.20938,-1.88125 0.5375,-4.43437 -1.34375,-5.50937c-1.88125,-1.20938 -4.43438,-0.5375 -5.50937,1.34375c-14.37813,23.1125 -36.14687,33.325 -65.0375,30.23438c11.2875,-16.52813 24.99375,-29.5625 39.10312,-43c14.64688,-14.10937 29.83125,-28.4875 43.67188,-47.97187c-0.80625,9.80937 -2.6875,23.38125 -6.9875,37.0875l-14.24375,5.77812c-2.01562,0.80625 -3.09063,3.225 -2.15,5.24063c0.67188,1.6125 2.15,2.55313 3.7625,2.55313c0.5375,0 1.075,-0.13437 1.47812,-0.26875l15.99063,-6.58438c1.075,-0.40313 1.88125,-1.34375 2.28438,-2.41875c4.8375,-14.5125 6.85312,-28.75625 7.79375,-38.29687c0.80625,-9.675 0.94063,-14.5125 0.67188,-17.06563zM119.59375,170.65625h-53.75c-2.28438,0 -4.03125,-1.74687 -4.03125,-4.03125c0,-2.28438 1.74687,-4.03125 4.03125,-4.03125h53.75c2.28437,0 4.03125,1.74687 4.03125,4.03125c0,2.28438 -1.74688,4.03125 -4.03125,4.03125zM139.75,170.65625c-1.075,0 -2.15,-0.40312 -2.82188,-1.20937c-0.80625,-0.80625 -1.20937,-1.74688 -1.20937,-2.82188c0,-1.075 0.40312,-2.15 1.20937,-2.82188c1.47813,-1.47812 4.16563,-1.47812 5.64375,0c0.13438,0.13438 0.40312,0.40313 0.5375,0.67188c0.13437,0.26875 0.26875,0.40313 0.40312,0.67188c0.13437,0.26875 0.13437,0.5375 0.26875,0.80625c0,0.26875 0.13437,0.5375 0.13437,0.80625c0,1.075 -0.40312,2.15 -1.20937,2.82187c-0.80625,0.67188 -1.88125,1.075 -2.95625,1.075z" fill="#444b54"></path></g></g></svg>
                                                გამომწერი</span> <span class="number2">{{obj.followers}}
                                            </span> </div>
                                            <div class="d-flex flex-column"> <span class="rating topRatingFONT_GEO">
                                                <img src="https://img.icons8.com/fluent/25/000000/rating-circled.png"/>
                                                რეიტინგი</span> <span class="number3">{{obj.rating}}/10
                                            </span> </div>
                                        </div>
                                        <div class="button mt-2 d-flex flex-row align-items-center"> 
                                            <button class="btn btn-sm btn-outline-info w-100 topRatingFONT_GEO">ჩატი</button> 
                                            <button class="btn btn-sm btn-primary w-100 ml-2 topRatingFONT_GEO">გამოწერა</button>
                                        </div>
                                        <div class="button mt-2 d-flex flex-row align-items-center"> 
                                            <button class="btn btn-sm btn-outline-dark w-100 topRatingFONT_GEO">პარამეტრები</button> 
                                            <button class="btn btn-sm btn-outline-success w-100 ml-2 topRatingFONT_GEO">შეფასება</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-5">
                                <div class="col-xl-12 text-left topRatingFONT_GEO">სტატუსი 
                                    <div class="mt-2" style="width:18%; background-color:#A18F2F; height: 1px;"></div>
                                    <blockquote class="blockquote mt-2">
                                        <footer class="blockquote-footer topRatingFONT_GEO">დაბალი ფასები მუდამ</footer>
                                    </blockquote>
                                </div>
                            </div>
                            <div class="row mt-2">
                                <div class="col-xl-12 text-left topRatingFONT_GEO">კატეგორიები 
                                    <div class="mt-2 mb-2" style="width:18%; background-color:#A18F2F; height: 1px;"></div>
                                    <div class="category_tag ml-1 mt-1" v-for='item in obj.category' :key='item'>{{item}}</div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-xl-12 text-left topRatingFONT_GEO">ინფორმაცია 
                                    <div class="mt-2 mb-2" style="width:18%; background-color:#A18F2F; height: 1px;"></div>
                                    <p class="mt-1">ქალაქი: {{obj.country_value}}</p>
                                    <p class="mt-1">ქუჩა: {{obj.adress}}</p>
                                    <p class="mt-1">ასაკი: {{obj.age}}</p>
                                    <p class="mt-1">ტელეფონი: {{obj.phonenumber}}</p>
                                    <p class="mt-1">მაილი: {{obj.email}}</p>
                                    <p class="mt-1">სქესი: {{obj.sex_value}}</p>
                                    <p class="mt-1">შექმნის თარიღი: {{obj.createdDate}}</p>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-xl-12 text-left topRatingFONT_GEO">ნამუშევრები 
                                    <div class="mt-2 mb-2" style="width:18%; background-color:#A18F2F; height: 1px;"></div>
                                    <a href="http://instagram.com">instagram</a><br>
                                    <a class="mt-1" href="http://facebook.com">facebook</a>
                                </div>
                            </div>
            </div>
        </div>
<!--  -->
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'UserNavbarApp',
    props: { obj: {
        type: Object
    }},
    computed: { ...mapGetters(['getSpinnerProfile']) },
    data(){
        return {
            isProfile: true
        }
    },
    methods: {
        profileToggle(){
            this.isProfile = !this.isProfile
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: toggleProfileFONT;
    src: url('../fonts/bpg_glaho.ttf');
}
@font-face {
    font-family: profileFONT;
    src: url('../fonts/Dosis-Regular.ttf');
}
.toggleProfileFONT {
     font-family: toggleProfileFONT;
}
.profileFONT {
    font-family: profileFONT;
}
.round_picture {
    border-radius: 50%;
}
.card {
    // width: 500px;
    border: none;
    border-radius: 10px;
    background-color: #fff
}
.category_tag {
    width: auto;
    height: auto;
    padding-top: 7px;
    padding-bottom: 7px;
    padding-left: 15px;
    padding-right: 15px;
    background-color: #200E1B;
    color:white;
    display: inline-block;
    border-radius: 35px;
}
.stats {
    background: #f2f5f8 !important;
    color: #000 !important
}

.articles {
    font-size: 15px;
    color: #a1aab9
}

.number1 {
    font-weight: 500
}

.followers {
    font-size: 15px;
    color: #a1aab9
}

.number2 {
    font-weight: 500
}

.rating {
    font-size: 15px;
    color: #a1aab9
}

.number3 {
    font-weight: 500
}
</style>