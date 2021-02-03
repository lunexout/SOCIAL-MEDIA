<template>
    <div class="mt-3 p-3 text-left" style="background-color:#F7F9FA; border: 1px solid #EBEEF0;">
        <h4 class="" style="font-weight: 700">ჩემს შესახებ</h4>

        <h5 class="mt-4 infoFONT">მობ: <br>{{info.phonenumber }}</h5>
        <h5 class="mt-4 infoFONT">იმეილი: {{info.email }}</h5>

        <h5 class="mt-4 infoFONT">ტიპი: 
            <button type="button" class="btn btn-danger">
             {{info.type}} 
            </button>
        </h5>
        <h5 class="mt-4 infoFONT">რას გთავაზობთ: 
            <div v-for='item in info.category'
                :key='item'>{{item}}
            </div>
        </h5>
    </div>
</template>

<script>
export default {
    name: 'UserInformationApp',
    props: {
        info: {
            type: Object
        }
    }
}
</script>
<style lang="scss" scoped>
@font-face {
    font-family: infoFONT;
    src: url('../fonts/bpg_arial_2009.ttf');
}
.infoFONT {
    font-family: infoFONT;
}
</style>