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
        <canvas id="canvas" width="450" height="450"></canvas>
        <h1 class="instructions">{{ breathText[0] }}</h1>
        <v-container fluid class="container">
          <v-row align="center" justify="center">
            <v-spacer></v-spacer>
            <v-btn fab medium color="secondary">
              <v-icon color="black">
                mdi-volume-high
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab x-large color="primary" @click="start">
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
import Blob from "../assets/content/Blob_Point"
import { Point } from "../assets/content/Blob_Point"
let oldMousePoint = { x: 0, y: 0 }
let blob = new Blob()
let hover = false
export default {
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      rectWidth: 200,
      dir: 0.25,
      radius: 200,
      ticker: undefined,
      timer: undefined,
      timerState: "stopped",
      displaySec: 10,
      breathText: ["Inhale", "Hold", "Exhale", "Hold"],
    }
  },
  mounted() {
    let canvas = document.getElementById("canvas")
    this.canvas = canvas.getContext("2d")
    canvas.setAttribute("touch-action", "none")
    blob = new Blob(this.color, this.canvas)
    blob.color = "#8CE5EA"
    blob.canvas = canvas
    blob.init()
    blob.render()
    blob.f_varySize()
  },
  created() {
    window.addEventListener("pointermove", this.mouseMove)
    window.addEventListener("mousemove", this.mouseMove)
  },
  methods: {
    start() {
      if (this.timerState !== "running") {
        this.tick()
        this.timerState = "running"
      } else {
        window.clearInterval(this.timer)
        this.timerState = "stopped"
      }
    },
    // ------ Text Change methods + Timer ---------//
    tick() {
      this.timer = window.setInterval(() => {
        this.textChange()
      }, 500)
    },
    textChange() {
      const first = this.breathText.shift()
      this.breathText = this.breathText.concat(first)
    },
    // ------------------------------------------//
    // ------ Window Resize (Not functioning)---//
    resize() {
      document.getElementById("canvas").width = window.innerWidth
      document.getElementById("canvas").height = window.innerHeight
    },
    //-------//
    // -------- spring/wave animation on mouseOver of blob ----//
    mouseMove(e) {
      let pos = blob.center
      let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y }
      let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
      let angle = null
      blob.mousePos = {
        x: pos.x - e.clientX,
        y: pos.y - e.clientY,
      }
      if (dist < blob.radius && hover === false) {
        let vector = {
          x: e.clientX - pos.x,
          y: e.clientY - pos.y,
        }
        angle = Math.atan2(vector.y, vector.x)
        hover = true
        // blob.color = '#77FF00';
      } else if (dist > blob.radius && hover === true) {
        let vector = {
          x: e.clientX - pos.x,
          y: e.clientY - pos.y,
        }

        angle = Math.atan2(vector.y, vector.x)
        hover = false
        blob.color = null
      }
      if (typeof angle == "number") {
        let nearestPoint = null
        let distanceFromPoint = 100
        blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            // console.log(point.azimuth, angle, distanceFromPoint);
            nearestPoint = point
            distanceFromPoint = Math.abs(angle - point.azimuth)
          }
        })
        if (nearestPoint) {
          let strength = {
            x: oldMousePoint.x - e.clientX,
            y: oldMousePoint.y - e.clientY,
          }
          strength =
            Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 1
          if (strength > 100) strength = 100
          nearestPoint.acceleration = (strength / 100) * (hover ? -1 : 1)
        }
      }
      oldMousePoint.x = e.clientX
      oldMousePoint.y = e.clientY
    },
    // ----- //
    // ------ Blob initialisation ------//
    init() {
      for (let i = 0; i < this.numPoints; i++) {
        let point = new Point(this.divisional * (i + 1), this)
        point.acceleration = -1 + Math.random() * 2
        this.push(point)
      }
    },
    //---------//
    // ------ changing blob radius (Not working) ----//
    f_varySize() {
      console.log("testing")
      this.ticker = setInterval(() => {
        /*if (this.radius > 200) {
          this.dir = -0.25
          //console.log(g_radius);
        }
        if (this.radius < 200) {
          this.dir = 0.25
          //console.log(g_radius);
        } */
        this.radius += this.dir
      }, 20)
    },
  },
}
</script>

<style scoped>
#canvas {
  border: 1px solid grey;
  z-index: -1;
}
.instructions {
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
}
</style>
