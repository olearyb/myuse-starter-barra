<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          {{ card.title }}
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row>
            <v-col cols="12">
              <h2 class="my-10">Importance</h2>
              <p>
                Now that you have listed some keywords that represent your
                values in the area of {{ card.title }}, the next step is
                to
                <b>rate the importance</b> of these values as a whole, at this
                stage in your life.<br /><br />
                From 0 - 10, how important are these values to you?
                <br />
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
                v-model="importance"
                class="my-10 mx-5"
                thumb-label="always"
                min="0"
                max="10"
              >
              </v-slider>
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <nuxt-link :to="`../${card.id}`">
              <v-btn color="primary" class="mx-5" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link :to="`effectiveness/${card.id}`">
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
      id: this.$route.params.importance,
      //importance: "",
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
    importance: {
      get() {
        return this.card.importance
      },
      set(importance) {
        this.$store.commit("cards/updateImportance", { card: this.card, importance})
      },
    },
  },
}
</script>
