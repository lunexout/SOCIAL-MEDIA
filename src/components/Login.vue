<template>
    <div class="mainright container bordered" style="max-width: 400px;">
        <h3 class="logoFONT mt-5">ArtHub</h3>
        <div v-if='getSpinnerLogin' class="spinner-border text-dark" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="container text-center" style="max-width: 300px;">
            <form class="loginFORM text-left mt-3">
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        v-model="email"
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="email" class="form-control formFONT" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="მაილი"
                        @keyup.enter="login"
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        შეიყვანეთ მოქმედი მაილი
                    </small>
                    
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputPassword1">Password</label> -->
                    <input 
                    v-model="password"
                    style="background-color: #FAFAFA; border-radius: 2px;" 
                    type="password" 
                    class="form-control formFONT" 
                    id="password" 
                    placeholder="პაროლი"
                    @keyup.enter="login"
                    >
                </div>
                <button 
                    type="button" 
                    class="btn btn-primary btn-lg btn-block formFONT mt-2"
                    @click.prevent='login'
                    >
                    შესვლა
                </button>
                <div>
                    <div class="line ml-2" style="display:inline-block;"></div> 
                        <h5 class="formFONT ml-2 mt-4" style="display:inline-block;">ან</h5> 
                    <span class="line ml-2" style="display:inline-block;"></span>
                </div>

                <div style="margin: 0 auto;" class="text-center">
                    <a class="formFONT mt-4" 
                    style="display:inline-block; 
                    text-decoration: none;
                    cursor: pointer;
                    color: #385185; ">
                    <img src="../assets/svg/fb.svg"> 
                    შესვლა Facebook - ით 
                    </a>

                    <a class="formFONT mt-1" 
                    style="display:inline-block; 
                    text-decoration: none;
                    cursor: pointer;
                    color: #385185; ">
                    <img src="../assets/svg/google.svg"> 
                    შესვლა Google - ით 
                    </a>
                </div>

                <div class="text-center mb-1">
                    <a href='' 
                    style="font-size: 13px;
                    text-decoration: none;
                    cursor: pointer;
                    color: #385185; "
                    >დაგავიწყდათ პაროლი?</a>
                </div>
            </form>
        </div>
    </div>

    <div class="mainright container bordered" style="max-width: 400px;">
        <div>
            <p class="formFONT mt-2" style="font-size: 15px;">ჯერ კიდევ არ გაქვს ექაუნთი?</p>
            <router-link 
            to="/registration" 
            class="formFONT mb-2"
            style="text-decoration: none;
            cursor: pointer;
            color: #4A95F6;"
            >რეგისტრაცია</router-link>
        </div>
    </div>
</template>
<script>

import { mapActions, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
export default {
    name: 'MainRightApp',
    data(){
        return {
            email: '',
            password: '',
            isLoading: false
        }
    },
    computed: { ...mapGetters(['getSpinnerLogin']) },
    methods: {
        ...mapActions(['setUser']),
        login(){
            if(this.email === '' || this.password === ''){
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'გთხოვთ შეიყვანოთ ორივე ველი',
                    showConfirmButton: true,
                })
            }else {
                // this.isLoading = true
                this.setUser({email: this.email, password: this.password})
                // this.isLoading = !true
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@font-face {
    font-family: logoFONT;
    src: url('../fonts/MeriendaOne-Regular.ttf');
}
@font-face {
    font-family: formFONT;
    src: url('../fonts/alk-sanet.ttf');
}
$border_c: #DBDBDB;
$background_c: #ffffff;
.btn {
    font-size: 14px;
}
.line {
    width: 40%;
    height: 1px;
    background-color: $border_c;
}
.bordered {
    margin-top: 15px;
    border: 1px solid $border_c;
    background-color: $background_c;
    // max-width: 400px;
}
.formFONT {
    font-family: formFONT;
    // color: #262626;
}
.logoFONT {
    font-family: logoFONT;
    color: #262626;
}
.loginFORM {
    max-width: 300px;
}
</style>