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
                  this life domain for you personally.
                  
                    <v-icon color="primary" @click.stop="openPanel">mdi-comment-question-outline</v-icon>
                      <v-dialog v-model="panel" scrollable max-width="80vw">
                        <template v-slot:activator="{ on, attrs }"></template>
                        <v-card>
                          <v-card-title>Keywords</v-card-title>
                          <v-divider></v-divider>
                          <v-card-text>
                            When thinking of keywords, it can be useful to ask
                            yourself the following questions:<br /><br /> 
                            <div>
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
                  v-model="keywords"
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
            <nuxt-link to="/values/domains">
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
      panel: false,
      search: "", 
    }
  },
  methods: {
    openPanel() {
      this.panel = true
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
  watch: {
    select(val) {
      if (val.length > 5) {
        this.$nextTick(() => this.select.pop())
      }
    },
  },
}
</script>
