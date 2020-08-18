<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12" align="center" justify="center">
        <h1 class="card__header mx-10">
          Mindful Breath
        </h1>
        <div ref="canv_wrap" class="canv_wrap">
          <canvas id="canvas" ref="canvas" touch-action="none"></canvas>
          <h1 class="instructions">{{ currentStep.text }}</h1>
        </div>
        <v-container fluid class="container">
          <v-row align="center" justify="center">
            <v-spacer></v-spacer>
            <v-btn
              fab
              medium
              color="primary"
              @click.stop="volPanel = !volPanel"
            >
              <v-icon color="white">
                mdi-volume-high
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab x-large color="primary" @click="toggle">
              <v-icon v-if="animating" large color="white">mdi-stop</v-icon>
              <v-icon v-else large color="white">mdi-play</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn
              fab
              medium
              color="primary"
              @click.stop="ctrlPanel = !ctrlPanel"
            >
              <v-icon color="white">
                mdi-tune-vertical
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
          </v-row>
          <div>
            <v-row align="center" justify="center" class="mt-2">
              <v-col cols="12">
                <nuxt-link to="/More_Info">
                  <v-btn medium class="mx-5 custom"
                    ><v-icon>mdi-information-outline</v-icon></v-btn
                  >
                </nuxt-link>
                <nuxt-link to="/Benefits">
                  <v-btn medium class="mx-5 custom"
                    ><v-icon> mdi-heart-pulse</v-icon></v-btn
                  >
                </nuxt-link>
              </v-col>
            </v-row>
          </div>
        </v-container>
        <v-navigation-drawer
          v-if="$vuetify.breakpoint.smAndUp"
          v-model="ctrlPanel"
          color="#fff"
          absolute
          temporary
          hide-overlay
        >
          <v-toolbar dark color="primary">
            <v-toolbar-title>Control Panel</v-toolbar-title>
          </v-toolbar>
          <v-list dense>
            <v-col cols="12">
              <v-btn :value="blue" @click="changeBlue">Blue</v-btn>
              <v-btn :value="rose" @click="changeRose">Rose</v-btn>
              <v-btn :value="green" @click="changeGreen">Green</v-btn>
              <v-btn :value="orange" @click="changeOrange">Orange</v-btn>
              <v-subheader class="pl-0 pt-5">Inhale count</v-subheader>
              <v-slider v-model="in_slider" min="1" max="8" class="py-5">
                <template v-slot:append>
                  <v-text-field
                    v-model="in_slider"
                    class="mt-0 pt-0 custom"
                    readonly
                    single-line
                    type="number"
                    style="width: 20px;"
                    align="center"
                  ></v-text-field>
                </template>
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">1st Hold</v-subheader>
              <v-slider v-model="hold1_slider" min="1" max="8" class="py-5">
                <template v-slot:append>
                  <v-text-field
                    v-model="hold1_slider"
                    class="mt-0 pt-0 custom"
                    readonly
                    single-line
                    type="number"
                    style="width: 20px;"
                    align="center"
                  ></v-text-field>
                </template>
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">Exhale count</v-subheader>
              <v-slider v-model="ex_slider" min="1" max="8" class="py-5">
                <template v-slot:append>
                  <v-text-field
                    v-model="ex_slider"
                    class="mt-0 pt-0 custom"
                    readonly
                    single-line
                    type="number"
                    style="width: 20px;"
                    align="center"
                  ></v-text-field>
                </template>
              </v-slider>
              <hr />
              <v-subheader class="pt-5">2nd Hold</v-subheader>
              <v-slider v-model="hold2_slider" min="1" max="8" class="py-5">
                <template v-slot:append>
                  <v-text-field
                    v-model="hold2_slider"
                    class="mt-0 pt-0 custom"
                    readonly
                    single-line
                    type="number"
                    style="width: 20px;"
                    align="center"
                  ></v-text-field>
                </template>
              </v-slider>
              <hr />
              <v-subheader class="py-10">Animation Colour</v-subheader>
              <v-swatches
                inline
                :swatches="swatches"
                row-length="2"
                shapes="circles"
              ></v-swatches>
            </v-col>
          </v-list>
        </v-navigation-drawer>
        <v-navigation-drawer
          v-if="$vuetify.breakpoint.smAndUp"
          v-model="volPanel"
          color="#fff"
          absolute
          temporary
          hide-overlay
        >
          <v-toolbar dark color="primary">
            <v-toolbar-title>Audio</v-toolbar-title>
          </v-toolbar>
          <v-col cols="12">
            <v-subheader>
              Audio On / Off
            </v-subheader>
            <v-switch
              v-model="switch1"
              align="center"
              justify="center"
              class="px-10"
            ></v-switch>
            <hr />
            <v-subheader>Audio Volume</v-subheader>
            <v-slider
              v-model="vol_slider"
              color="primary"
              track-color="grey"
              always-dirty
              min="0"
              max="10"
            >
              <template v-slot:prepend>
                <v-icon @click="decrement">
                  mdi-volume-low
                </v-icon>
              </template>
              <template v-slot:append>
                <v-icon @click="increment">
                  mdi-volume-high
                </v-icon>
              </template>
            </v-slider>
            <hr />
            <v-subheader>Instrument</v-subheader>
            <v-radio-group v-model="synth" column class="px-5">
              <v-radio label="Piano" value="radio-1"></v-radio>
              <v-radio label="Violin" value="radio-2"></v-radio>
              <v-radio label="Sky Pads" value="radio-3"></v-radio>
              <v-radio label="Guitar" value="radio-4"></v-radio>
            </v-radio-group>
          </v-col>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Blob from "../assets/content/Blob_Point"
