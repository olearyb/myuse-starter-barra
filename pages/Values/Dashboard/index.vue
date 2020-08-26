<template>
  <div>
    <h1>Chart Demo</h1>
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
      radarChartData: {
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
      }
    }
  },
  computed: {
    ...mapGetters("cards", ["getCards"]),
  }
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