<template>
  <div id="app">
    <Header id="header"></Header>
    <router-view class="main"/>
    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  components: {Footer, Header}
}
</script>

<style lang="scss">
@import url('./assets/root.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  #header{
    position: relative;
  }
  .main{
    position: relative;
    padding: 0 12%;
    margin-bottom: 60px;

  }
  #footer{
    position: fixed;
    bottom: 0;
    width: 100%;
  }

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>