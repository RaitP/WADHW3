<template>
  <header class="header">
    <ul class="nav">
      <li><router-link to="/">Main</router-link> </li>
      <li><router-link to="/signup">Sign up</router-link> </li>
    </ul>
  </header>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "MainHeader",
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

.header {
  padding-top: .5em;
  padding-bottom: .5em;
  border: 1px solid #5A6267;
  background-color: #5A6267;
  color:black;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 999;
}

.nav {
  margin-top: 5px;
  display: flex;
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