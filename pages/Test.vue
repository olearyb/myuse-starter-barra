<template>
  <div id="canvas"></div>
</template>

<script>
import p5 from "p5"
export default {
  created() {
    const test = (sketch) => {
      let phase = 0
      let zoff = 0
      //let slider
      //let sliderSize
      let state = false

      sketch.setup = () => {
        sketch.createCanvas(sketch.windowWidth, sketch.windowHeight)
        //slider = sketch.createSlider(0, 3, 2.2, 0.1)
        //slider.position(15, 75)
        //sliderSize = sketch.createSlider(100, 300, 250)
        //sliderSize.position(15, 150)
        //sketch.colorPicker = sketch.createColorPicker("#8CE5EA")
        //sketch.colorPicker.position(15, 225)
        //sketch.button = sketch.createButton("toggle view")
        //sketch.button.position(19, 300)
        //sketch.button.mousePressed(sketch.changeStroke)
      }

      sketch.draw = () => {
        sketch.background(255)
        sketch.translate(sketch.width / 2, sketch.height / 2)
        sketch.stroke("#8CE5EA")
        sketch.fill("#8CE5EA")
        sketch.beginShape()
        //let noiseMax = slider.value()
        let noiseMax = 1.8
        //let sizeMax = sliderSize.value()
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
