<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12" align="center" justify="center">
        <h1 class="card__header mx-10 main_title">
          Mindful Breath
        </h1>
        <div ref="canv_wrap" class="canv_wrap">
          <canvas
            id="canvas"
            ref="canvas"
            touch-action="none"
            @mouseover="mouseMove"
          ></canvas>
          <h1 class="instructions">{{ currentStep.text }}<br />{{ time }}</h1>
        </div>
        <v-container fluid class="wrapper">
          <v-row align="center" justify="center">
            <v-spacer></v-spacer>
            <!-- <v-btn
              fab
              medium
              color="primary"
              @click.stop="volPanel = !volPanel"
            >
              <v-icon color="white">
                mdi-music
              </v-icon>
            </v-btn> -->
            <MusicPlayer :loop="innerLoop" />
            <v-spacer></v-spacer>
            <v-btn fab x-large color="primary" @click="toggle">
              <v-icon v-if="animating" large color="white">mdi-stop</v-icon>
              <v-icon v-else large color="white">mdi-play</v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab medium color="primary" @click.stop="openCtrlPanel">
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
        <v-dialog v-if="$vuetify.breakpoint.mdAndDown" v-model="ctrlPanel" scrollable max-width="300px">
          <template v-slot:activator="{ on, attrs }"></template>
          <v-card class="modal">
            <v-card-title>Control Panel</v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list dense>
            <v-col cols="12">
              <v-subheader class="py-2">Animation Colour</v-subheader>
              <v-container class="text-center">
                <v-btn class="ma-0.5" elevation="0" fab small color="#8CE5EA" :value="blue" @click="changeBlue"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#FC54A7" :value="rose" @click="changeRose"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#03EE9B" :value="green" @click="changeGreen"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#FEAB20" :value="orange" @click="changeOrange"></v-btn>
              </v-container>
              <hr />
              <v-subheader class="pl-0 pt-5">Inhale count</v-subheader>
              <v-slider
                v-model="breathConfig[1].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[1].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">1st Hold</v-subheader>
              <v-slider
                v-model="breathConfig[2].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[2].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">Exhale count</v-subheader>
              <v-slider
                v-model="breathConfig[3].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[3].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pt-5">2nd Hold</v-subheader>
              <v-slider
                v-model="breathConfig[4].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[4].duration"
                inverse-label
              >
              </v-slider>
            </v-col>
          </v-list>
            </v-card-text>
          </v-card>            
        </v-dialog>
        <v-navigation-drawer
          v-if="$vuetify.breakpoint.lgAndUp"
          v-model="ctrlPanel"
          color="#fff"
          absolute
          temporary
          right
          hide-overlay
        >
          <v-toolbar dark color="primary">
            <v-toolbar-title>Control Panel</v-toolbar-title>
          </v-toolbar>
          <v-list dense>
            <v-col cols="12">
              <v-subheader class="py-2">Animation Colour</v-subheader>
              <v-container class="pb-5">
                <v-btn class="ma-0.5" elevation="0" fab small color="#8CE5EA" :value="blue" @click="changeBlue"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#FC54A7" :value="rose" @click="changeRose"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#03EE9B" :value="green" @click="changeGreen"></v-btn>
                <v-btn class="ma-0.5" elevation="0" fab small color="#FEAB20" :value="orange" @click="changeOrange"></v-btn>
              </v-container>
              <hr />
              <v-subheader class="pl-0 pt-5">Inhale count</v-subheader>
              <v-slider
                v-model="breathConfig[1].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[1].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">1st Hold</v-subheader>
              <v-slider
                v-model="breathConfig[2].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[2].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pl-0 pt-5">Exhale count</v-subheader>
              <v-slider
                v-model="breathConfig[3].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[3].duration"
                inverse-label
              >
              </v-slider>
              <hr />
              <v-subheader class="pt-5">2nd Hold</v-subheader>
              <v-slider
                v-model="breathConfig[4].duration"
                min="1"
                max="8"
                step="1"
                ticks="always"
                tick-size="1"
                class="py-5"
                :label="breathConfig[4].duration"
                inverse-label
              >
              </v-slider>
            </v-col>
          </v-list>
        </v-navigation-drawer>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Blob from "../assets/content/Blob_Point"
