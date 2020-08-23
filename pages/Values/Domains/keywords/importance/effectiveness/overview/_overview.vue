<template>
  <div id="page__home">
    <v-row dense>
      <v-col cols="12">
        <h1 class="card__header">
          {{ card.title }}
        </h1>
        <v-card class="question card__text pa-sm-5 py-5 px-2">
          <v-row>
            <v-col cols="12">
              <h2 class="my-10">Keywords</h2>
              <p>list of keywords {{ keywords }} </p>
            </v-col>
            <v-col cols="12">
              <v-divider class="my-2"></v-divider>
            </v-col>
            <v-col cols="12">
              <p>{{ importance }}</p><br />
              <p> {{ effectiveness }} </p>
              <h2 class="my-10">Ratings</h2>
              <bar-chart :data="barChartData" :options="barChartOptions" :height="200" />
            </v-col>
          </v-row>
          <div class="m-2 text-center pb-10">
            <nuxt-link :to="`../${card.id}`">
              <v-btn color="primary" class="mx-5" dark large>Back</v-btn>
            </nuxt-link>
            <nuxt-link to="/Values/Domains">
              <v-btn color="primary" class="mx-5" dark large>FInish</v-btn>
            </nuxt-link>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
//import ChartBar from "~/components/chart-bar"
import BarChart from '~/components/BarChart'
import { mapGetters } from "vuex"

const chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
}

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      id: this.$route.params.overview,
      barChartData: {
        labels: ['Importance', 'Effectiveness'],
        datasets: [
          {
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.blue, chartColors.green],
            data: [this.importance, this.effectiveness]
          }
        ]
      },
      barChartOptions: {
        responsive: true,
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: 'Ratings'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                display: false,
              },
              gridLines: {
                display: false,
              },
              scaleLabel: {
                display: false,
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              }
            }
          ]
        }
      }
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
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
}
</script>
