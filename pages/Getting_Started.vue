<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <v-img :src="require('~/assets/images/top.svg')" class="semi_circle" />
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Getting Started
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pt-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                the instructions on screen while breathing deeply and counting
                each breath
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/inhale_widev.svg')"
                class="inhale"
              />
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/study.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10">
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
                :src="require('~/assets/images/study.svg')"
                class="text-center inhale"
              />
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10"></v-row>
          <div class="my-2 text-center pb-10">
            <v-btn color="primary" dark large>Get Started</v-btn>
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
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      items: ["Option One", "Option Two", "Option Three", "Option Four"],
      slider: 45,
    }
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
</style>
