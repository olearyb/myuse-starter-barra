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
          <v-row class="pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/lungs.svg')"
                class="text-center inhale"
              />
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                Square breathing is a technique used when taking
                <b>slow, deep breaths.</b>It can heighten performance and
                concentration while also being a powerful stress reliever.
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                Evidence shows that intentional deep breathing techniques have a
                positive effect and can help regulate the human bodies
                <b>Autonomic Nervous System</b> that regulates involuntary
                bodily functions.
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="intro_img pa-10">
              <v-img
                :src="require('~/assets/images/nervous_system.svg')"
                class="text-center inhale"
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
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p>
                Square Breathing can <b>reduce stress</b> and improve your mood
                when practiced regularly. It is also an aid for those who suffer
                from anxiety disorders, trauma, depression and chronic disease.
              </p>
            </v-col>
          </v-row>
          <hr class="ma-10" />
          <v-row class="pt-7 pb-7 pa-sm-10">
            <v-col cols="12" sm="6" class="text_block pa-10">
              <h2>Resources</h2>
              <p>
                Use the following links if you would like to learn more and
                discover more ways of employing mindful techniques into your
                daily life.
              </p>
            </v-col>
            <v-col cols="12" sm="6" class="text_block pa-10">
              <p class="mind_resources pt-10">
                <a
                  href="https://www2.hse.ie/wellbeing/mental-health/mindfulness.html"
                  target="_blank"
                >
                  What is Mindfulness?<br />
                </a>
                <br />
                <a
                  href="https://www.healthline.com/health/box-breathing"
                  target="_blank"
                >
                  What is Box Breathing?<br />
                </a>
                <br />
                <a
                  href="https://portlandpsychotherapy.com/self-compassion-meditations/"
                  target="_blank"
                >
                  Audio Guided Meditations<br />
                </a>
              </p>
            </v-col>
          </v-row>
          <div class="my-2 text-center pb-10">
            <nuxt-link to="/Breath_Will_Test">
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
