<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Support
        </h1>
        <v-card class="card__text pa-sm-5 py-5 px-2">
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <p>
                  This is a placeholder
                  <a href="https://myuse.netlify.app/support" target="_blank"
                    >support page</a
                  >
                  for students to find further assistance and advise. Example
                  images below.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <v-card class="my-5 pa-sm-5 py-5 px-2">
          <v-img
            :src="require('~/assets/images/support.svg')"
            class="text-center"
          />
        </v-card>
        <v-card class="my-5 pa-sm-5 py-5 px-2">
          <v-img
            :src="require('~/assets/images/header.svg')"
            class="text-center"
          />
        </v-card>
        <v-card class="my-5 pa-sm-5 py-5 px-2">
          <v-img
            :src="require('~/assets/images/skills.svg')"
            class="text-center"
          />
        </v-card>
        <v-card class="my-5 pa-sm-5 py-5 px-2">
          <v-img
            :src="require('~/assets/images/study.svg')"
            class="text-center"
          />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
