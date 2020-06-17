<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Welcome
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
                  Welcome to the MyUse starter template! This project uses the
                  <a href="https://nuxtjs.org/guide" target="_blank">Nuxt</a>
                  framework, based on the VueJS javascript library.
                </p>
                <p>
                  The UI follows the Material Design spec, using the
                  <a
                    href="https://vuetifyjs.com/en/components/api-explorer/"
                    target="_blank"
                    >Vuetify</a
                  >
                  components library. Check out the about page for more
                  information.
                </p>
                <p>
                  Below are some examples of form UI components from Vuetify.
                </p>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-2"></v-divider>
              </v-col>
              <v-col cols="12">
                <v-checkbox
                  v-model="checkbox"
                  :label="`Checkbox 1: ${checkbox.toString()}`"
                ></v-checkbox>
                <v-radio-group v-model="radioGroup">
                  <v-radio
                    v-for="n in 3"
                    :key="n"
                    :label="`Radio ${n}`"
                    :value="n"
                  ></v-radio>
                </v-radio-group>
                <v-switch
                  v-model="switch1"
                  :label="`Switch 1: ${switch1.toString()}`"
                ></v-switch>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-2"></v-divider>
              </v-col>
              <v-col cols="12">
                <v-select
                  :items="selectItems"
                  label="Select list"
                  outlined
                ></v-select>
                <v-text-field
                  v-model="textInput"
                  :counter="100"
                  label="Text Input"
                  outlined
                ></v-text-field>
                <v-textarea
                  v-model="textInput2"
                  label="Outlined textarea"
                  outlined
                ></v-textarea>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-2"></v-divider>
              </v-col>
              <v-col cols="12">
                <v-subheader class="pl-0">Always show thumb label</v-subheader>
                <v-slider v-model="slider" thumb-label="always"></v-slider>
              </v-col>
              <v-col cols="12">
                <v-divider class="my-5"></v-divider>
                <v-btn class="ma-2" outlined color="indigo">
                  Outlined Button
                </v-btn>
                <v-btn class="ma-2" outlined fab color="teal">
                  <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <v-btn class="ma-2" outlined large fab color="indigo">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <div class="my-2">
                  <v-btn x-small color="info">
                    Extra small Button
                  </v-btn>
                </div>
                <div class="my-2">
                  <v-btn small color="accent">Small Button</v-btn>
                </div>
                <div class="my-2">
                  <v-btn color="warning">Normal Button</v-btn>
                </div>
                <div class="my-2">
                  <v-btn large color="error">Large Button</v-btn>
                </div>
                <div class="my-2">
                  <v-btn x-large color="success">Extra large Button</v-btn>
                </div>
                <div class="my-2">
                  <v-btn rounded color="primary">Rounded Button</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
      radioGroup: 1,
      switch1: true,
      selectItems: ["Option One", "Option Two", "Option Three", "Option Four"],
      textInput: "",
      textInput2: "",
      slider: 45,
    }
  },
}
</script>
