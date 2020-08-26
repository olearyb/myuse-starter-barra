<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Self Development Tools
        </h1>
        <v-card class="pa-sm-5 py-5 px-2 ma-20">
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h1 class="pa-5 text-center">Mindful Breath</h1>
                <p class="pa-5 text-center">
                  Use the 'go' button to go to the mindful breathing tool.
                </p>
                <div class="pa-5 text-center">
                  <nuxt-link to="/mindful_breathing">
                    <v-btn color="primary" dark large>Go</v-btn>
                  </nuxt-link>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <br />
        <v-card class="pa-sm-5 py-5 px-2">
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h1 class="pa-5 text-center">Values Compass</h1>
                <p class="pa-5 text-center">
                  Use the 'go' button to go Values Compass tool.
                </p>
                <Nav />
                <div class="pa-5 text-center">
                  <nuxt-link to="/values">
                    <v-btn color="primary" dark large>Go</v-btn>
                  </nuxt-link>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
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

<style scoped>
#myCanvas {
  border: 1px solid grey;
}
</style>
