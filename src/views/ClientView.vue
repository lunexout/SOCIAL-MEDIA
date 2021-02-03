<template>
<div>
    <Register />
    <div class="container bordered" style="max-width: 500px;">
        <div class="container text-center" style="max-width: 300px;">
            კლიენტის რეგისტრაცია მიუწვდომელია ამ მომენტისთვის
        </div>
    </div>    
</div>
</template>
<script>
import Register from '../components/Register.vue'

export default {
    name: 'ClientViewApp',
    components: {Register}
}
</script>

<style lang="scss" scoped>

</style>