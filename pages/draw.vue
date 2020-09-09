<template>
  <div>
    <h1 class="pa-5 text-center">Drawing Tool</h1>
    <canvas
      id="myCanvas"
      width="600"
      height="400"
      @mousemove="draw"
      @mousedown="beginDrawing"
      @mouseup="stopDrawing"
    >
    </canvas>
    <v-btn @click="drawRect">Clear</v-btn>
  </div>
</template>

<script>
//import Blob from "../assets/content/Blob_Point"
export default {
  data() {
    return {
      canvas: null,
      x: 0,
      y: 0,
      isDrawing: false,
      rectWidth: 200,
    }
  },
  mounted() {
    let c = document.getElementById("myCanvas")
    this.vueCanvas = c.getContext("2d")
  },
  methods: {
    showCoordinates(e) {
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
    },
    resize() {
      document.getElementById("myCanvas").width = window.innerWidth
      document.getElementById("myCanvas").height = window.innerHeight
    },
    drawRect() {
      this.vueCanvas.clearRect(0, 0, 600, 800)

      //this.vueCanvas.beginPath()
      //this.vueCanvas.rect(20, 20, this.rectWidth, 100)
      //this.vueCanvas.stroke()
    },
  },
  //created() {
  //new Blob("#C09EFF")
  //},
}
</script>

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
</style>
