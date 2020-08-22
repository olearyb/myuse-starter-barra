<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          {{ card.title }}
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-img :src="card.src" class="text-center ma-5" />
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>
                  Use the text box below to type some keywords that represent
                  this life domain for you personally.<br /><br />
                  You can add up to 5 keywords in total. Type the keyword and
                  hit enter or click/tap outside the text field to add that
                  keyword.
                </p>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-2"></v-divider>
              </v-col>
              <v-col cols="12">
                <p class="my-5"><b>Keywords</b></p>
                <!--<v-text-field
                  v-model="textInput"
                  class="py-5"
                  :counter="100"
                  label="Enter a keyword"
                  outlined
                ></v-text-field>-->
                <v-combobox
                  v-model="select"
                  class="py-5"
                  multiple
                  label="Enter a keyword"
                  append-icon
                  chips
                  deletable-chips
                  :search-input.sync="search"
                >
                </v-combobox>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-2"></v-divider>
              </v-col>
            </v-row>
          </v-card-text>
          <div class="m-2 text-center pb-10">
            <nuxt-link to="/Values/Domains">
              <v-btn color="primary" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link :to="`importance/${card.id}`">
              <v-btn color="primary" dark large>Next</v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
//import { mapState } from "vuex"
export default {
  data() {
    return {
      id: this.$route.params.keyword,
      select: [],
      items: [],
      search: "", //sync search
      /*cards: [
        {
          title: "Personal Growth",
          src: require("~/assets/images/community.svg"),
          flex: 6,
          id: "1",
        },
        {
          title: "Leisure",
          src: require("~/assets/images/customize.svg"),
          flex: 6,
          id: "2",
        },
        {
          title: "Sprituality",
          src: require("~/assets/images/feedback.svg"),
          flex: 6,
          id: "3",
        },
        {
          title: "Work",
          src: require("~/assets/images/sitting.svg"),
          flex: 6,
          id: "4",
        },
        {
          title: "Health",
          src: require("~/assets/images/follow.svg"),
          flex: 6,
          id: "5",
        },
        {
          title: "Community & Environment",
          src: require("~/assets/images/girl_compass.svg"),
          flex: 6,
          id: "6",
        },
        {
          title: "Family Relationships",
          src: require("~/assets/images/skills.svg"),
          flex: 6,
          id: "7",
        },
        {
          title: "Social Relationships",
          src: require("~/assets/images/thought_bubbles.svg"),
          flex: 6,
          id: "8",
        },
        {
          title: "Intimate Relationships",
          src: require("~/assets/images/study.svg"),
          flex: 6,
          id: "9",
        },
        {
          title: "Parenting",
          src: require("~/assets/images/learn_blue.svg"),
          flex: 6,
          id: "10",
        },
      ],*/
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
  },
  watch: {
    select(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.select.pop())
      }
    },
  },
}
</script>
