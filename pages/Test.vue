<template>
  <div id="canvas" width="450" height="450"></div>
</template>

<script>
import p5 from "p5"
export default {
  created() {
    const test = (sketch) => {
      let phase = 0
      let zoff = 0
      let state = false

      sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
      }

      sketch.draw = () => {
        sketch.background(255)
        sketch.translate(sketch.width / 2, sketch.height / 2)
        sketch.stroke("#8CE5EA")
        sketch.fill("#8CE5EA")
        sketch.beginShape()
        let noiseMax = 1.8
        let sizeMax = 250
        for (let a = 0; a < sketch.TWO_PI; a += sketch.radians(5)) {
          let xoff = sketch.map(sketch.cos(a + phase), -1, 1, 0, noiseMax)
          let yoff = sketch.map(sketch.sin(a + phase), -1, 1, 0, noiseMax)
          let r = sketch.map(sketch.noise(xoff, yoff, zoff), 0, 1, 200, sizeMax)
          let x = r * sketch.cos(a)
          let y = r * sketch.sin(a)
          if (state) {
            sketch.ellipse(x, y, 4, 4)
          } else {
            sketch.vertex(x, y)
          }
        }
        sketch.endShape(sketch.CLOSE)
        phase += 0.003
        zoff += 0.01
      }
    }
    new p5(test, "canvas")
  },
}
</script>

<style scoped>
#canvas {
  margin-top: -100px;
}
</style>
