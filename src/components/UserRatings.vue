<template>
        <div class="row">
            <div 
            class="col-xl-12 mt-4" 
            style="background-color: transparent;" >
            <div>TOP - რეიტინგები</div>
            <div v-if='getSpinnerRatings' class="spinner-border text-dark" role="status">
                <span class="sr-only">Loading...</span>
            </div>
            <!-- <button class="btn btn-primary" @click='getRatingUsers'>განახლება</button> -->
            <div v-for='user in getTopRatedUsers' :key='user'>
                <div class="card mt-2">
                <div class="card-body text-left">
                    <div style="display: block;" class='topRatingFONT_ENG'>
                        <h4 style="inline-block;">
                        <img
                        src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" 
                        class="round_picture" 
                        style="display: inline-block;"
                        width="50"
                        >
                            {{user.name.toUpperCase()}} {{user.surname.toUpperCase()}} {{user}}
                            <span v-if='user.type' class="badge badge-success topRatingFONT_GEO">სტილისტი</span>
                        </h4>

                        </div>
                        <blockquote class="blockquote mt-2">
                            <footer class="blockquote-footer topRatingFONT_GEO">დაბალი ფასები მუდამ</footer>
                        </blockquote>
                </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'UserRatingsApp',

    computed: {
        ...mapGetters(['getTopRatedUsers', 'getSpinnerRatings'])
    },
    methods: { 
        ...mapActions(['setRatings']),
        looogger(){
            console.log('1')
        }
    },
    created(){
        this.setRatings()
    }
}
</script>
<style lang="scss">
@font-face {
    font-family: topRatingFONT_GEO;
    src: url('../fonts/bpg_extrasquare_mtavruli_2009.ttf');
}
@font-face {
    font-family: topRatingFONT_ENG;
    src: url('../fonts/Caveat-Regular.ttf');
}
.topRatingFONT_GEO {
    font-family: topRatingFONT_GEO;
    font-weight: 400;
}
.topRatingFONT_ENG {
    font-family: topRatingFONT_ENG;
}
.round_picture {
    border-radius: 50%;
}
</style>