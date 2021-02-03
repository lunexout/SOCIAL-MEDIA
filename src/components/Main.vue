<template>
    <div class="mainapp">
        <div class="container mt-5">
            
            <div class="row">
                <div class="col-xl-6 col-md-6 col-12">
                    <MainLeft/>
                </div>
                <div class="col-xl-6 col-md-6 col-12">
                    <MainRight/>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import MainLeft from './MainLeftContent'
import MainRight from './MainRightContent'
import router from '../router'
export default {
    name: 'MainApp',
    components: { MainLeft, MainRight },
    created(){
            let data = sessionStorage.getItem('firebase:authUser:AIzaSyD6AJi5ngnD15fRl2Iw9WD1CUTpGXyxNFM:[DEFAULT]');
        try{
            if(JSON.parse(data)) router.push('/user') 
        }catch(error){
            console.log(error)
        }
    }
}
</script>

<style lang="scss" scoped>
$b_c: #DBDBDB;
.bordered {
    border: 1px solid $b_c;
}

</style>