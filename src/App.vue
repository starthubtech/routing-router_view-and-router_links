<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/layouts/header';
import Footer from './components/layouts/footer';

export default {
    components: {
      Header,
      Footer,
    },
  name: 'app'

  }
</script>

<style>

</style>
