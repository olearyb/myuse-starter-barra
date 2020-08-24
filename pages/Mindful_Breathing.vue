<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <v-img
          :src="require('~/assets/images/top.svg').default"
          class="semi_circle"
        />
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          <b> Mindful Breathing Exercise</b>
        </h1>
        <p class="text-center pb-10">
          This web tool is a breathing exercise that you can follow along to and
          learn a valuable breathing skill.<br /><br />Keep scrolling to learn
          more and get started!
        </p>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pt-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto animate__animated animate__fadeInLeft">
              <h2>Follow</h2>
              <p >
                the instructions on screen while breathing deeply and counting
                each breath
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/circle.svg').default"
                class="text-center"
              >
                <transition name="fade" mode="out-in">
                  <span v-if="show" class="center"><h3>Breathe</h3></span>
                </transition>
              </v-img>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/customize.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10 animate__animated animate__fadeInRight">
              <h2>Customise</h2>
              <p>
                your experience by changing the length of each breath and the
                colours of the animation
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <h2>Learn</h2>
              <p>
                a valuable and beneficial breathing technique than can have
                positive health effects as well as allowing you to slow down
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/learn.svg')"
                class="text-center inhale"
              />
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/decisions.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10">
              <h2>Make Desicions</h2>
              <p>
                more mindfully by slowing down your breathing and allowing
                yourself headspace and time to reflect
              </p>
            </v-col>
          </v-row>
          <div class="my-2 text-center pb-10">
            <nuxt-link to="/Getting_Started">
              <v-btn color="primary" dark large>Get Started</v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  //layout: "breath",
  data() {
    return {
      show: true,
      breath: ["Inhale", "hold", "exhale", "hold"],
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      items: ["Option One", "Option Two", "Option Three", "Option Four"],
      slider: 45,
    }
  },
  mounted() {
    window.setInterval(() => {
      this.breathing()
    }, 2500)
  },
  methods: {
    breathing() {
      const first = this.breath.shift()
      this.breath = this.breath.concat(first)
    },
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
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: 2s ease-in;
  color: white;
}
</style>
