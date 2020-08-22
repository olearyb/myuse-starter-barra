<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Life Domains
        </h1>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in getCards"
              :key="card.id"
              cols="12"
              :sm="card.flex"
              xs="1"
            >
              <nuxt-link :to="`Domains/keywords/${card.id}`">
                <v-card class="pa-5">
                  <v-img :src="card.src" class="white--text align-end ma-5">
                  </v-img>
                  <v-card-title
                    class="title"
                    v-text="card.title"
                  ></v-card-title>
                  <v-card-actions>
                    <v-btn text>Explore</v-btn>
                  </v-card-actions>
                </v-card>
              </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
export default {
  layout: "tabs",
  computed: {
    ...mapGetters("cards", ["getCards"]),
  },
}
</script>

<style scoped>
.title {
  white-space: pre;
}
</style>
