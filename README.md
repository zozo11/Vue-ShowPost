
> # This is a VueJs + CoreUI projct
> This project using Vue js and coreUi to create a one-page website, in this project I use the CoreUI-Vue template to start project which means it contains some CoreUI's document file. I will explain which file I create it later. The goal of this project is to show a list of users and each user has 10 recent articles, and click each article title will show the article body.
> ## Part One Running file
> * Please run `npm install` install node module file.
> * Run `yarn serve` start front server
> ## Part Two Document interpretation
> #### General file
> * All the file I have created it is in the src file. There are three different parts, the first one is App.vue file, this is the root file of all components, in this file include two father components, first is the footer second is CustomerList, and CustomerList will get all the user info json file. The second file is main.js in this file I remove CoreUI router file because my project is a one-page application. And I include store the folder in this file, I will explain what is store folder later.
> #### Components
> * In this project, there are two components I have been used one is CustomerList another is PostArt. The CustomerList.vue file is father of PostArt, in this file I call user name from fetchUsers funciton and this function is an async function I write the logic in store /modules/users.js, and I call user post file in there as well, the user post article sort by user's id and the result is in allPosts array,  and pass it to the child component PostArt.
> #### Store
> * basically store is a status manage tool that includes one index root file and one user.js file in the module folder. Store manager tool uses Vuex node module, and index.js file includes this module to the application. User.js include state, getters, actions, mutations,  and I use axios node module to connect Http request. All the request I put in actions function, the function of the mutation will send response data to the state, and each components call data from getters.
> ## Limitation
> * There are two-part in limitation, first one is the problem I have facing to, another is what I can improve.
> #### Issues and solve
> * "v-for" problem, In PostArt component I try to create a toggle function to show the body of the post.  Once user click post title in a "v-for" loop I want people can see each title corresponds to the body, and i create a toggle function to show it. However, "v-for" will show all the array item it can't handle the click event synchronously, and must wait for all the items in the loop to be loaded before executing. This make me can not use the "v-show" method to reach the target directly. So I called the index parameter in "v-for" and passed it to the click method to make it find the target dom. Then I call the set method to pass the data to the array.
> #### Improve
> * Because I am first-time use CoreUI，I am not familiar with its syntax and some support for Vue. I think I need more practice on coreUI to improve some CSS styles on the front end, making the project more perfect.
> ### Thanks for your watch, hope you enjoy my project. If you have any comments and suggestions please let me know, welcome to contact me.