import MusicPlayer from "~/components/MusicPlayer"
let oldMousePoint = { x: 0, y: 0 }
let hover = false
export default {
  components: { 
      MusicPlayer, 
    },
  data() {
    return {
      innerLoop: true,
      blue: "#8CE5EA",
      rose: "#FC54A7",
      green: "#03EE9B",
      orange: "#FEAB20",
      colorpick: null,
      time: 5, 
      ctrlPanel: null,
      volPanel: null,
      blob: null,
      animating: false,
      step: 0,
      padding: 70,
      ivl: 1000,
      items: [{ title: "Dashboard" }, { title: "Photos" }, { title: "About" }],
      breathConfig: [
        { text: "Press Play" },
        {
          dir: 0.2,
          text: "Inhale",
          duration: 5,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5,
        },
        {
          dir: -0.2,
          text: "Exhale",
          duration: 5,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5,
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
    this.innerLoop = this.loop;
    //this.countDownTimer()
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
    // --- Color CHange functions --- will clean up ---//
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
      window.clearInterval(this.stepAnimation)
      window.clearInterval(this.blobAnimation)
      window.clearInterval(this.timer)
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
      // start animating blob immediately
      this.blobAnimate()
      // start timer to animate next step
      this.stepAnimate()
    },
    blobAnimate() {
      // start new animation, using current step config
      this.blobAnimation = setInterval(() => {
        this.blob.radius += this.currentStep.dir
      }, 20)
    },
    stepAnimate() {
      // go to next step, after waiting current "duration"
      
      this.stepAnimation = setTimeout(() => {
        this.nextStep()
        this.time = this.currentStep.duration
        //this.countDownTimer()
      }, this.currentStep.duration * 1000)
      this.countDownTimer()
      
    },
    countDownTimer() {
      let time = this.currentStep.duration
      if (this.currentStep.duration > 0) {
        this.timer = setTimeout(() => {
        this.time -= 1
        //this.time = this.currentStep.duration
        this.countDownTimer()
          }, 1000)
        }
      },
    
    nextStep() {
      // loop through breathing steps
      if (this.step < this.breathConfig.length - 1) {
        this.step += 1
        //countDownTimer()
      } else {
        // loop back to start
        this.step = 1
        //this.time = this.currentStep.duration
        //this.countDownTimer()
      }

      // stop current step animation
      window.clearInterval(this.stepAnimation)
      window.clearInterval(this.timer)

      // start next step animation
      this.stepAnimate()
      //this.countDownTimer()
      

    },
    openCtrlPanel() {
      this.reset()
      this.ctrlPanel = true
      this.animating = false
    },
    decrement() {
      this.vol_slider--
    },
    increment() {
      this.vol_slider++
    },
    mouseMove(e) {
      let pos = this.blob.center
      // ----test for coord adjustments ---//
      /*let parentPos = document
        .getElementById("canv_wrap")
        .getBoundingClientRect()
      let childPos = document.getElementById("canvas").getBoundingClientRect()
      let xAdj = e.clientX - parentPos.x
      let yAdj = e.clientY - parentPos.y */
      //-----------------------------------//
      let diff = { x: e.offsetX - pos.x, y: e.offsetY - pos.y }
      let distx = diff.x * diff.x
      let disty = diff.y * diff.y
      let dist = Math.sqrt(distx + disty)
      let angle = null
      this.blob.mousePos = {
        //x: pos.x - e.clientX,
        //y: pos.y - e.clientY,
        x: pos.x - e.offsetX,
        y: pos.y - e.offsetY,
      }
      console.log(e.offsetX, e.offsetY)
      if (dist < this.blob.radius && hover === false) {
        let vector = {
          x: e.offsetX - pos.x,
          y: e.offsetY - pos.y,
        }
        angle = Math.atan2(vector.y, vector.x)
        hover = true
      } else if (dist > this.blob.radius && hover === true) {
        let vector = {
          x: e.offsetX - pos.x,
          y: e.offsetY - pos.y,
        }

        angle = Math.atan2(vector.y, vector.x)
        hover = false
        this.blob.color = null
      }
      if (typeof angle == "number") {
        let nearestPoint = null
        let distanceFromPoint = 100
        this.blob.points.forEach((point) => {
          if (Math.abs(angle - point.azimuth) < distanceFromPoint) {
            nearestPoint = point
            distanceFromPoint = Math.abs(angle - point.azimuth)
          }
        })
        if (nearestPoint) {
          let strength = {
            x: oldMousePoint.x - e.offsetX,
            y: oldMousePoint.y - e.offsetY,
          }
          let strX = strength.x * strength.x
          let strY = strength.y * strength.y
          strength = Math.sqrt(strX + strY) * 1
          if (strength > 100) strength = 100
          let strDiv = strength / 100
          nearestPoint.acceleration = strDiv * (hover ? -1 : 1)
        }
      }
      oldMousePoint.x = e.offsetX
      oldMousePoint.y = e.offsetY
    },
  },
}
</script>

<style scoped>
#canvas {
  width: 70%;
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


.wrapper {
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
  font-size: 30px;
}
.custom {
  border-style: none;
}
a {
  text-decoration: none;
}
</style>
