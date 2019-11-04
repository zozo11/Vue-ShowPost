<template>
    <div class="container">
        <div class="row mt-5 p-3">
            <h4>Post Article</h4>
            <div class="p-2 col-12 border-bottom postArt" v-for="(post, index) in allPosts" :key="post.id">
                 <span class="p-title" @click="showVuePopup(index)" >
                    {{post.title}} 
                    <i class="fa fa-toggle-down fa-lg mt-4"></i>
                </span>
                <div class="border rounded-lg p-2 mt-4" v-if="post.hide ? true:false">
                    <p>{{post.body}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "PostArt",
    props: ["allPosts"],
    methods: {
        showVuePopup(index) {
            let obj = this.allPosts[index];
            obj.hide = !obj.hide;
            this.$set(this.allPosts, index, obj); 
        }
    }

}
</script>

<style scoped>
.p-title{
 cursor: pointer;
}
</style>