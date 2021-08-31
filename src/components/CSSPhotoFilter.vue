<template>
  <div>
      <h2 class="bungee" 
      :style="{
        'text-shadow': `-2px -2px 0 ${color}, 2px -2px 0 ${color}, -2px 2px 0 ${color}, 2px 2px 0 ${color}`
      }">CSS Photo Filters</h2>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
      themeColor: String
  },
  data() {
      return {
          color: this.themeColor
      }
  },
}
</script>

<style scoped>
.bungee {
  user-select: none;
  font-size: 30px;
  font-family: "Bungee";
  color: #fff;
  margin: 0;
}
</style>
