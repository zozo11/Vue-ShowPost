<template>
  <div class="container">
    <div class="row">
        <div class="col-3 bg-dark p-4">
            <h3 class="p-1 mb-5 text-center"><i class="cui-align-center icons font-2xl d-block mt-4"></i>User List</h3>
            <ul class="ml-auto p-1 list-group">
            <li class="list-unstyled ml-0 p-auto list-group-item bg-dark"  v-for="user in allUsers" :key="user.id" >
              <p @click="filterPosts(user.id)"><a href="#" class="text-reset"> {{user.name}} </a></p>
            </li>

            </ul>
        </div>
        <div class="col-9 bg-white">
            <PostArt v-bind:allPosts="allPosts"/>
        </div>
    </div>
  </div>
</template>

<script>
import PostArt from './PostArt';
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "CustomerList",
  components: {PostArt},
  methods: {
    ...mapActions(["fetchUsers", "filterPosts"]),
  },
  computed: mapGetters(["allUsers", "allPosts"]),
  created() {
    this.fetchUsers();
  }
}
</script>