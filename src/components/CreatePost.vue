<template>
                        <form class="text-left" style="border: 1px solid #EBEEF0;">
                            <div class="form-group m-3">
                                <div class="row p-0">
                                    <div class="col-xl-1 col-md-1 col-12 mb-2">
                                        <div class="image">
                                            <img :src="obj.image" 
                                            class="round_picture" 
                                            style="display: inline-block;"
                                            width="35" height="35">
                                        </div>
                                    </div>
                                    <div class="col-xl-11 col-md-11 col-12">
                                        <input 
                                        style="background-color: #F7F9FA; border-radius: 2px; max-width: 100%;" 
                                        type="text" class="form-control formFONT" 
                                        id="title" 
                                        aria-describedby="emailHelp" 
                                        v-model.trim="post.title"
                                        placeholder="აქციის სახელი:"
                                        >
                                        <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                                        <small 
                                        id="emailHelp" 
                                        class="form-text text-muted formFONT ml-2"
                                        style="font-size: 10px;">
                                            #sale #trand #modern
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group m-3">
                                
                            </div>

                            <div class="form-group m-3">
                                <!-- <label for="exampleInputEmail1">მაილი:</label> -->
                                <textarea class="form-control" id="post" 
                                name="post" rows="3" cols="150" 
                                placeholder="რა სიახლეს გვთავაზობთ? მაგ: საახალწლო აქცია 50%"
                                 style="background-color: #FAFAFA; border-radius: 2px; max-width: 100%;" 
                                v-model.trim="post.description"
                                >
                                </textarea>
                                <small 
                                id="post" 
                                class="form-text text-muted formFONT ml-2"
                                style="font-size: 10px;">
                                <input type="file" @change='uploadPostImage' class="form-control-file" id="PostChoose">
                                    #hot #news
                                </small>
                            </div>

                            <div class="row">
                                <div class="col-xl-12">
                                    <button 
                                    style="background-color: #1DA1F2"
                                    class="btn btn-primary m-3"
                                     @click='addPost'>პოსტის დამატება</button>
                                </div>
                            </div>
                        </form>
</template>

<script>
import firebase from 'firebase/app'
import Swal from 'sweetalert2'
export default {
    name: 'PostApp',
    props: {
        url: {
            type: String
        },
        uid: {
            type: String
        },
        obj: {
            type: Object
        }
    },
    data() {
        return {
                post: {
                    title: '',
                    description: '',
                    image: ''
                }
        }
    },
    methods: {
        async addPost(){
            let today = new Date()
            // const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes();
            await firebase.firestore().collection('Posts').doc(this.uid).set({
                title: this.post.title,
                description: this.post.description,
                likes: 0,
                comments: 0,
                createdTime: today,
                created: time,
                uid: this.uid,
                obj: this.obj
            }).then(()=> {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'პოსტი წარმატებით დაემატა!',
                    showConfirmButton: true
                })
            }).catch((error) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: 'ვერ მოხერხდა პოსტის დამატება' + `${error}`,
                    showConfirmButton: true
                });
            })
        },
        uploadPostImage(e){
            var file = e.target.files[0]
            console.log(file.name)
            this.post.image = file
            document.getElementById('TestPostPic').src = URL.createObjectURL(file)
        }
    }
}
</script>
<style lang="scss" scoped>

</style>