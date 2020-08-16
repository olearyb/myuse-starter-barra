<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          {{ domainTitle }}
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-img
            :src="require('~/assets/images/survey.svg')"
            class="text-center"
          />
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
                <v-header class="my-5"><b>Keywords</b></v-header>
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
              <div class="m-2 text-center pb-10">
                <nuxt-link to="/Values/Domains">
                  <v-btn color="primary" dark large>Back</v-btn>
                </nuxt-link>
                <nuxt-link to="/Breath_Will_Test">
                  <v-btn color="primary" dark large>Next</v-btn>
                </nuxt-link>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["domainTitle"],
  data() {
    return {
      select: [],
      items: [],
      search: "", //sync search
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
