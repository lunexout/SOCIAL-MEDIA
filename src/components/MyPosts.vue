<template>
    <div></div>
</template>
<script>
import firebase from 'firebase/app'
export default {
    name: 'MyPostsApp',
    props: {
        uid: {
            type: String
        }
    },
    data(){
        return {
            posts: []
        }
    },
    methods: {
        async getMyPosts(uid){
            await firebase.firestore().collection('Posts').where('uid', '==', uid).get().then((querySnapshot)=> {
                querySnapshot.docs.map(doc => this.posts.push(doc.data()))
            })
            console.log(this.posts);
        }
    },
    mounted(){
        this.getMyPosts(this.uid)
    }
}

</script>
<style lang="scss" scoped>

</style>