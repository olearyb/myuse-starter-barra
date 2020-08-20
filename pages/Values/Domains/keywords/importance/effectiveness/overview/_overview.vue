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
              <h2 class="my-10">Keywords</h2>
              <p>list of keywords</p>
            </v-col>
            <v-col cols="12">
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col cols="12">
              <h2 class="my-10">Ratings</h2>
              <p>Bar Chart</p>
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <nuxt-link :to="`../${card.id}`">
              <v-btn color="primary" class="mx-5" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link to="/Values/Domains">
              <v-btn color="primary" class="mx-5" dark large>FInish</v-btn>
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
      id: this.$route.params.overview,
      slider: "",
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
  },
}
</script>
