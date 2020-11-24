<template>
  <div id="fireworks">
    <h1
      class="bungee"
      :style="{
        'text-shadow': `-1px -1px 0 ${color}, 1px -1px 0 ${color}, -1px 1px 0 ${color}, 1px 1px 0 ${color}`,
      }"
    >
      Liam Cavens
    </h1>
    <Firework @firework="changeColor" />
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
    return {
      color: "dodgerblue",
    };
  },
  methods: {
    changeColor(color) {
      this.$emit("themeChange", color);
      this.color = `hsla(${color})`;
    },
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
  user-select: none;
  font-size: 100px;
  font-family: "Bungee";
  color: #fff;
}
@media screen and (max-width: 450px) {
    .bungee {
        font-size: 60px;
    }
}
</style>
