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
                  Values are your heart’s deepest desires for how you want to behave as a human being. Values
                  are not about what you want to get or achieve; they are about <b>how you want to behave or act</b>
                  on an ongoing basis. <br><br> 
                  Use the text box below to type some keywords that represent
                  your values in the area of {{ card.title }}.
                    <v-icon color="primary" @click.stop="openPanel">mdi-comment-question-outline</v-icon>
                      <v-dialog v-model="panel" scrollable max-width="80vw" >
                        <template v-slot:activator="{ on, attrs }"></template>
                        <v-card>
                          <v-card-title >Keywords</v-card-title>
                          <v-divider></v-divider>
                          <v-card-text class="py-10">
                            When thinking of keywords, it can be useful to ask
                            yourself the following questions:<br /><br /> 
                            <v-col cols="8" class="text-center mx-auto" v-if="$vuetify.breakpoint.smAndUp">
                              <v-img
                                
                                :src="require('~/assets/images/thoughts_Qs_woman.svg')"
                                class="text-center inhale"
                              />
                              </v-col>
                              <v-col cols="12" v-if="$vuetify.breakpoint.xsOnly">
                              <v-img
                                :src="require('~/assets/images/thoughts_Qs_mobile.svg')"
                                class="text-center inhale"
                              />
                              </v-col>
                              <v-divider></v-divider>
                              <div class="m-2 text-center pt-10">
                                  <v-btn color="primary" class="mx-5" dark large>Got it</v-btn>
                                </nuxt-link>
                              </div>
                            
                            <!--<div>
                              <ul>
                                <li>What sort of person do I want to be?</li>
                                <li>What do I want to do?</li>
                                <li>How do I ideally want to behave?</li>
                              </ul>
                            </div>
                            <!--<v-row class="pb-7 pa-sm-10">
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
                                />
                              </v-col>
                            </v-row>-->
                          </v-card-text>
                        </v-card>
                      </v-dialog>
                  <br /><br />
                  Try to limit your keywords to 5 in total. You can either choose from the drop down menu
                  of some commonly used values or, type your own keyword and
                  hit enter or click/tap outside the text field to add that
                  keyword.
                  <v-icon color="primary" @click.stop="openPanel1">mdi-comment-question-outline</v-icon>
                      <v-dialog v-model="panel1" scrollable max-width="80vw" >
                        <template v-slot:activator="{ on, attrs }"></template>
                        <v-simple-table>
                          <template v-slot:default>
                            <thead>
                              <tr>
                                <th>Value</th>
                                <th>Description</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.name }}</td>
                                <td> {{ item.desctiption }} </td>
                              </tr>
                            </tbody>
                          </template>
                        </v-simple-table>
                      </v-dialog>
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
                  v-model="keywords"
                  :items="values"
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
            <!-- <nuxt-link to="/Values/Domains/"> -->
            <nuxt-link to="/values/domains/">
              <v-btn color="primary" class="mx-5" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link :to="`importance/${card.id}`">
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
//import { mapState } from "vuex"
export default {
  data() {
    return {
      id: this.$route.params.keyword,
      select: [],
        desserts: [
          {
            name: "Acceptance",
            desctiption: "to be open to and accepting of myself, others, life etc",
          },
          {
            name: "Authenticity",
            desctiption: "to be authentic, genuine, real; to be true to myself",
          },
        ],
      values: [
        "Acceptance",
        "Adventure",
        "Assertiveness",
        "Authenticity",
        "Beauty",
        "Caring",
        "Challenge",
        "Compassion",
        "Connection",
        "Contribution",
        "Conformity",
        "Cooperation",
        "Courage",
        "Creativity",
        "Curiosity",
        "Encouragement",
        "Equality",
        "Excitement",
        "Fairness",
        "Fitness",
        "Flexibility",
        "Freedom",
        "Friendliness",
        "Forgiveness",
        "Fun",
        "Generosity",
        "Gratitude",
        "Honesty",
        "Humour",
        "Humility",
        "Industry",
        "Independence",
        "Intimacy",
        "Justice",
        "Kindness",
        "Love",
        "Mindfulness",
        "Order",
        "Open-mindedness",
        "Patience",
        "Persistence",
        "Pleasure",
        "Power",
        "Reciprocity",
        "Respect",
        "Responsibility",
        "Romance",
        "Safety",
        "Self-awareness",
        "Self-care",
        "Self-development",
        "Self-control",
        "Sensuality",
        "Sexuality",
        "Spirituality",
        "Skilfulness",
        "Supportiveness",
        "Trust",
      ],
      panel: false,
      panel1: false,
      search: "", 
    }
  },
  methods: {
    openPanel() {
      this.panel = true
    },
    openPanel1() {
      this.panel1 = true
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
    keywords: {
      get() {
        return this.card.keywords
      },
      set(keywords) {
        this.$store.commit("cards/updateKeywords", { card: this.card, keywords})
      }
    }
  },
}
</script>
