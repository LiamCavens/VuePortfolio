<template>
  <div
    class="canvasBox"
    :style="`
      height: ${canvasBoxHeight};
      width: ${canvasBoxWidth};`"
  >
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    boxHeight: String,
    boxWidth: String,
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      seedAmount: 0,
      seeds: [],
      particles: [],
      auto: false,
    };
  },
  computed: {
    canvas() {
      return document.getElementById("canvas");
    },
    ctx() {
      if (this.canvas !== undefined) {
        return this.canvas.getContext("2d");
      }
      return null;
    },
    canvasBoxHeight() {
      return this.boxHeight || "100%";
    },
    canvasBoxWidth() {
      return this.boxWidth || "100%";
    },
  },
  methods: {
    clearCanvas() {
      if (this.ctx !== undefined) {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        this.ctx.fillRect(0, 0, this.width, this.height);
      }
    },
    circle(x, y, radius) {
      if (this.ctx !== undefined) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.closePath();
      }
    },
    loop() {
      if (this.ctx !== undefined) {
        this.clearCanvas();
        this.ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < this.seeds.length; i += 1) {
          if (!this.seeds[i].dead) {
            this.seeds[i].move();
            this.seeds[i].draw();
          } else {
            this.seeds.splice(i, 1);
          }
        }
        for (let i = 0; i < this.particles.length; i += 1) {
          if (!this.particles[i].dead) {
            this.particles[i].move();
            this.particles[i].draw();
          } else {
            this.particles.splice(i, 1);
          }
        }
        if (this.auto && this.seedAmount % 100 === 0) {
          const seed = this.Seed(
            this.randomInt(20, this.width - 20),
            700,
            this.randomInt(175, 185),
            [this.randomInt(0, 359), "100%", "50%"]
          );
          this.seeds.push(seed);
        }
        this.ctx.globalCompositeOperation = "destination-out";
        requestAnimationFrame(this.loop);
        this.seedAmount += 1;
      }
    },
    Seed(x, y, angle, color) {
      const acceleration = 0.05;
      const radius = 3;
      const h = color[0];
      const s = color[1];
      const l = color[2];
      const finalColor = `hsla(${h}, ${s}, ${l}, 1)`;
      const dead = false;
      const fireSeed = {};
      let speed = 2;
      fireSeed.x = x;
      fireSeed.y = y;
      fireSeed.move = () => {
        if (fireSeed.y > this.randomInt(100, 400)) {
          speed += acceleration;
          fireSeed.x += speed * Math.sin((Math.PI / 180) * angle);
          fireSeed.y += speed * Math.cos((Math.PI / 180) * angle);
        } else if (!dead) {
          fireSeed.explode();
          fireSeed.dead = true;
        }
      };
      fireSeed.draw = () => {
        this.ctx.fillStyle = finalColor;
        this.circle(fireSeed.x, fireSeed.y, radius);
        this.ctx.fill();
      };
      fireSeed.explode = () => {
        for (let i = 0; i < 359; i += 4) {
          const particle = this.Firework(
            fireSeed.x,
            fireSeed.y,
            i + this.randomInt(-200, 200) / 100,
            [h, s, l]
          );
          this.particles.push(particle);
        }
        this.$emit("firework", [h, s, l]);
      };
      fireSeed.dead = dead;
      return fireSeed;
    },
    Firework(x, y, angle, color) {
      const fireSeed = {};
      const angleOffset = this.randomInt(-20, 20) / 100;
      const radius = 1;
      const acceleration = -0.005;
      const gravity = 0.0;
      let opacity = 1;
      let finalColor = `hsla(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
      let verticalSpeed = 0;
      let speed = this.randomInt(195, 205) / 100;
      let targetAngle = angle;
      let positionX = x;
      let positionY = y;
      fireSeed.dead = false;
      fireSeed.move = () => {
        if (opacity > 0) {
          if (speed > 0) {
            speed += acceleration;
          }
          targetAngle += angleOffset;
          opacity -= 0.005;
          finalColor = `hsla(${color[0]}, ${color[1]}, ${color[2]}, ${opacity})`;
          verticalSpeed += gravity;
          positionX += speed * Math.sin((Math.PI / 180) * targetAngle);
          positionY +=
            speed * Math.cos((Math.PI / 180) * targetAngle) + verticalSpeed;
        } else if (!fireSeed.dead) {
          fireSeed.dead = true;
        }
      };
      fireSeed.draw = () => {
        this.ctx.fillStyle = finalColor;
        this.circle(positionX, positionY, radius);
        this.ctx.fill();
      };
      return fireSeed;
    },
    randomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    },
    init() {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
    },
  },
  mounted() {
    this.init();
    this.loop();
    window.addEventListener("click", () => {
      const seed = this.Seed(
        this.randomInt(0, window.innerWidth),
        window.innerHeight - 100,
        this.randomInt(175, 185),
        [this.randomInt(0, 359), "100%", "50%"]
      );
      this.seeds.push(seed);
    });
    window.addEventListener("resize", () => {
      this.width = this.canvas.width = window.innerWidth;
      this.height = window.innerHeight;
      this.clearCanvas();
    });
  },
};
</script>

<style scoped>
.canvasBox {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}
</style>