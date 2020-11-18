<template>
  <div id="fireworks">
    <h1 class="bungee">Liam Cavens</h1>
    <Firework />
  </div>
</template>

<script>
import Firework from "./Firework";
export default {
  name: "MainPage",
  components: {
    Firework,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
#fireworks {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.bungee {
    font-family: 'Bungee';
}
</style>
