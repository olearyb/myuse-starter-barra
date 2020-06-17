<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          About
        </h1>
        <v-card class="card__text pa-sm-5 py-5 px-2">
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="4" xs="12">
                <v-img
                  :src="require('~/assets/images/nuxt.svg')"
                  height="100"
                  contain
                  class="mt-5"
                ></v-img>
                <h3 class="text-center my-2">Nuxt</h3>
              </v-col>
              <v-col cols="12" sm="8" xs="12">
                <v-card-text>
                  <p>
                    NuxtJS is an open source framework making for simple and
                    powerful web development
                  </p>
                  <p>
                    <a href="https://nuxtjs.org/" target="_blank">
                      Nuxt Documentation
                    </a>
                  </p>
                  <p>
                    <a href="https://github.com/nuxt/nuxt.js" target="_blank">
                      Nuxt GitHub
                    </a>
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="4" xs="12">
                <v-img
                  :src="require('~/assets/images/vuetify.svg')"
                  height="100"
                  contain
                  class="mt-5"
                ></v-img>
                <h3 class="text-center my-2 primary--text">Vuetify</h3>
              </v-col>
              <v-col cols="12" sm="8" xs="12">
                <v-card-text>
                  <p>
                    Vuetify is a progressive Material Design component framework
                    for Vue.js. It was designed to empower developers to create
                    amazing applications.
                  </p>
                  <p>
                    <a
                      href="https://vuetifyjs.com/en/components/api-explorer/"
                      target="_blank"
                    >
                      Vuetify Documentation
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://github.com/vuetifyjs/vuetify"
                      target="_blank"
                    >
                      Vuetify GitHub
                    </a>
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="4" xs="12">
                <v-img
                  :src="require('~/assets/images/gitlab.svg')"
                  height="100"
                  contain
                  class="mt-5"
                ></v-img>
                <h3 class="text-center my-2">GitLab</h3>
              </v-col>
              <v-col cols="12" sm="8" xs="12">
                <v-card-text>
                  <p>
                    Your project repository will be hosted on GitLab. We
                    encourage you to 'push' updates as much as possible so that
                    we can track your progress. The Gitkraken client suggested
                    below may be useful if you are learning Git.
                  </p>
                  <p>
                    <a href="https://gitlab.com/" target="_blank">
                      GitLab
                    </a>
                  </p>
                  <p>
                    <a href="https://www.gitkraken.com/" target="_blank">
                      Gitkraken
                    </a>
                  </p>
                </v-card-text>
              </v-col>
              <v-col cols="12">
                <v-divider></v-divider>
              </v-col>
              <v-col cols="12" sm="4" xs="12">
                <v-img
                  :src="require('~/assets/images/vscode.svg')"
                  height="100"
                  contain
                  class="mt-5"
                ></v-img>
                <h3 class="text-center my-2 primary--text">VS Code</h3>
              </v-col>
              <v-col cols="12" sm="8" xs="12">
                <v-card-text>
                  <p>
                    Microsoft Visual Studio Code is our recommended editor. Two
                    extensions are recommended to be installed with Visual
                    Studio - Vetur and ESLint for automatic code formatting and
                    highlighting.
                  </p>
                  <p>
                    <a href="https://code.visualstudio.com/" target="_blank"
                      >Visual Studio
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
                      target="_blank"
                    >
                      Vetur extension
                    </a>
                  </p>
                  <p>
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
                      target="_blank"
                    >
                      ESLint extension
                    </a>
                  </p>
                </v-card-text>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
