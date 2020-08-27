<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          How Does it Work?
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                You will be given a choice of <b>life domains</b>
                to evaluate, dont worry if not all are relevant to you.
                <br /><br />
                The goal is to identify a few <b>keywords</b> that represent
                what is important or meanigful to you in the selected life
                domain.<br /><br />
                When thinking of keywords, it can be useful to ask yourself the
                following <b>questions:</b>
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/thought_bubbles.svg')"
                class="text-center inhale"
              />
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <nuxt-link to="/Values">
              <v-btn color="primary" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link to="/Values/Domains/">
              <v-btn color="primary" dark large>Next</v-btn>
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
