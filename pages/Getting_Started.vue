<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Getting Started
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pt-7 pa-sm-10 py-10">
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <p>
                Try to make sure that you're <b>seated upright</b>
                in a comfortable chair with your feet flat on the floor.
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/SittingAsset.svg')"
                class="inhale"
              />
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/learn.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <p>
                For your first time, try to be in a stress-free,
                <b>quiet environment</b> where you can focus on your breathing.
              </p>
              <br />
              <p>
                When your ready, click the <b>try it out</b> button below to go
                to the breathing tool and try it yourself!
              </p>
            </v-col>
          </v-row>
          <div class="my-2 text-center pb-10">
            <nuxt-link to="/Breath_Will_Test_New">
              <v-btn color="primary" dark large>Try It Out</v-btn>
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
</style>
