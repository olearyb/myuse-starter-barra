<template>
  <div>
    <h1 class="card__header">Values Dashboard</h1>
    <v-card class="question card__text pa-sm-5 py-5 px-2">
      <div>
        <radar-chart :data="radarChartData" :options="radarChartOptions" :height="400" />
      </div>
    </v-card>
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in getCards"
          :key="card.id"
          cols="12"
          :sm="card.flex"
          xs="1"
        >
        <v-card>
          <v-card-title class="title" v-text="card.title">
          </v-card-title>
          <p class="pa-4">Importance: {{ card.importance }} <br />
          Effectiveness: {{ card.effectiveness }} </p>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import RadarChart from "~/components/RadarChart"
export default {
  layout: "tabs",
  components: {
    RadarChart,
  },
  data() {
    return {
      radarChartOptions: {
          responsive: true,
          scales: {
            yAxes: [
                {
                ticks: {
                    beginAtZero: true,
                    display: false,
                    min: 0,
                    max: 10,
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
              },
            }
          ]
        }
      },
      /* radarChartData: {
        labels: [
        "Personal Growth",
        "Work",
        "Leisure",
        "Health",
        "Community",
        "Family",
        "Parenting",
        "Intimate",
        "Social",
        "Spirituality",
        ],
        datasets: [
          {
            label: "Importance",
            backgroundColor: 'rgb(54, 162, 235, 0.75)',
            data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
          },
          {
            label: "Effectiveness",
            backgroundColor: 'rgb(75, 192, 192, 0.75)',
            data: [7, 7, 7, 6, 3, 5, 10, 6, 7, 4],
          },
        ]
      } */
    } 
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
    //...mapState(["getCards"]),
    barChartData() {
      return {
        labels: ['Importance', 'Effectiveness'],
        datasets: [
          {
            // backgroundColor: ["red", "orange", "yellow"],
            backgroundColor: [chartColors.blue, chartColors.green],
            data: [this.importance, this.effectiveness]
          }
        ]
      } 
    },
    radarChartData() {
      return {
        labels: this.getCards.map(card => card.title),
        datasets: [
          {
            label: "Importance",
            backgroundColor: 'rgb(54, 162, 235, 0.75)',
            //data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
            data: this.getCards.map(card => card.importance),
          },
          {
            label: "Effectiveness",
            backgroundColor: 'rgb(75, 192, 192, 0.75)',
            //data: [7, 7, 7, 6, 3, 5, 10, 6, 7, 4],
            data: this.getCards.map(card => card.effectiveness),
          },
        ]
      }
    },
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
  /* computed: {
    radarChartData() {
      return {
        labels: [
        "Personal Growth",
        "Work",
        "Leisure",
        "Health",
        "Community",
        "Family",
        "Parenting",
        "Intimate Relationships",
        "Social",
        "Spirituality",
      ],
      datasets: [
          {
            // backgroundColor: ["red", "orange", "yellow"],
            data: [9, 8, 8, 9, 4, 6, 2, 8, 9, 5],
          }
        ]
      }
    },
  }*/
}
</script>