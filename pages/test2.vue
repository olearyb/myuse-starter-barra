<template>
  <div>
    <h1 class="pa-5 text-center">Blob</h1>
    <canvas id="myCanvas" width="600" height="400"></canvas>
    <!--<v-btn @click="drawRect">Clear</v-btn> -->
  </div>
</template>

<script>
import Blob from "../assets/content/Blob_Point"
//import { Point } from "../assets/content/Blob_Point"
//import Point from "../assets/content/Blob_Point"
let oldMousePoint = { x: 0, y: 0 }
let blob = new Blob()
//let point = new Point()
let hover = false
let canvas
export default {
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      rectWidth: 200,
      //hover: false,
      //oldMousePoint: { x: 0, y: 0 },
    }
  },
  mounted() {
    let canvas = document.getElementById("myCanvas")
    this.canvas = canvas.getContext("2d")
  },
  created() {
    new Blob("#C09EFF")
    blob.canvas = canvas
    blob.init()
    blob.render()
  },
  methods: {
    /* showCoordinates(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    drawLine(x1, y1, x2, y2) {
      let ctx = this.vueCanvas
      ctx.beginPath()
      ctx.strokeStyle = "black"
      ctx.lineWidth = 1
      ctx.moveTo(x1, y1)
      ctx.lineTo(x2, y2)
      ctx.stroke()
      ctx.closePath()
    },
    draw(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = e.offsetX
        this.y = e.offsetY
      }
    },
    beginDrawing(e) {
      this.x = e.offsetX
      this.y = e.offsetY
      this.isDrawing = true
    },
    stopDrawing(e) {
      if (this.isDrawing) {
        this.drawLine(this.x, this.y, e.offsetX, e.offsetY)
        this.x = 0
        this.y = 0
        this.isDrawing = false
        //windowWidth = 0,
      }
    }, */
    resize() {
      document.getElementById("myCanvas").width = window.innerWidth
      document.getElementById("myCanvas").height = window.innerHeight
    },
    /*drawRect() {
      this.vueCanvas.clearRect(0, 0, 600, 800)

      //this.vueCanvas.beginPath()
      //this.vueCanvas.rect(20, 20, this.rectWidth, 100)
      //this.vueCanvas.stroke()
    },*/
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
  },
}
</script>

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
</style>
