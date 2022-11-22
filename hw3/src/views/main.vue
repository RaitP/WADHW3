<template>

<div class="main" v-for = "post in productList" :key="post.id">

</div>
<main-posts></main-posts>
  <button v-on:click="LikesReset">Reset</button>
</template>


<script>

import MainPosts from "@/components/MainPosts";



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Main',
  components: {MainPosts},

  methods: {
    LikesReset: function() {
      this.$store.commit("LikesReset")
    }
  },
  computed: {
  }
}

</script>

<style scoped>
* {
  font-family: sans-serif;
}

body {
  line-height: 1.6;
  margin: 0;
  background-color: #869FB2;
  position: absolute;
}
p {
  color: #393738;
}

a {
  color: #34495e;
  text-decoration: none;
  transition: transform .2s
}
a:hover{
  /* background-color: rgb(201, 201, 201); */
  background-color: #738998;
  transform: scale(1.1) perspective(1px)

}

button {
  background:  #5A6267;
  border: 0;
  padding: 10px 20px 10px 20px;
  margin-top:  20px;
  margin-bottom:  130px;
  margin-right:  10px;
  color: white;
  border-radius: 10px;
  scale: 1.5;
}

button:hover{
  transform: scale(1.1) perspective(1px)
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

section {
  padding: 10px 15px;
  margin: 10px;
  display: block;
  text-align: center;
}

.main {
  background-color: #F4F5F5;
  width: 300px;
  border-radius: 25px;
  border: 2px solid #F4F5F5;
  padding: 10px;
  margin: auto;
  margin-top: 15px;
  box-shadow: 3px 10px 20px #393738;
  transition: transform .2s
}

.main:hover{
  transform: scale(1.05)
}

.nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #34495e;
  font-size: .99em;
  color:black;
}
</style>