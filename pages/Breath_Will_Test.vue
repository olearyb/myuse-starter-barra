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
      canvas: null,
      blob: null,
      hover: false,
      animating: false,
      step: 0,
      padding: 160,
      breathConfig: [
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
      return this.breathConfig[this.step]
    },
  },
  mounted() {
    this.init(this.$refs.canvas)
  },
  methods: {
    init(canvas) {
      this.blob = new Blob(this.color, canvas.getContext("2d"))
      this.blob.canvas = canvas
      this.blob.canvas.height = this.blob.canvas.width
      this.blob.color = this.color

      this.setRadius()
      this.blob.init()
      this.blob.render()
    },
    toggle() {
      this.animating = !this.animating
      if (this.animating) {
        this.animate()
      } else {
        this.reset()
      }
    },
    reset() {
      window.clearInterval(this.textAnimation)
      window.clearInterval(this.blobAnimation)
      this.setRadius()
      this.step = 0
    },
    setRadius() {
      this.blob.radius = this.blob.canvas.width - this.padding
    },
    animate() {
      this.varySize()
      this.textAnimation = window.setInterval(() => {
        this.incrementStep()
        this.varySize()
      }, this.currentStep.duration)
    },
    incrementStep() {
      if (this.step < this.breathConfig.length - 1) {
        this.step += 1
      } else {
        this.step = 0
      }
    },
    varySize() {
      window.clearInterval(this.blobAnimation)
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
