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
              <nuxt-link :to="'/Values/' + id">
                <v-card class="pa-5">
                  <v-img :src="card.src" class="white--text align-end ma-5">
                  </v-img>
                  <v-card-title v-text="card.title"></v-card-title>
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
  data: () => ({
    cards: [
      {
        title: "Personal Growth",
        src: require("~/assets/images/community.svg"),
        flex: 6,
        id: 1,
      },
      {
        title: "Leisure",
        src: require("~/assets/images/customize.svg"),
        flex: 6,
        id: 2,
      },
      {
        title: "Sprituality",
        src: require("~/assets/images/feedback.svg"),
        flex: 6,
        id: 3,
      },
      {
        title: "Work",
        src: require("~/assets/images/sitting.svg"),
        flex: 6,
        id: 4,
      },
      {
        title: "Health",
        src: require("~/assets/images/follow.svg"),
        flex: 6,
        id: 5,
      },
      {
        title: "Community & Environment",
        src: require("~/assets/images/girl_compass.svg"),
        flex: 6,
        id: 6,
      },
      {
        title: "Family Relationships",
        src: require("~/assets/images/skills.svg"),
        flex: 6,
        id: 7,
      },
      {
        title: "Social Relationships",
        src: require("~/assets/images/thought_bubbles.svg"),
        flex: 6,
        id: 8,
      },
      {
        title: "Intimate Relationships",
        src: require("~/assets/images/study.svg"),
        flex: 6,
        id: 9,
      },
      {
        title: "Parenting",
        src: require("~/assets/images/learn_blue.svg"),
        flex: 6,
        id: 10,
      },
    ],
  }),
  computed: {
    ...mapGetters("cards", ["getCards"]),
  },
}
</script>
