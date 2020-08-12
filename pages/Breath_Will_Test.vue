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
        <div ref="canv_wrap" class="canv_wrap">
          <canvas id="canvas" ref="canvas" touch-action="none"></canvas>
          <h1 class="instructions">{{ currentStep.text }}</h1>
        </div>
        <v-container fluid class="container">
          <v-row align="center" justify="center">
            <v-spacer></v-spacer>
            <v-btn fab medium color="secondary">
              <v-icon color="black">
                mdi-volume-high
              </v-icon>
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn fab x-large color="primary" @click="toggle">
              <v-icon v-if="animating" large color="white">mdi-stop</v-icon>
              <v-icon v-else large color="white">mdi-play</v-icon>
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

export default {
  data() {
    return {
      blob: null,
      animating: false,
      step: 0,
      padding: 10,
      breathConfig: [
        { text: "Press Play" },
        {
          dir: -0.2,
          text: "Inhale",
          duration: 5000,
        },
        {
          dir: 0,
          text: "Hold",
          duration: 5000,
        },
        {
          dir: 0.2,
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
    // pass the canvas element from DOM
    this.init(this.$refs.canvas)
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
  z-index: 100;
  position: fixed;
  bottom: 5%;
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
  z-index: 100;
}
</style>
