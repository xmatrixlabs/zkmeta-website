<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'app',
  components: {
    Header,Footer
  }
}
</script>

<style lang='scss' >
body{
  padding: 0;
  margin: 0;
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-family: 'SF Pro Display';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
