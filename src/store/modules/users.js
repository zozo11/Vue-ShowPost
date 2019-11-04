import axios from 'axios';

const state = {
    users: [],
    post: []
};

const getters = {
    allUsers: state => state.users,
    allPosts: state => state.post
};

const actions = {
    async fetchUsers({commit}){
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setUsers', response.data);
    },
    async filterPosts({commit}, id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}&_limit=10`);
        commit('setPosts', response.data);
    }
};

const mutations = {
    setUsers: (state, userdata) => (state.users = userdata),
    setPosts: (state, postdata) => (state.post = postdata)
};

export default {
    state,
    getters,
    actions,
    mutations
}