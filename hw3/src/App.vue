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
body {
  margin: 0;
  position: relative;
}
#app {
  text-align: center;
  min-height: 100%;
}
</style>
