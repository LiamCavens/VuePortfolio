<template>
  <div id="header">
    <img
      class="header-img"
      src="../assets/images/LiamCartoon.jpg"
      alt="LCImage"
    />
    <div class="header-titles" :style="styleTheme">
      <h2 :style="{'text-decoration-color': themeColor}">Liam Cavens</h2>
      <p>Software developer</p>
    </div>
    <div class="header-links">
      <a
        class="link"
        :style="{ color: themeColor }"
        :href="`${publicPath}LiamCavensCV.pdf`"
        download
        >Download CV</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {
    themeColor: String,
  },
  data() {
    return {
        publicPath: process.env.BASE_URL,
        styleTheme: {
            '--selectColor': this.themeColor
        }
    };
  },
  watch: {
      themeColor: function(){
          this.styleTheme['--selectColor'] = this.themeColor;
      }
  },
};
</script>

<style scoped>
::selection {
    background-color: var(--selectColor);
}

#header {
  z-index: 10;
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

.header-links {
  margin-left: auto;
}

.header-titles h2 {
    text-decoration: underline;
}

.header-titles h2,
.header-titles p {
  margin: 0;
}

.link {
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease-in-out 0s;
  font-weight: 600;

}

.link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #505050;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out 0s;
}

.link:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

.link:hover {
    transition: all 0.3s ease-in-out 0s;
    filter: invert(1);
}
</style>
