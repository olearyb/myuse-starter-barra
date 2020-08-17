<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          Card Title
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row>
            <v-col cols="12">
              <h2 class="my-10">Effectiveness</h2>
              <p>
                Now that you have rated the overall importance of your values in
                this life domain, the next step is to
                <b>rate how effectively</b> you are living by these values, at
                this stage in your life.<br /><br />
                From 0 - 10, how effectively are you currently living by these
                values?
              </p>
            </v-col>
            <v-col cols="12">
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col cols="12">
              <v-row>
                <v-subheader>Not at all</v-subheader>
                <v-spacer></v-spacer>
                <v-subheader>Extremely</v-subheader>
              </v-row>
              <v-slider
                v-model="slider"
                class="my-10 mx-5"
                thumb-label="always"
                min="0"
                max="10"
              >
              </v-slider>
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <nuxt-link to="./importance">
              <v-btn color="primary" class="mx-5" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link to="/">
              <v-btn color="primary" class="mx-5" dark large>Next</v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  data() {
    return {
      slider: "",
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
  },
}
</script>
