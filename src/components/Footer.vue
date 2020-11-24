<template>
  <div id="footer">
    <div class="contact-icons">
      <a href="https://github.com/LiamCavens" target="_blank">
        <font-awesome-icon
          :style="{ color: themeColor }"
          :icon="['fab', 'github']"
        />
      </a>
      <a href="https://www.linkedin.com/in/liamcavens/" target="_blank">
        <font-awesome-icon
          :style="{ color: themeColor }"
          :icon="['fab', 'linkedin']"
        />
      </a>
      <a href="mailto:liamcavens@googlemail.com">
        <font-awesome-icon
          :style="{ color: themeColor }"
          :icon="['fas', 'envelope']"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: {
    themeColor: Object,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#footer {
  margin-top: auto;
  z-index: 10;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  color: #c7c7c7;
  background-color: #505050;
}

.contact-icons a {
  font-size: 28px;
  margin: 5px 30px;
  transition: 0.5s all ease-out;
}

.contact-icons a:hover {
  transition: 0.5s all ease-in;
  filter: invert(1);
}
</style>