import VSwatches from "vue-swatches"

export default {
  components: { VSwatches },
  data() {
    return {
      blue: "#1D8BEA",
      rose: "#FC54A7",
      green: "#03EE9B",
      orange: "#FEAB20",
      switch1: true,
      colorpick: null,
      swatches: ["#8CE5EA", "#4FD17F", "#000", "#44C3A7"],
      synth: null,
      in_slider: "",
      hold1_slider: "",
      ex_slider: "",
      hold2_slider: "",
      vol_slider: "",
      ctrlPanel: null,
      volPanel: null,
      blob: null,
      animating: false,
      step: 0,
      padding: 50,
      items: [{ title: "Dashboard" }, { title: "Photos" }, { title: "About" }],
      breathConfig: [
        { text: "Press Play" },
        {
          dir: 0.2,
          text: "Inhale",
          duration: 5000,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5000,
        },
        {
          dir: -0.2,
          text: "Exhale",
          duration: 5000,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5000,
        },
      ],
      color: "#8CE5EA",
    }
  },
  computed: {
    currentStep() {
      // return the current step config
      return this.breathConfig[this.step]
    },
  },
  mounted() {
    console.log(this.$vuetify.breakpoint)
    // pass the canvas element from DOM
    this.init(this.$refs.canvas)
    // add event listener
  },
  created() {
    window.addEventListener("mousemove", this.mouseMove)
    window.addEventListener("pointermove", this.mouseMove)
  },
  destroyed() {
    window.removeEventListener("mousemove", this.mouseMove)
    window.removeEventListener("pointermove", this.mouseMove)
  },
  methods: {
    init(canvas) {
      // create new blob
      this.blob = new Blob(this.color, canvas.getContext("2d"))
      // attach canvas element to Blob
      this.blob.canvas = canvas
      // set height to be same as width (square)
      this.blob.canvas.height = this.blob.canvas.width
      // set default color
      this.setColor(this.color)
      // initialise blob
      this.setRadius()
      this.blob.init()
      this.blob.render()
    },
    changeBlue() {
      this.blob.color = this.blue
    },
    changeRose() {
      this.blob.color = this.rose
    },
    changeGreen() {
      this.blob.color = this.green
    },
    changeOrange() {
      this.blob.color = this.orange
    },
    toggle() {
      // toggle animation on/off
      this.animating = !this.animating
      if (this.animating) {
        // play button was clicked
        this.start()
      } else {
        // stop button was clicked
        this.reset()
      }
    },
    reset() {
      // remove all timers
      window.clearInterval(this.textAnimation)
      window.clearInterval(this.blobAnimation)
      // reset blob size
      this.setRadius()
      // reset steps
      this.step = 0
    },
    setRadius() {
      // set blob radius to canvas diameter / 2, minus padding space
      this.blob.radius = this.blob.canvas.width / 2 - this.padding
    },
    setColor(color) {
      // update blob color
      this.blob.color = color
    },
    start() {
      // start animating immediately
      this.animate()
      // animate next steps with timer
      this.textAnimation = window.setInterval(() => {
        this.animate()
        // step duration from config
      }, this.currentStep.duration)
    },
    nextStep() {
      // loop through breathing steps
      if (this.step < this.breathConfig.length - 1) {
        this.step += 1
      } else {
        // loop back to start
        this.step = 1
      }
    },
    animate() {
      // stop current animation
      window.clearInterval(this.blobAnimation)
      // go to next step
      this.nextStep()
      // start new animation, using next step config
      this.blobAnimation = setInterval(() => {
        this.blob.radius += this.currentStep.dir
      }, 20)
    },
    decrement() {
      this.vol_slider--
    },
    increment() {
      this.vol_slider++
    },
    /*mouseMove(e) {
      console.log(e.clientX, e.clientY)
      let blob = this.blob
      //let hover = false
      let pos = this.blob.center
      let diff = { x: e.clientX - pos.x, y: e.clientY - pos.y }
      let dist = Math.sqrt(diff.x * diff.x + diff.y * diff.y)
      let angle = null
      this.blob.mousePos = {
        x: pos.x - e.clientX,
        y: pos.y - e.clientY,
      }
      if (dist < this.blob.radius && this.hover === false) {
        let vector = {
          x: e.clientX - pos.x,
          y: e.clientY - pos.y,
        }
        angle = Math.atan2(vector.y, vector.x)
        this.hover = true
      } else if (dist > this.blob.radius && this.hover === true) {
        let vector = {
          x: e.clientX - pos.x,
          y: e.clientY - pos.y,
        }

        angle = Math.atan2(vector.y, vector.x)
        this.hover = false
        blob.color = null
      }
      if (typeof angle == "number") {
        let nearestPoint = null
        let distanceFromPoint = 100
        blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            nearestPoint = point
            distanceFromPoint = Math.abs(angle - point.azimuth)
          }
        })
        if (nearestPoint) {
          let strength = {
            x: this.oldMousePoint.x - e.clientX,
            y: this.oldMousePoint.y - e.clientY,
          }
          Math.sqrt(strength.x * strength.x + strength.y * strength.y) * 1
          if (strength > 100) strength = 100
          nearestPoint.acceleration = (strength / 100) * (this.hover ? -1 : 1)
        }
      }
      this.oldMousePoint.x = e.clientX
      this.oldMousePoint.y = e.clientY
    },*/
  },
}
</script>

<style scoped>
#canvas {
  width: 60%;
  height: auto;
  position: relative;
  z-index: 0;
}

@media screen and (max-width: 650px) {
  #canvas {
    width: 75%;
  }
}

@media screen and (max-width: 550px) {
  #canvas {
    width: 85%;
  }
}

@media screen and (max-width: 450px) {
  #canvas {
    width: 100%;
  }
}

/* resize for longer screens like iPad (vertical) */
@media screen and (min-height: 1000px) {
  #canvas {
    width: 90%;
  }
}

.container {
  z-index: 1;
  position: fixed;
  bottom: 3%;
  left: 50%;
  transform: translateX(-50%);
}

.canv_wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.instructions {
  color: #fff;
  position: absolute;
  z-index: 1;
}
.custom {
  border-style: none;
}
</style>
