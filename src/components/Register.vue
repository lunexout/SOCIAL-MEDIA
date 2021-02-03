<template>
    <div class="register">
        <div class="container bordered" style="max-width: 500px;">
            <h3 class="logoFONT mt-2">ArtHub</h3>
            <div class="container text-center mt-5" style="max-width: 300px;">
                <!-- <form class="loginFORM text-left mt-5"> -->
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size:22px;">
                        რეგისტრაცია როგორც -> აირჩიეთ
                    </small>
                    <div class="dropdown mt-3">
                        <button 
                        class="btn dropdown-toggle logoFONT mb-3" 
                        type="button" id="dropdownMenuButton" 
                        data-toggle="dropdown" aria-haspopup="true" 
                        style="background-color: #FAFAFA; 
                        border-radius: 2px; border:2px solid #FAFAFA;"
                        aria-expanded="false">
                            არჩევა
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <router-link 
                            to="/company"
                            class="dropdown-item"
                            >კომპანია</router-link>
                            <router-link 
                            to="/style"
                            class="dropdown-item"
                            >სტილისტი</router-link>
                            <router-link 
                            to="/client"
                            class="dropdown-item"
                            >კლიენტი</router-link>
                        </div>
                    </div>

                    <button class="btn">
                        <router-link to="/">დაბრუნება მთავარ გვერდზე</router-link>
                    </button>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: "RegisterApp",
    data(){
        return {
        }
    },
    methods: {
    }
}
</script>
<style lang="scss">
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