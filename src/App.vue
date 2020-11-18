<template>
  <div id="app">
    <Header />
    <MainPage />
  </div>
</template>

<script>
import Header from "./components/Header"
import MainPage from "./components/MainPage"

export default {
  name: 'App',
  components: {
      Header,
      MainPage
  }
}
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
