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
        <v-container class="text-center">
          <v-btn
            x-small
            outlined
            color="primary"
            @click.stop="openInfoPanel"
          >more info
          </v-btn>
        </v-container>
        <v-dialog v-model="infoPanel" scrollable max-width="80vw">
          <template v-slot:activator="{ on, attrs }"></template>
          <v-card>
            <v-card-title>How it Works</v-card-title>
            <!-- <v-spacer></v-spacer>
            <v-btn icon @click="infoPanel = false">
            <v-icon>mdi-close</v-icon>
            </v-btn> -->
            <v-divider class="py-5"></v-divider>
            <v-card-text>
              Select a life domain from the list. Dont worry if
              not all are relevant to you.<br /><br />
              For each life category/domain, the goal is to identify a few <b>keywords</b> 
              or <b>phrases</b> that represent what is <b>important</b> or <b>meanigful</b>
              to you in the selected life domain.<br /><br />                
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in getCards"
              :key="card.id"
              cols="12"
              :sm="card.flex"
              xs="1"
            >
              
                <v-card class="pa-5">
                  <v-img :src="card.src" class="white--text align-end ma-5" height="200px">
                  </v-img>
                  <v-card-title
                    class="title"
                    v-text="card.title"
                  ></v-card-title>
                  <v-row class="pl-5">
                  <nuxt-link :to="`keywords/${card.id}`">
                  <v-card-actions class="explore">
                    <v-btn rounded color="primary" class="px-2">Explore</v-btn>
                  </v-card-actions>
                  </nuxt-link>
                  <v-spacer></v-spacer>
                  <v-icon class="pr-5" large color="#3BB372" v-if="card.keywords != 0 && card.effectiveness != 0 && card.importance != 0">mdi-check-circle-outline</v-icon>
                  </v-row>
                </v-card>
                  
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
  data() {
    return {
      infoPanel: false,
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    card() {
      return this.getCards.find((el) => el.id === this.id)
    },
    effectiveness: {
      get() {
        return this.card.effectiveness
      },
      set(effectiveness) {
        this.$store.commit("cards/updateEffectiveness", { card: this.card, effectiveness})
      },
    },
    importance: {
      get() {
        return this.card.importance
      },
      set(importance) {
        this.$store.commit("cards/updateImportance", { card: this.card, importance})
      },
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
  methods: {
    openInfoPanel() {
      this.infoPanel = true
    }
  }
}
</script>

<style scoped>
.title {
  white-space: pre;
}
a {
  text-decoration: none;
}
.explore {
  text-align: end;
}
</style>