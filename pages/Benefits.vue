<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <v-img
          :src="require('~/assets/images/top_pink.svg')"
          class="semi_circle"
        />
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          <b> Benefits</b>
        </h1>
        <p class="text-center pb-10">
          Learn more about some of the benefits associated with the mindful
          breathing techniques used in this web tool.
        </p>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pt-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <h2>Follow</h2>
              <p>
                the instructions on screen while breathing deeply and counting
                each breath
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/follow.svg')"
                class="text-center inhale"
              />
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
            <v-col cols="12" sm="6" class="text_block pa-10">
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
.semi_circle {
  margin-top: -16px;
}
</style>
