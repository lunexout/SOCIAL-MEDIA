<template>
<div>
    <Register />
    <div class="container bordered mb-2" style="max-width: 500px;">
        <div class="container text-center" style="max-width: 300px;">
            <p class="mt-3">
                გთხოვთ ინფორმაცია შეავსოთ სწორად, რადგან ის შემდგომ გამოჩნდება თქვენს პროფაილზე
            </p>
           <form class="loginFORM text-left mt-3">
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="text" class="form-control formFONT" 
                        id="name" 
                        aria-describedby="emailHelp" 
                        placeholder="სახელი"
                        v-model.trim='form.name'
                    >
                </div>

                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="text" class="form-control formFONT" 
                        id="surname" 
                        aria-describedby="emailHelp" 
                        placeholder="გვარი"
                        v-model.trim='form.surname'
                    >
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="number" class="form-control formFONT" 
                        id="age" 
                        aria-describedby="emailHelp" 
                        placeholder="ასაკი"
                        v-model.trim='form.age'
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        შეიყვანეთ ასაკი
                    </small>
                </div>

                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="email" class="form-control formFONT" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="მაილი"
                        v-model.trim='form.email'
                    >
                    <small v-if="isErrorEmail === false"
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        შეიყვანეთ მოქმედი მაილი
                    </small>
                    <small v-else
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 12px; color:red !important;">
                        ეს მაილი უკვე გამოყენებულია სხვა მომხმარებლის მიერ ან აკლია '@'
                    </small>
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="password" class="form-control formFONT" 
                        id="password" 
                        aria-describedby="emailHelp" 
                        placeholder="პაროლი"
                        v-model.trim='form.password'
                    >
                    <small v-if='isErrorPassword === false'
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 12px;">
                        პაროლი
                    </small>
                    <small v-else
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 12px; color:red !important;">
                        პაროლი არ შეიცავს 6 სიმბოლოს
                    </small>
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="text" class="form-control formFONT" 
                        id="phone" 
                        aria-describedby="emailHelp" 
                        placeholder="ტელეფონის ნომერი"
                        v-model.trim='form.phonenumber'
                    >
                </div>

                <div class="form-group mb-3">
                    <select class="custom-select" id="categories" v-model='form.category' multiple>
                        <option 
                        v-for='item in categories' 
                        :key='item'
                        :value='item.label'
                        >
                            {{item.label}}
                        </option>
                    </select>
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        აირჩიეთ კატეგორიები
                    </small>
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 15px; color: green !important;">
                        თუ რეგისტრირდებით კომპიუტერით, მაშინ კატეგორიის ასარჩევად
                        დააჭირეთ "Ctrl" ღილაკს არაუშვათ თითი და დააწკაპეთ სასურველ კატეგორიას.
                    </small>
                </div>

                <div class="form-group mb-3">
                    <select class="custom-select" id="sex" v-model='form.sex_value'>
                        <option 
                        v-for='item in sex' 
                        :key='item'
                        :value='item.label'
                        >
                            {{item.label}}
                        </option>
                    </select>
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        აირჩიეთ სქესი
                    </small>
                </div>
                
                <div class="form-group mb-3">
                    <select class="custom-select" id="countries" v-model='form.country_value'>
                        <option 
                        v-for='item in countries' 
                        :key='item'
                        :value='item.label'>
                        {{item.label}}
                        </option>
                    </select>
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        აირჩიეთ ქალაქი
                    </small>
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="text" class="form-control formFONT" 
                        id="adress" 
                        aria-describedby="emailHelp" 
                        placeholder="მისამართი"
                        v-model.trim='form.adress'
                    >
                </div>
            
                <small
                    v-if='isErrorFields' 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 18px; color: red !important;">
                        გთხოვთ შეავსოთ ყველა ველი, ყოველი მათგანი საჭიროა.
                </small>

                <button 
                    type="button" 
                    class="btn btn-primary btn-lg btn-block formFONT mt-2 mb-2"
                    @click='register'>
                    რეგისტრაცია</button>
           </form>
        </div>
    </div>    
</div>
</template>
<script>
import Register from '../components/Register.vue'
import {mapActions, mapGetters} from 'vuex'
import firebase from 'firebase'
export default {
    name: 'StyleViewApp',
    data() {
        return {
            form: {
                name: '',
                surname: '',
                email: '',
                password: '',
                phonenumber: '',
                age: null,
                adress: '',
                sex_value: '',
                country_value: '',
                category: ['Stylist'],
                type: 'Stylist'
            },
            sex: [
                { label: 'კაცი', value: 'male' },
                { label: 'ქალი', value: 'female' },
                { label: 'სხვა', value: 'other' },
            ],
            countries: [
                { label: 'თბილისი', value: 'Tbilisi' },
                { label: 'ბათუმი', value: 'Batumi' },
                { label: 'ქუთაისი', value: 'Kutaisi' },
                { label: 'ქობულეთი', value: 'Kobuleti' },
            ],
            categories:[
                { label: 'მანიკური + პედიკური', value: 'Manikuri_Pedikuri' },
                { label: 'სტილისტი', value: 'Stylist' },
                { label: 'ვიზაჟისტი', value: 'Make_Up_Artist' },
                { label: 'კოსმეტოლოგი', value: 'Cosmetic' },
                { label: 'პირსინგი', value: 'Piercing' },
                { label: 'Tattoo არტისტი', value: 'Tattoo_Artist' }
            ],
            isErrorEmail: false,
            isErrorFields: false,
            isErrorPassword: false
        }
    },
    computed: {
        ...mapGetters(['getError'])
    },
    methods: {
         ...mapActions(['createUser']),
        isErrorValidate(){
            this.isErrorFields = false;
            for (const [key, value] of Object.entries(this.form)) {
                console.log(`${key}`)
                if(value === '' || null) {
                    this.isErrorFields = true 
                    return true
                }
            }
        },
        checkMail(){
            try {
                const user = firebase
                    .auth()
                    .createUserWithEmailAndPassword(this.form.email, this.form.password)
                console.log(user);
                return true;
            } catch (error) {
                console.log(error.code, 'checkMAIL');
            }
            return false;
        },
        async register(){
            try {
                if(!this.isErrorValidate()){
                    this.isErrorEmail = false
                    this.isErrorPassword = false
                    if(this.form.password.length < 6){
                        console.log(this.form.password.length);
                        this.isErrorPassword = true;
                    }else if (!this.form.email.includes('@')){
                        this.isErrorEmail = true;
                    }
                    else {
                        this.createUser(this.form)
                    }
                }else {
                    console.log('we have errors')
                }
            } catch (error) {
                console.log(error, 1)
                this.isErrorEmail = false; 
                this.isErrorPassword = false;
                if(error.code === 'auth/email-already-in-use'){
                    this.isErrorEmail = true; 
                    this.isErrorPassword = false;
                } else if(error.code === 'auth/weak-password') {
                    this.isErrorEmail = false; 
                    this.isErrorPassword = true;
                } else {
                    this.isErrorEmail = true; 
                    this.isErrorPassword = true;
                }
            }
        }    
    },
    components: {Register}
}
</script>

<style lang="scss" scoped>

</style>