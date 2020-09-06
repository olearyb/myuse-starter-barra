<template id="breath">
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <v-img
          :src="require('~/assets/images/top_blue.svg').default"
          class="semi_circle"
        />
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          <b> Mindful Breathing</b>
        </h1>
        <p class="text-center pb-10">
          What exactly is it?
        </p>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="5" class="intro_img pa-10 my-auto">
              <v-img
                :src="require('~/assets/images/lung_blue.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="7" class="text_block pa-10">
              <p>
                This web tool uses a breathing technique know as
                <b>Square breathing.</b> This is a technique whereby a person
                counts (either outloud or silently) each stage of their breath
                cycle (Inhale - Hold - Exhale - Hold) and repeat this for a few
                minutes. It is important to feel your breath and be mindful of
                it at each moment.
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" class="text_block pa-10">
              <p>
                The length is not important, but 4 or 5 seconds for each breath
                cycle is good for beginnners. However, whatever you are
                comfortable with is the key.
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pa-sm-10 py-10">
            <v-col cols="12" sm="6" class="text_block pa-10 my-auto">
              <p>
                This technique can be beneficial to anyone, especially those who
                want to meditate or reduce stress as well as helping people to
                make more mindful decisions as they slow down their thoughts and
                get in touch with their breathing.
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10 my-auto">
              <v-img
                :src="require('~/assets/images/learn_blue.svg')"
                class="inhale"
              />
            </v-col>
          </v-row>
          <div class="my-2 text-center pb-10">
            <nuxt-link to="/Breath_Will_Test_New">
              <v-btn color="primary" dark large>Back</v-btn>
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
