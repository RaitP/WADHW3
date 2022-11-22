<template>
  <main-header></main-header>
  <router-view/>
  <main-footer></main-footer>
</template>

<script>
  import MainHeader from './components/MainHeader.vue';
  import MainFooter from './components/MainFooter.vue';
  export default {
    name: 'App',
    components: {MainHeader, MainFooter},
    methods: {

    },
    computed: {

    }
  }
</script>

<style>
body{ min-height:100vh; margin:0; position:relative; }
header{ min-height:50px; background:lightcyan; }
footer{ background:PapayaWhip; }

/* Trick: */
body {
  position: relative;
}

footer {
  position: absolute;
}

#app {
  text-align: center;
  min-height: 100%;
}
</style>
