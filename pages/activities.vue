<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          <v-icon large color="black">
            mdi-comment-question-outline
          </v-icon>
          Activities
        </h1>
        <v-container fluid>
          <v-row dense>
            <v-col
              v-for="card in cards"
              :key="card.title"
              :sm="card.flex"
              xs="1"
            >
              <v-card>
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  height="200px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Activity 1",
        src: "https://picsum.photos/id/1032/400/800",
        flex: 3,
      },
      {
        title: "Activity 2",
        src: "https://picsum.photos/id/1035/400/800",
        flex: 9,
      },
      {
        title: "Activity 3",
        src: "https://picsum.photos/id/1018/400/800",
        flex: 6,
      },
      {
        title: "Activity 4",
        src: "https://picsum.photos/id/1015/400/800",
        flex: 6,
      },
      {
        title: "Activity 5",
        src: "https://picsum.photos/id/1036/400/800",
        flex: 9,
      },
      {
        title: "Activity 6",
        src: "https://picsum.photos/id/1041/400/800",
        flex: 3,
      },
    ],
  }),
}
</script>
