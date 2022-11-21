<template>
  <div class="posts" v-for = "post in productList" :key="post.id">
    <div class="postheader">
      <a class="posterPic" href=""><img class="profilepic" :src = "post.profilepic" width="25" height="25" alt="poster"></a>
      <p class = "kuup">{{post.time}}</p>
    </div>
    <div class="post">
      <img class="pic" :src = "post.pic" width="300">
      <p class = tekst>{{post.description}}</p>
    </div>
    <div class="like">
      <button v-on:click="Likes(post.id)">
        <img src="https://www.pngplay.com/wp-content/uploads/1/Instagram-Heart-Background-PNG-Image.png" alt="Image" width="35" height="35">
      </button>
      <p class="likes"> {{post.likes}} </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainPosts",
  props: [],
  data: function () {
    return {}
  },

  methods: {
    Likes: function(id) {
      this.$store.commit("Likes", id)
    }
  },

  computed: {
    productList(){
      return this.$store.getters.productListsale
    },
  }
}
</script>
<style scoped>
* {
  font-family: sans-serif;
}

button {
  background-color: transparent;
  border: 0;
}

body {
  line-height: 1.6;
  margin: 0;
  background-color: #869FB2;
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

.profilepic {
  margin: 0px 10px;
  font-size: 1.1em;

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

.post {
  margin: auto;
}

.posts {
  background-color: #F4F5F5;
  width: 300px;
  border-radius: 25px;
  border: 2px solid #F4F5F5;
  padding: 10px;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;
  box-shadow: 3px 10px 20px #393738;
  transition: transform .2s
}

.posts:hover{
  transform: scale(1.05)
}


.posterPic {
  position: absolute;
  margin-top: auto;
  margin-left: -125px;
}


.kuup {
  margin-left: 125px;
}

.tekst {
  text-align: left;
  margin-top: 0px;
}

.like{
  display: inline-flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-left: -260px;
  margin-top: -10px;
  transition: transform .2s
}

.like:hover{
  transform: scale(1.2)
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