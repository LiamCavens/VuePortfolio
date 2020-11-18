<template>
  <div id="header">
    <img
      class="header-img"
      src="../assets/images/LiamCartoon.jpg"
      alt="LCImage"
    />
    <div class="header-titles">
      <h2>Liam Cavens</h2>
      <p>Software developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<style scoped>
#header {
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: #c7c7c7;
  background-color: #505050;
}

.header-img {
  height: 80px;
  border-radius: 50%;
  margin: 10px;
}

.header-titles {
  display: flex;
  flex-direction: column;
}

.header-titles h2,
.header-titles p {
  margin: 0;
}
</style>
