<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12" align="center" justify="center">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Mindful Breathing
        </h1>
        <div id="canvas"></div>
        <v-container fluid class="container">
          <v-row align="center" justify="center">
            <v-spacer></v-spacer>
            <v-btn fab medium color="secondary">
              <v-icon color="black">
                mdi-volume-high
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab x-large color="primary">
              <v-icon large color="white">
                mdi-play
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab medium color="secondary">
              <v-icon color="black">
                mdi-tune-vertical
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import p5 from "p5"
export default {
  //layout: "breath",
  created() {
    const test = (sketch) => {
      let g_canvas = document.getElementById("canvas")
      //let g_context = g_canvas.getContext("2d")
      let dir = 0.25
      let g_radius = 175
      sketch.f_drawCircle = () => {
        sketch.fillStyle = "#8CE5EA"
        sketch.beginPath()
        sketch.arc(400, 300, g_radius, 0, 2 * Math.PI)
        sketch.fill()
      }

      sketch.f_clearCanvas = () => {
        sketch.clearRect(100, 100, g_canvas.width, g_canvas.height)
        sketch.strokeRect(100, 100, g_canvas.width, g_canvas.height)
      }

      sketch.f_varySize = () => {
        if (g_radius > 200) {
          dir = -0.25
          //console.log(g_radius);
        }
        if (g_radius < 175) {
          dir = 0.25
          //console.log(g_radius);
        }
        g_radius += dir
      }

      sketch.f_loop = () => {
        sketch.f_varySize()
        sketch.f_clearCanvas()
        sketch.f_drawCircle()
      }

      setInterval(sketch.f_loop, 20)
    }
    new p5(test, "canvas")
  },
}
</script>

<style scoped>
.title {
  padding-top: 0%;
}
.inhale {
  max-width: 90%;
}
.semi_circle {
  margin-top: -16px;
}
.container {
  position: fixed;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
}
</style>
