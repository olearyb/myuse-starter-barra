<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Values Compass Exercise
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/compass_diall.svg')"
                class="text-center inhale"
                id="diall"
              /> 
              <!-- <video class="text-center px-10 inhale" height="300px" autoplay loop muted>
                <source :src="require('~/assets/movs/Values.mp4')">
              </video> -->
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <p>
                The Values Compass exercise is used to help explore what
                <b>values are most important</b> to us, and
                <b>how effectively</b>
                we are currently living by those values.
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10">
            <v-col>
              <h1 class="card__header">How Does It Work?</h1>
            </v-col>
          </v-row>
          <v-row class="pt-7 pb-7 pa-sm-10 text-center">
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <h2>1. Select</h2>
              <p>
                a life domain from the list
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img">
              <video class="text-center px-10 mx-auto inhale" height="250px" autoplay loop muted>
                <source :src="require('~/assets/movs/value_scroll.mp4')">
              </video> 
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10 text-center">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/keywords_mask.svg')"
                class="text-center inhale"
              /> 
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <h2>2. Identify</h2>
              <p>
                Keywords that relate to that domain
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10 text-center">
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <h2>3. Rate</h2>
              <p>
                the importance and effectiveness of this life domain
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/scales.svg')"
                class="text-center inhale"
              /> 
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10 text-center">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/bar_chart.svg').default"
                class="text-center inhale"
              /> 
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <h2>4. Review</h2>
              <p>
                your ratings to help you understand your values
              </p>
            </v-col>
          </v-row>
          <div class="my-2 text-center pb-10">
            <nuxt-link to="/Values/How_It_Works">
              <v-btn color="primary" dark large>Get Started</v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
let compass = document.getElementById("diall")
export default {
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      selectItems: ["Option One", "Option Two", "Option Three", "Option Four"],
      textInput: "",
      textInput2: "",
      slider: 45,
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll)
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
  },
  methods: {
    handleScroll(event) {
      compass.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    }
  }
}
</script>
