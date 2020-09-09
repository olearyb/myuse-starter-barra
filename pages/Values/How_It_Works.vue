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
          <v-row>
            <v-col cols="12" class="text_block pa-10">
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
          </v-row>
          <v-row class="pb-7 px-sm-10">
            <v-col cols="12">
              <v-img
                v-if="$vuetify.breakpoint.smAndUp"
                :src="require('~/assets/images/thoughts_Qs_woman.svg')"
                class="text-center inhale"
              />
              <v-img
                v-if="$vuetify.breakpoint.xsOnly"
                :src="require('~/assets/images/thoughts_Qs_mobile.svg')"
                class="text-center inhale"
              />
            <!--</v-col>
            <v-col cols="12" sm="4" class="intro_img px-5">
              <v-img
                :src="require('~/assets/images/Q1.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="4" class="intro_img px-5">
              <v-img
                :src="require('~/assets/images/Q2.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="4" class="intro_img px-5">
              <v-img
                :src="require('~/assets/images/Q3.svg')"
                class="text-center inhale"
              />-->
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <!--<nuxt-link to="/Values"> -->
            <nuxt-link to="/values">
              <v-btn color="primary" dark large>Back</v-btn>
            </nuxt-link>
            <!--<nuxt-link to="/Values/Domains/"> -->
            <nuxt-link to="/values/domains/">
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
