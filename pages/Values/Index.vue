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
                :src="require('~/assets/images/girl_compass.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                The Values Compass exercise is used to help explore what
                <b>values are most important</b> to us, and
                <b>how effectively</b>
                we are currently living by those values.
                <br /><br />
                Click the Get Started button below to learn more.
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
}
</script>
