<template>
  <footer>
    <p>Veebirakendused - Liis Reimand, Cardo Kenten Ross, Rait Pommer</p>
    <div>
      <ul>
        <li class="lingid"><a href="https://deltaqr.ut.ee/" target=”_blank”>DeltaQR</a></li>
        <li class="lingid"><a href="https://courses.cs.ut.ee/2022/WAD/fall" target=”_blank”>Courses</a></li>
        <li class="lingid"><a href="https://github.com/RaitP/WADHW1" target=”_blank”>Github</a></li>
      </ul>
    </div>

  </footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MainFooter",
  props: [],
  data: function () {
    return {}
  },

  computed: {}
}
</script>

<style scoped>
* {
  font-family: sans-serif;
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

nav {
  margin-top: 5px;
  display: flex;
}

nav a {
  padding: 10px 15px;
  text-transform: uppercase;
  text-align: center;
  display: block;
  color: #34495e;
  font-size: .99em;
  color:black;
}

footer {
  text-align: center;
  background-color: #5A6267;
  padding-top: 1%;
  padding-bottom: 1%;
  width: 100%;
  bottom: 0;

}

.lingid{
  display: inline;
  color: black;
  text-decoration: none;
  padding: 10px 15px;
  text-align: center;
  color: #34495e;
  font-size: .99em;
}

.lingid:hover{
  /* background-color: rgb(201, 201, 201); */
  background-color: #738998;
  transform: scale(1.1) perspective(1px)

}
</style>