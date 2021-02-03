<template>
<div>
    <Register />
    <div class="container bordered" style="max-width: 500px;">
        <div class="container text-center" style="max-width: 300px;">
            <form class="loginFORM text-left mt-5">
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="email" class="form-control formFONT" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="მაილი"
                        v-model.trim='form.email'
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        შეიყვანეთ მოქმედი მაილი
                    </small>
                    
                </div>

                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="password" class="form-control formFONT" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="პაროლი"
                        v-model.trim='form.password'
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;"
                    >
                    
                        პაროლი 6 სიმბოლოზე მეტი
                    </small>
                    
                </div>

                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="text" class="form-control formFONT" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="კომპანიის სახელი"
                        v-model.trim='form.name'
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        კომპანიის სახელი
                    </small>
                    
                </div>
                <div class="form-group">
                    <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                    <input 
                        style="background-color: #FAFAFA; border-radius: 2px;" 
                        type="number" class="form-control formFONT" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="საკონტაქტო"
                        v-model.trim='form.phonenumber'
                    >
                    <small 
                    id="emailHelp" 
                    class="form-text text-muted formFONT ml-2"
                    style="font-size: 10px;">
                        ტელეფონი
                    </small>
                    
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

                <button 
                    type="button" 
                    class="btn btn-primary btn-lg btn-block formFONT mt-2 mb-2"
                    @click='register'>
                    რეგისტრაცია
                </button>
           </form>
        </div>
    </div>    
</div>
</template>
<script>
import Register from '../components/Register.vue'
import {mapActions} from 'vuex'

export default {
    name: 'CompanyViewApp',
    components: {Register},
    data(){
        return {
            form: {
                name: '',
                email: '',
                password: '',
                phonenumber: '',
                adress: '',
                country_value: '',
                category: ['Stylist'],
                type: 'Salon'
            },
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
    methods: {
        ...mapActions(['createSalon']),
        register(){
             this.createSalon(this.form)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>