<template>
  <div id="app">
    <Header :themeColor="themeColor" @modeChange="modeChange" />
    <MainPage
      :themeColor="themeColor"
      @themeChange="changeTheme"
      v-if="mode === 'main'"
    />
    <Footer :themeColor="themeColor" />
  </div>
</template>

<script>
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    MainPage,
    Footer,
  },
  data() {
    return {
      mode: "main",
      themeColor: "dodgerblue",
    };
  },
  methods: {
    changeTheme(color) {
      this.themeColor = `hsla(${color})`;
    },
    modeChange(mode) {
        this.mode = mode;
    }
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;
}
</style>
